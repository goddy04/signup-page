import React from 'react';
import Table from '../components/table'; // Adjust the path based on your folder structure
import './Dashboard.css'; // Import the CSS file for styles

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Top Bar
      <div className="top-bar">
        <h1>Dashboard</h1>
        <div className="user-info">Welcome, User</div>
      </div> */}

      <div className="dashboard-content">
        {/* Sidebar */}
        <div className="sidebar">
          <ul>
            {/* <li>Home</li>
            <li>Programs</li>
            <li>Reports</li>
            <li>Settings</li>
            <li>Logout</li> */}
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
            <span>My Program   &gt;  Manage Program</span>
            <div className='table'>
            <Table /> {/* Your Table component */}
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
