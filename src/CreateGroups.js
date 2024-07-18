import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GroupContext } from './GroupContext';
import './App.css';

function CreateGroupsPage() {
  const { setGroups } = useContext(GroupContext);
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [fullName, setFullName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [subject, setSubject] = useState("");
  const navigate = useNavigate();

  const FirstFormSubmit = (e) => {
    e.preventDefault();
    setShowSecondForm(true);
  };

  const send = () => {
    const createGroup = { fullName, registrationNumber, phoneNumber, email, gender, courseCode, subject };
    fetch("http://localhost:8080/Create/addCreate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(createGroup),
    }).then(() => {
      alert("Data added");
    }).catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
  };
  const go = () => {
    const createGroup = { fullName, registrationNumber, gender };
    fetch("http://localhost:8080/StdCri/std", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(createGroup),
    }).then(() => {
      alert("Data added");
    }).catch((error) => {
      console.error('There was a problem with the fetch operation:', error);
    });
  };
  const SecondFormSubmit = (e) => {
    e.preventDefault();
    const studentsList = [{ fullName, registrationNumber, gender }];
    generateGroups(studentsList);
    send();
    navigate('/mains/view-group');
  };

  const generateGroups = (studentsList) => {
    const groups = [];
    for (let i = 0; i < studentsList.length; i += 5) {
      groups.push(studentsList.slice(i, i + 5));
    }
    setGroups(groups);
  };

  return (
    <div>
      <h1>Create Groups</h1>
      {!showSecondForm ? (
        <form onSubmit={FirstFormSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="text"
            name="registrationNumber"
            placeholder="Reg. Number"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <select
            name="courseCode"
            value={courseCode}
            onChange={(e) => setCourseCode(e.target.value)}
            required
          >
            <option value="">Select Course Code</option>
            <option value="IT812">IT812</option>
            <option value="MT822">MT822</option>
            <option value="NT822">NT822</option>
            <option value="PT822">PT822</option>
            <option value="RM822">RM822</option>
            <option value="WT822">WT822</option>
          </select>
          <br />
          <select
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          >
            <option value="">Subject</option>
            <option value="Computerized Accounting">Computerized Accounting</option>
            <option value="Mobile Application Development">Mobile Application Development</option>
            <option value="Data Communication and Networking">Data Communication and Networking</option>
            <option value="Ms. Visual Programming">Ms. Visual Programming</option>
            <option value="Research and Consultancy Methodology">Research and Consultancy Methodology</option>
            <option value="Advanced Website Programming">Advanced Website Programming</option>
          </select>
          <br />
          <button onClick={send}type="submit">Save</button>
          <button type="submit">Next</button>
        </form>
      ) : (
        
        <form onSubmit={SecondFormSubmit}>
          <h2>Group Criteria</h2>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="text"
            name="registrationNumber"
            placeholder="Registration Number"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            required
          />
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <br />
          <button onClick={go}type="submit">Submit Group Criteria</button>
        </form>
      )}
    </div>
  );
}

export default CreateGroupsPage;
