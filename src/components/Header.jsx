import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CONFIG } from '../data/mockData';

// Componente auxiliar interno para la barra de progreso
const ProgressBar = ({ current, max }) => (
  <div className="w-100 mt-2">
    <div className="d-flex justify-content-between small text-muted-light mb-1">
      <span>XP Actual</span>
      <span>{current}/{max}</span>
    </div>
    <div style={{height: '6px', background: '#333', borderRadius: '3px', overflow: 'hidden'}}>
      <div style={{width: `${(current/max)*100}%`, background: 'var(--primary)', height: '100%', transition: 'width 0.5s'}}></div>
    </div>
  </div>
);

const Header = ({ setView, currentView }) => {
  const { user, logout, notifications } = useApp();
  const [showMenu, setShowMenu] = useState(false);
  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header className="sticky-top py-3 px-3 px-md-4 bg-header border-bottom-dark d-flex justify-content-between align-items-center">
      
      {/* LOGO IMAGEN EN HEADER */}
      <div className="d-flex align-items-center cursor-pointer" onClick={() => setView('dashboard')}>
        <img 
            src="./images/logo.png" 
            alt="FidyBoost" 
            style={{ height: '40px', width: 'auto', objectFit: 'contain' }} 
        />
      </div>
      
      <nav className="d-none d-md-flex gap-4">
        {['dashboard', 'explore', 'messages', 'notifications'].map((page) => (
          <div key={page} className={`nav-link-custom ${currentView === page ? 'active' : ''}`} onClick={() => setView(page)}>
            {page.charAt(0).toUpperCase() + page.slice(1)}
            {page === 'notifications' && unreadCount > 0 && <span className="badge bg-danger ms-1 rounded-circle p-1" style={{width:8, height:8, display:'inline-block'}}></span>}
          </div>
        ))}
      </nav>

      <div className="d-flex align-items-center gap-3 position-relative">
        <div className="text-end d-none d-sm-block lh-1">
          <div className="fw-bold small">{user.name}</div>
          <div className="text-primary small" style={{fontSize: '0.75rem'}}>{user.level}</div>
        </div>
        <img src={user.avatar} className="avatar-img" alt="Profile" onClick={() => setShowMenu(!showMenu)} />
        
        {showMenu && (
          <div className="dropdown-menu-custom fade-in">
            <div className="p-3 border-bottom border-secondary mb-2">
              <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold text-white">{user.level}</span>
                <small className="text-primary fw-bold">PRO</small>
              </div>
              <ProgressBar current={user.xp} max={CONFIG.LEVEL_CAP} />
            </div>
            <div className="dropdown-item-custom text-danger mx-2" onClick={logout}>
              <i className="bi bi-box-arrow-right me-2"></i>Cerrar Sesión
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;