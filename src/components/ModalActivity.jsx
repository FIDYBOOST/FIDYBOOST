import React from 'react';
import { useApp } from '../context/AppContext';

const ModalActivity = ({ activity, onClose }) => {
  const { toggleActivity, myActivities } = useApp();
  const isJoined = myActivities.some(a => a.id === activity.id);

  if(!activity) return null;

  return (
    <div className="modal-overlay fade-in" onClick={onClose}>
      <div className="modal-content-custom slide-up" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}><i className="bi bi-x-lg"></i></button>
        <div style={{height: '220px', background: `url(${activity.img}) center/cover`}} className="position-relative">
          <div className="position-absolute inset-0 bg-gradient-to-t d-flex align-items-end p-4">
             <div>
               <span className="badge bg-primary text-dark mb-2">{activity.category}</span>
               <h3 className="fw-bold text-white m-0 text-shadow">{activity.title}</h3>
             </div>
          </div>
        </div>
        <div className="p-4">
          <div className="row mb-4 g-3">
            <div className="col-6">
              <div className="p-2 rounded bg-dark border border-secondary text-center">
                 <i className="bi bi-calendar3 text-primary d-block mb-1"></i>
                 <small className="text-muted-light fw-bold">{activity.date || 'Flexible'}</small>
              </div>
            </div>
            <div className="col-6">
              <div className="p-2 rounded bg-dark border border-secondary text-center">
                 <i className="bi bi-people-fill text-primary d-block mb-1"></i>
                 <small className="text-muted-light fw-bold">{activity.members || 10} Asistentes</small>
              </div>
            </div>
          </div>
          
          <p className="text-muted-light mb-4" style={{lineHeight: '1.6'}}>{activity.description}</p>
          
          <button 
            className={`btn w-100 py-3 fw-bold text-uppercase ${isJoined ? 'btn-outline-danger' : 'btn-teal'}`}
            onClick={() => { toggleActivity(activity); onClose(); }}
          >
            {isJoined ? 'Cancelar Asistencia' : 'Confirmar Asistencia'}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ModalActivity;