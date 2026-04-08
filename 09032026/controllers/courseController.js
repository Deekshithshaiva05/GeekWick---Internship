let courses = [
 {id:1,name:"AI"},
 {id:2,name:"Machine Learning"}
]

const getCourses = (req,res)=>{
    res.json(courses)
}

const createCourse = (req,res)=>{
    const course = req.body

    const newCourse = {
        id:courses.length+1,
        ...course
    }

    courses.push(newCourse)

    res.json(newCourse)
}

module.exports = {
    getCourses,
    createCourse
}