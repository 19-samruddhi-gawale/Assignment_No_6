
import React, { useState } from "react";
import StudentForm from "./student_form.jsx";
import StudentDetails from "./student_detail.jsx";
import "./App.css";


function App() {
  const [student, setStudent] = useState(null);

  return (
    <div className="app">
      <header className="header">
        <div className="logo">🎓</div>
        <div>
          <h1>Student Information Application</h1>
          <p>Register and view student information.</p>
        </div>
      </header>

      <main className="main-content">
        <StudentForm onAddStudent={setStudent} />
        <StudentDetails student={student} />
      </main>

      <footer>
        Student Information Application
        <span>♥</span>
        Made with React
      </footer>
    </div>
  );
}

export default App;
