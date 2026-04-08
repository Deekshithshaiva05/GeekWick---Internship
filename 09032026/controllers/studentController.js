let students = [
 { id:1, name:'John Doe', age:20, dob:'2003-01-15', branch:'Computer Science', college:'ATME'},
 { id:2, name:'Jane Smith', age:22, dob:'2001-05-20', branch:'Mathematics', college:'ATME'},
 { id:3, name:'Alice Johnson', age:19, dob:'2004-11-10', branch:'Physics', college:'ATME'}
]

// GET all students
const getAllStudents = (req,res)=>{
    res.json(students)
}

// GET student by ID
const getStudentById = (req,res)=>{
    const id = parseInt(req.params.id)

    const student = students.find(s=>s.id===id)

    if(!student){
        return res.json({message:"Student not found"})
    }

    res.json(student)
}

// POST student
const createStudent = (req,res)=>{
    const student = req.body

    const newStudent = {
        id: students.length + 1,
        ...student
    }

    students.push(newStudent)

    res.json({
        message:"Student created successfully",
        student:newStudent
    })
}

// PUT update
const updateStudent = (req,res)=>{
    const id = parseInt(req.params.id)

    const student = students.find(s=>s.id===id)

    if(!student){
        return res.json({message:"Student not found"})
    }

    student.name = req.body.name
    student.branch = req.body.branch

    res.json(student)
}

// DELETE student
const deleteStudent = (req,res)=>{
    const id = parseInt(req.params.id)

    const index = students.findIndex(s=>s.id===id)

    if(index === -1){
        return res.json({message:"Student not found"})
    }

    students.splice(index,1)

    res.json({message:"Student deleted"})
}

module.exports = {
    getAllStudents,
    getStudentById,
    createStudent,
    updateStudent,
    deleteStudent
}