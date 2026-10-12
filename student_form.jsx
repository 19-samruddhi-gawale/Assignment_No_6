
import React, { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [student, setStudent] = useState({
    name: "",
    rollNumber: "",
    department: "",
    marks: ""
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(student);

    setStudent({
      name: "",
      rollNumber: "",
      department: "",
      marks: ""
    });
  };

  return (
    <div className="card">
      <div className="card-heading">
        <span className="heading-icon">🎓</span>
        <div>
          <h2>Student Registration</h2>
          <p>Enter the details to register a student.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Student Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter student name"
          value={student.name}
          onChange={handleChange}
          required
        />

        <label>Roll Number</label>
        <input
          type="text"
          name="rollNumber"
          placeholder="Enter roll number"
          value={student.rollNumber}
          onChange={handleChange}
          required
        />

        <label>Department</label>
        <select
          name="department"
          value={student.department}
          onChange={handleChange}
          required
        >
          <option value="">Select department</option>
          <option value="Computer Engineering">Computer Engineering</option>
          <option value="Information Technology">Information Technology</option>
          <option value="Electronics Engineering">Electronics Engineering</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
        </select>

        <label>Marks (0–100)</label>
        <input
          type="number"
          name="marks"
          placeholder="Enter marks"
          min="0"
          max="100"
          value={student.marks}
          onChange={handleChange}
          required
        />

        <button type="submit">＋ Submit Details</button>
      </form>
    </div>
  );
}

export default StudentForm;
