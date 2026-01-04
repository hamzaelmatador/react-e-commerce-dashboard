import Sidebar from './Sidebar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

import '../styles/dashboardLayout.css';

function DashboardLayout({ children }) {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-layout">
      <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)}/>
      <div className="dashboard-content"  >
        <button className="menu-btn" onClick={() => {setSidebarOpen(!sidebarOpen)}}>
           <FontAwesomeIcon icon={faBars} />
        </button>
        {children}
        <h1>Hello</h1>
      </div>
    </div>
  );
}

export default DashboardLayout;
