import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

const LoginScreen = () => {
  const { login } = useApp();
  const [form, setForm] = useState({ u: '', p: '' });
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form.u, form.p);
    if (!success) {
      setError(true);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-darker fade-in">
      <div className="card-custom p-5 text-center" style={{ maxWidth: '400px', width: '100%' }}>
        
        {/* LOGO IMAGEN */}
        <div className="mb-4">
            <img 
                src="../images/logo.png" 
                alt="FidyBoost Logo" 
                style={{ maxHeight: '60px', width: 'auto' }} 
            />
        </div>

        <h4 className="fw-bold mb-4 text-white">Bienvenido</h4>

        <form onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label className="small text-muted-light mb-1">Usuario</label>
            <input 
              className="input-dark" 
              placeholder="fidyboost" 
              value={form.u} 
              onChange={e => { setForm({...form, u: e.target.value}); setError(false); }} 
            />
          </div>
          
          <div className="mb-4 text-start">
            <label className="small text-muted-light mb-1">Contraseña</label>
            <input 
              type="password" 
              className="input-dark" 
              placeholder="1234" 
              value={form.p} 
              onChange={e => { setForm({...form, p: e.target.value}); setError(false); }} 
            />
          </div>

          {error && (
            <div className="alert alert-danger py-2 small mb-3">
              <i className="bi bi-exclamation-circle me-2"></i>
              Usuario o contraseña incorrectos
            </div>
          )}

          <button type="submit" className="btn-teal w-100">ENTRAR</button>
        </form>
        
        <div className="mt-3 text-muted-light small">
            Prueba: <b>fidyboost</b> / <b>1234</b>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;