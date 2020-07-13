const Class = require('../models/Class')

// name: {type: String, required: true},
// teacher: {type: Schema.Types.ObjectId, ref: 'users'},
// students: {type: Schema.Types.ObjectId, ref: 'users'},
// maxNumber: {type: Number, required: true},
// type: {type: String, required: true}

// SELECT, UPDATE, INSERT, DELETE, selectByName
exports.selectAll = (req, res, next) => {
    return new Promise((resolve, reject) => {
        Class.find()
            .populate("teacher")
            .populate("students")
            .exec()
            .then(classes => {
                console.log(classes)
                resolve(classes)
            })
            .catch(err => {
                reject(err)
            })
    })
}

exports.selectByName = (req, res, next) => {
    let classroomName = req.body.classroomName
    return new Promise((resolve, reject) => {
        Class.findOne({name: classroomName})
        .then(classroom => {
            resolve(classroom)
        })
        .catch(err => {
            reject(err)
        })
    })
}

exports.selectById = (req, res, next) => {
    let id = req.body.id
    return new Promise((resolve, reject) => {
        Class.findById(id)
        .then(classroom => {
            resolve(classroom)
        })
        .catch(err => {
            reject(err)
        })
    })
}

exports.insert = (req, res, next) => {
    return new Promise((resolve, reject) => {
        const classroom = new Class({
            name: req.body.name,
            teacher: req.body.teacher,
            students: req.body.students,
            maxNumber: req.body.maxNumber,
            type: req.body.type,
        })
        console.log("preparing to save")
        classroom.save()
            .then(classroom => {
                console.log("classroom inserted", classroom)
                resolve(classroom)
            })
            .catch(err => {
                reject(err)
            })
    })
}

exports.update = (req, res, next) => {
    return new Promise((resolve, reject) => {
        let id = req.body.id
        let name = req.body.name
        let teacher = req.body.teacher
        let students = req.body.students
        let maxNumber = req.body.maxNumber
        let type = req.body.type
        Class.findById(id)
            .then(classroom => {
                classroom.name = name
                classroom.teacher = teacher
                classroom.students = students
                classroom.maxNumber = maxNumber
                classroom.type = type
                classroom.save()
                    .then(() => {
                        resolve("classroom updated")
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
            .catch()
    })
}