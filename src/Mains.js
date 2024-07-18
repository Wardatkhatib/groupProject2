import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './Home';
import CreateGroupsPage from './CreateGroups';
import ViewGroupPage from './ViewGroup';
import ClassGroupsPage from './ClassGroups';

function MainPage() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="home">Home</Link></li>
          <li><Link to="create-group">Create Groups</Link></li>
          <li><Link to="view-group">View Group</Link></li>
          <li><Link to="class-groups">All Student</Link></li>
     
        </ul>
      </nav>
      <Routes>
        <Route path="home" element={<HomePage />} />
        <Route path="create-group" element={<CreateGroupsPage />} />
        <Route path="view-group" element={<ViewGroupPage />} />
        <Route path="class-groups" element={<ClassGroupsPage />} />
      </Routes>
    </div>
  );
}

export default MainPage;
