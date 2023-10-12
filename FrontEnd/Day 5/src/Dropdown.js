import React, { useState } from 'react';

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (action) => {
    // Add logic for handling item click (e.g., navigating to account details or logging out)
    console.log(`Clicked ${action}`);
    // Close the dropdown
    setIsOpen(false);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        Dropdown
      </button>
      <ul className="dropdown-menu">
        <li onClick={() => handleItemClick('Account Details')}>
          Account Details
        </li>
        <li onClick={() => handleItemClick('Logout')}>Logout</li>
      </ul>
    </div>
  );
}

export default Dropdown;
