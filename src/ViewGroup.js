import React, { useContext, useEffect, useState } from 'react';
import { GroupContext } from './GroupContext';

function ViewGroupPage() {
  const { setGroups } = useContext(GroupContext);
  const [groups, setGroupsLocal] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/StdCri/groups")
      .then(response => response.json())
      .then(data => {
        setGroups(data); // Update the context
        setGroupsLocal(data); // Update local state
      })
      .catch(error => console.error('Error fetching groups:', error));
  }, []);

  return (
    <div>
      <h1>View Groups</h1>
      <h2>Generated Groups</h2>
      {groups.length > 0 ? (
        groups.map((group, index) => (
          <div key={index}>
            <h3>Group {index + 1}</h3>
            <ul>
              {group.map((student, idx) => (
                <li key={idx}>
                  {student.fullName} - {student.registrationNumber} - {student.gender}
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No groups generated yet.</p>
      )}
    </div>
  );
}

export default ViewGroupPage;
