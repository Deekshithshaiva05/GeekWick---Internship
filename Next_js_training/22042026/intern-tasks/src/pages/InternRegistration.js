import React, { useState } from "react";
import UserCard from "../components/UserCard";
import InputField from "../components/InputField";

export default function InternRegistration() {
  const [show, setShow] = useState(true);

  const courses = ["React", "Node.js", "Machine Learning"];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    phone: "",
    department: "",
    skills: "",
  });

  const [submittedData, setSubmittedData] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid =
    formData.name && formData.email && formData.course;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    setSubmittedData(formData);
    setSuccess(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      course: "",
      phone: "",
      department: "",
      skills: "",
    });
    setSubmittedData(null);
    setSuccess(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Intern Registration</h1>

      {/* USER CARDS */}
      <h2>User Cards</h2>
      <UserCard name="Deekshith" role="Frontend Developer" />
      <UserCard name="Farhan" role="Backend Developer" />
      <UserCard name="Shamanth" role="ML Engineer" />

      {/* COURSE LIST */}
      <h2>Courses</h2>
      {courses.length > 0 ? (
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      ) : (
        <p>No interns available</p>
      )}

      {/* TOGGLE */}
      <button onClick={() => setShow(!show)}>
        Toggle Section
      </button>

      {show && <p>This section can be shown or hidden.</p>}

      {/* FORM */}
      <h2>Intern Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <InputField
          label="Course"
          name="course"
          value={formData.course}
          onChange={handleChange}
        />

        <InputField
          label="Phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />

        <InputField
          label="Department"
          name="department"
          value={formData.department}
          onChange={handleChange}
        />

        <InputField
          label="Skills"
          name="skills"
          value={formData.skills}
          onChange={handleChange}
        />

        {/* VALIDATION */}
        {!isFormValid && (
          <p style={{ color: "red" }}>
            Please fill required fields
          </p>
        )}

        <button type="submit" disabled={!isFormValid}>
          Submit
        </button>

        <button type="button" onClick={handleReset}>
          Reset
        </button>

        {/* SUCCESS */}
        {success && (
          <p style={{ color: "green" }}>
            Form submitted successfully!
          </p>
        )}
      </form>

      {/* PREVIEW */}
      {submittedData && (
        <div style={{
          border: "1px solid black",
          marginTop: "20px",
          padding: "10px",
          borderRadius: "8px"
        }}>
          <h3>Preview</h3>
          <p><b>Name:</b> {submittedData.name}</p>
          <p><b>Email:</b> {submittedData.email}</p>
          <p><b>Course:</b> {submittedData.course}</p>
          <p><b>Phone:</b> {submittedData.phone}</p>
          <p><b>Department:</b> {submittedData.department}</p>
          <p><b>Skills:</b> {submittedData.skills}</p>
        </div>
      )}
    </div>
  );
}