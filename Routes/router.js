const express = require('express')

const userController = require('../controller/userController')

const multerConfig = require('../middleware/multermiddleware')

const router = new express.Router()

router.post('/add',multerConfig.single("profile"),userController.addUser)

router.get('/get-all-students',userController.getallStudents)

router.delete('/delete-student/:id',userController.deleteStudent)

router.put('/edit/student/:id',multerConfig.single("profile"),userController.editStudent)

module.exports = router