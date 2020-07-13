const Colleges = require('../models/Colleges')

// name: {type: String, required: true},
// teacher: {type: Schema.Types.ObjectId, ref: 'users'},
// students: {type: Schema.Types.ObjectId, ref: 'users'},
// maxNumber: {type: Number, required: true},
// type: {type: String, required: true}

// SELECT, UPDATE, INSERT, DELETE, selectByName
exports.selectAllColleges = (req, res, next) => {

    const names= {
        alok:"alok",
        salary:19500*22
    }
    return new Promise((resolve, reject) => {
        Colleges.find()
            //.populate("author")
            //.populate("students")
            .exec()
            .then(colleges => {
                console.log(colleges)
                resolve(colleges)
            })
            .catch(err => {
                reject(err)
            })
    })
}

exports.selectOne = (req, res, next) => {
    return new Promise((resolve, reject) => {
        Colleges.findOne()
            //.populate("author")
            //.populate("students")
            .exec()
            .then(alok => {
                console.log(alok)
                resolve(alok)
            })
            .catch(err => {
                reject(err)
            })
    })
}
exports.selectById = (req, res, next) => {
    let id = req.body.id
    return new Promise((resolve, reject) => {
        Colleges.findById(id)
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
        const college = new Colleges({
            name: req.body.name,
            established: req.body.established,
            university: req.body.university,
            Location: req.body.Location,
            Owner: req.body.Owner,

        })
        console.log("finding college")
        console.log(Colleges.find({}).select({"name": "Norman"}))
        /*if(Colleges.findOne({}).name === "Norman") {
            //console.log("finding college")
            //console.log(Colleges.findOne({}).name)
            console.log("finding college ended")
            return res.json({"err":"College already added"})
        }
        console.log("preparing to save college details.")*/
        college.save()
            .then(college => {
                console.log("college inserted", college)
                resolve(college)
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
        let established = req.body.established
        let university = req.body.university
        let Location = req.body.Location
        let Owner = req.body.Owner
        Class.findById(id)
            .then(college => {
                college.name = name
                college.established = established
                college.university = university
                college.Location = Location
                college.Owner = Owner
                college.save()
                    .then(() => {
                        resolve("college updated")
                    })
                    .catch(error => {
                        reject(error)
                    })
            })
            .catch()
    })
}

exports.delete = (req, res, next) => {
    return new Promise((resolve, reject) => {
        Colleges.deleteOne()
            .then(() => resolve({"success":"Colleges deleted"}))
            .catch(error => reject(error))
    })

}