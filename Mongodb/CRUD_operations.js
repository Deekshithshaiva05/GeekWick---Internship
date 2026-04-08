// TO Switch / Create Database
use collegeDB

// To Create Collection
db.createCollection("students")

// To Insert One Document
db.students.insertOne({
  name: "Deekshith",
  age: 21,
  branch: "CSE-AIML",
  skills: ["Python", "ML", "Flask"],
  address: {
    city: "Mysuru",
    state: "Karnataka"
  }
})


// To Insert Many Documents
db.students.insertMany([
  {
    name: "Rahul",
    age: 22,
    branch: "CSE",
    skills: ["Java", "Spring"],
    address: { city: "Bangalore", state: "Karnataka" }
  },
  {
    name: "Anjali",
    age: 20,
    branch: "ISE",
    skills: ["C++", "DSA"],
    address: { city: "Mangalore", state: "Karnataka" }
  },
  {
    name: "Sneha",
    age: 23,
    branch: "ECE",
    skills: ["Embedded", "IoT"],
    address: { city: "Hubli", state: "Karnataka" }
  }
])


// Read (Get All Documents)
db.students.find()

// In Pretty Format
db.students.find().pretty()

// Read (Get One Document)
db.students.findOne({ name: "Rahul" })

// Filter Data
db.students.find({ age: 21 })

// To Select Specific Fields
db.students.find({}, { name: 1, branch: 1 })

// To get Query with Conditions
db.students.find({ age: { $gt: 21 } })
db.students.find({ age: { $lt: 22 } })

// AND Condition
db.students.find({ age: { $gt: 20 }, branch: "CSE" })

// OR Condition
db.students.find({ $or: [{ age: { $gt: 22 } }, { branch: "ISE" }] })    

// Update (Update One Document)
db.students.updateOne(
  { name: "Deekshith" },
  { $set: { age: 22 } }
)   

// Update (Update Many Documents)
db.students.updateMany(
  { branch: "CSE" },
  { $set: { branch: "Computer Science" } }
)       

// For Adding the new field
db.students.updateOne(
  { name: "Anjali" },
  { $set: { internship: "CodSoft" } }
)

// To increment value
db.students.updateOne(
  { name: "Deekshith" },
  { $inc: { age: 1 } }
)


// Delete (Delete One Document)
db.students.deleteOne({ name: "Sneha" })

// Delete (Delete Many Documents)
db.students.deleteMany({ age: { $gt: 22 } })

// To Drop Collection
db.students.drop()  

// To Drop Database
db.dropDatabase()

// To Show Collections
show collections

// To Show Databases
show dbs

// To Get Count of Documents
db.students.countDocuments()

// To Get Distinct Values
db.students.distinct("branch")

// To Sort Documents
db.students.find().sort({ age: 1 }) // Ascending
db.students.find().sort({ age: -1 }) // Descending

//  To Limit the Number of Documents
db.students.find().limit(2)

// To Skip Documents
db.students.find().skip(1).limit(2)

// To Create Index
db.students.createIndex({ name: 1 }) // Ascending Index on name field

// To Create Compound Index
db.students.createIndex({ branch: 1, age: -1 }) // Compound Index on branch and age fields

// To Get Indexes
db.students.getIndexes()

// To Drop Index
db.students.dropIndex({ name: 1 }) // Drop index on name field

// To Drop Compound Index
db.students.dropIndex({ branch: 1, age: -1 }) // Drop compound index on branch and age fields

// To Aggregate Data
db.students.aggregate([
  { $match: { branch: "CSE" } }, // Filter documents by branch
  { $group: { _id: "$branch", averageAge: { $avg: "$age" } } } // Group by branch and calculate average age
])  

