import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './styles/App.css';

function App() {
  return (
    <div className="layout-container">
      <Sidebar />
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;