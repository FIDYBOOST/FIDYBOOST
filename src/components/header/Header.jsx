import React from 'react';

const Header = () => {
  return (
    <header className="app-header d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <i className="bi bi-activity fs-3 me-2" style={{color: 'var(--primary-teal)'}}></i> 
        <span className="logo-text text-white">FIDY<span className="logo-highlight">BOOST</span></span>
      </div>
      
      <nav className="desktop-nav">
        <a href="#" className="active">Inicio</a>
        <a href="#">Explorar</a>
        <a href="#">Notificaciones</a>
        <a href="#">Mensajes</a>
      </nav>

      <div className="d-flex align-items-center gap-3">
        <div className="text-end d-none d-md-block">
          <div className="fw-bold small">Diego</div>
          <div className="text-muted" style={{fontSize: '0.7rem'}}>Nivel 5 • Bulking</div>
        </div>
        <img 
          src="https://ui-avatars.com/api/?name=Diego&background=8FD1CC&color=fff" 
          className="rounded-circle" width="40" height="40" 
          style={{border: '2px solid var(--primary-teal)'}} alt="Profile" 
        />
      </div>
    </header>
  );
};

export default Header;