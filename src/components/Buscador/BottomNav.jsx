import React, { useState } from 'react';

const BottomNav = () => {
  const [activeNav, setActiveNav] = useState('Inicio');
  const navItems = [
    { name: 'Inicio', icon: 'bi-house-door-fill' },
    { name: 'Explorar', icon: 'bi-search' },
    { name: 'Avisos', icon: 'bi-bell', badge: true },
    { name: 'Chat', icon: 'bi-chat-dots' },
  ];

  return (
    <nav className="navbar fixed-bottom bottom-nav d-lg-none">
      <div className="container-fluid d-flex justify-content-around">
        {navItems.map((item) => (
          <a 
            key={item.name}
            href="#" 
            className={`nav-item-mobile ${activeNav === item.name ? 'active' : ''}`}
            onClick={() => setActiveNav(item.name)}
          >
            <i className={`bi ${item.icon}`}></i>
            {item.name}
            {item.badge && <span className="notification-badge"></span>}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;