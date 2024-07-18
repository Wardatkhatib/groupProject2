import React from 'react';
import picha from '../src/Emage/Group one (1).jpg';

function HomePage() {
  return (
    <div className='homepage-container'>
      <header className='homepage-header'>
        <h1>About Us</h1>
        <p>Welcome to the Student Groups Management System.</p>
      </header>
      <section className='homepage-content'>
        <div className='text-content'>
          <p>This application helps you to manage and organize student groups efficiently.</p>
          <p>Features include:</p>
          <ul>
            <li>Creating and managing student groups</li>
            <li>Viewing group assignments</li>
            <li>Viewing all class groups and their members</li>
          </ul>
        </div>
        <div className='image-content'>
          <img src={picha} alt="Group" />
        </div>
      </section>
    </div>
  );
}

export default HomePage;
