
import React from "react";

function StudentDetails({ student }) {
  return (
    <div className="card">
      <div className="card-heading">
        <span className="heading-icon">📋</span>
        <div>
          <h2>Student Details</h2>
          <p>Your submitted information appears here.</p>
        </div>
      </div>

      {student ? (
        <div className="student-profile">
          <div className="profile-header">
            <div className="avatar">👤</div>
            <div>
              <h2>{student.name}</h2>
              <span className="student-badge">Student</span>
            </div>
          </div>

          <div className="detail-row">
            <span>Name</span>
            <strong>{student.name}</strong>
          </div>

          <div className="detail-row">
            <span>Roll Number</span>
            <strong>{student.rollNumber}</strong>
          </div>

          <div className="detail-row">
            <span>Department</span>
            <strong>{student.department}</strong>
          </div>

          <div className="detail-row">
            <span>Marks</span>
            <strong>{student.marks}/100</strong>
          </div>

          <div className="marks-box">
            <p>Academic Performance</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${student.marks}%` }}
              />
            </div>
            <strong>{student.marks}%</strong>
          </div>
        </div>
      ) : (
        <div className="empty-state">
          <div className="empty-icon">🎓</div>
          <h3>No Student Registered Yet</h3>
          <p>Fill in the registration form to view student details.</p>
        </div>
      )}

      <div className="quote">
        <span>✦</span>
        <p>Learn today, lead tomorrow!</p>
      </div>
    </div>
  );
}

export default StudentDetails;
