import React from 'react';
import { useApp } from '../context/AppContext';

const NotificationsView = () => {
  const { notifications } = useApp();

  return (
    <div className="app-container fade-in" style={{ maxWidth: '800px' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold m-0">Notificaciones</h3>
        {notifications.length > 0 && (
            <span className="badge bg-dark border border-secondary text-muted-light">{notifications.length} Total</span>
        )}
      </div>

      <div className="d-flex flex-column gap-2">
        {notifications.length === 0 ? (
            <div className="text-center py-5 text-muted-light">
                <i className="bi bi-bell-slash fs-1 d-block mb-2"></i>
                Sin notificaciones nuevas
            </div>
        ) : (
            notifications.map((n) => (
            <div key={n.id} className="card-custom p-3 d-flex gap-3 align-items-center hoverable">
                <div className={`rounded-circle p-2 ${n.read ? 'bg-dark border border-secondary text-muted' : 'bg-primary text-dark'}`}>
                   <i className={`bi ${n.read ? 'bi-envelope-open' : 'bi-bell-fill'}`}></i>
                </div>
                <div>
                <div className={`fw-bold ${n.read ? 'text-muted-light' : 'text-white'}`}>{n.text}</div>
                <small className="text-muted-light" style={{ fontSize: '0.75rem' }}>{n.time}</small>
                </div>
            </div>
            ))
        )}
      </div>
    </div>
  );
};

export default NotificationsView;