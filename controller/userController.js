const students = require('../Modals/userSchema');
const users = require('../Modals/userSchema')

// ADD data to Mongo db

exports.addUser = async(req,res)=>{
    console.log('inside addUser function');

    const{fname,lname,email,mobile,gender,status,location}=req.body

    try{
        const prestudent = await students.findOne({email})

        if(prestudent){
            res.status(406).json("User already exist")
        }else{
            const newstudent = new students({
                fname,lname,email,mobile,gender,status,profile:req.file.filename,location
            })

            await newstudent.save()
            res.status(200).json(newstudent)
        }
    }catch(err){
        res.status(401).json('Error : '+err)
    }
}

// GET data from Mongo db -----  only we need to use find method

exports.getallStudents = async(req,res)=>{

    // Using query parameter --- look allStudents() in AllApi in front-end

    const search = req.query.search

    // search using regular expression
    const query = {

        fname:{$regex:search,$options:"i"}
        
    }


    try{
        const allStudents = await students.find(query)

        res.status(200).json(allStudents)

    }catch(err){
        res.status(406).json(err)
    }
}

// DELETE Student

exports.deleteStudent = async(req,res)=>{
    // req id

    const {id} = req.params

    try{

        const removeData = await students.findByIdAndDelete({_id:id})

        res.status(200).json(removeData)

    }catch(err){
        res.status(401).json(err)
    }
}

// Edit single student
exports.editStudent = async(req,res)=>{
    const {id} = req.params
    const{fname,lname,email,mobile,gender,status,location,profile} = req.body
    const file = req.file ? req.file.filename : profile

    try{
        const updateStudent = await students.findByIdAndUpdate({_id:id},{
            fname,lname,email,mobile,gender,status,profile : file,location
        },{new:true})
        // new:true ----- must only give to update function

        await updateStudent.save()
        res.status(200).json(updateStudent)

    }catch(err){
        res.status(401).json(err)
    }
}