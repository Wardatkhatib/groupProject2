import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
function ClassGroupsPage() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);


   const{id}= useParams()
  useEffect(() => {
    loadStudents();
  }, []);

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8080/Create/delate?id=${id}`);
    loadStudents();
  };

  const editStudent = (student) => {
    setEditingStudent(student);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingStudent({ ...editingStudent, [name]: value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/Create/update/${editingStudent.id}`, editingStudent);
    setEditingStudent(null);
    loadStudents();
  };

  const loadStudents = async () => {
    const result = await axios.get("http://localhost:8080/Create/getCreate");
    setStudents(result.data);

    const countResult = await axios.get("http://localhost:8080/Create/count");
    setStudent(countResult.data);
  };


  
   

  return (
    <div>
      <h1>View Submitted Data</h1>
      <div className="student-list-container">
        <table className="student-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Full Name</th>
              <th>Registration Number</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Course Code</th>
              <th>Subject</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.fullName}</td>
                <td>{student.registrationNumber}</td>
                <td>{student.phoneNumber}</td>
                <td>{student.email}</td>
                <td>{student.gender}</td>
                <td>{student.courseCode}</td>
                <td>{student.subject}</td>
                <td>
                  <button onClick={() => editStudent(student)}>Edit</button>
                  <button onClick={() => deleteStudent(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingStudent && (
        <div>
          <form onSubmit={handleEditSubmit}>
            <input type="text" name="fullName" value={editingStudent.fullName} onChange={handleChange} placeholder="Full Name" required />
            <input type="text" name="registrationNumber" value={editingStudent.registrationNumber} onChange={handleChange} placeholder="Reg. Number" required />
            <input type="text" name="phoneNumber" value={editingStudent.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
            <input type="email" name="email" value={editingStudent.email} onChange={handleChange} placeholder="Email" required />
            <select name="gender" value={editingStudent.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <select name="courseCode" value={editingStudent.courseCode} onChange={handleChange} required>
              <option value="">Select Course Code</option>
              <option value="IT812">IT812</option>
              <option value="MT822">MT822</option>
              <option value="NT822">NT822</option>
              <option value="PT822">PT822</option>
              <option value="RM822">RM822</option>
              <option value="WT822">WT822</option>
            </select>
            <br />
            <select name="subject" value={editingStudent.subject} onChange={handleChange} required>
              <option value="">Subject</option>
              <option value="Computerized Accounting">Computerized Accounting</option>
              <option value="Mobile Application Development">Mobile Application Development</option>
              <option value="Data Communication and Networking">Data Communication and Networking</option>
              <option value="Ms. Visual Programming">Ms. Visual Programming</option>
              <option value="Research and Consultancy Methodology">Research and Consultancy Methodology</option>
              <option value="Advanced Website Programming">Advanced Website Programming</option>
            </select>
            <br />
            <button type="submit">Save</button>
          </form>
        </div>
      )}
    </div>
  );
}
export default ClassGroupsPage;
