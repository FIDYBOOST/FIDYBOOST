import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CONFIG } from '../data/mockData';

const Dashboard = ({ onNavigate, onSelect }) => {
  const { myActivities, groups, user, deleteGroup } = useApp();
  const [tab, setTab] = useState('todos');

  // Lógica de filtrado de pestañas
  const filteredActivities = tab === 'todos' ? myActivities 
    : tab === 'asistire' ? myActivities.filter(a => a.type === 'joined')
    : myActivities.filter(a => a.type === 'saved');

  return (
    <div className="fade-in">
      
      {/* 1. HERO BANNER (Esto es lo único que ves ahora) */}
      <div className="card-custom p-4 mb-4 d-flex flex-column flex-sm-row justify-content-between align-items-center bg-gradient-dark gap-3">
        <div>
          <h2 className="fw-bold mb-1">¡Vamos, {user.name}!</h2>
          <p className="text-muted-light mb-0">Estás a <strong className="text-white">{CONFIG.LEVEL_CAP - user.xp} XP</strong> de subir de nivel.</p>
        </div>
        <button className="btn-teal" onClick={() => onNavigate('explore')}>NUEVA ACTIVIDAD</button>
      </div>

      {/* 2. GRID LAYOUT (Esto es lo que faltaba) */}
      <div className="grid-layout">
        
        {/* COLUMNA IZQUIERDA: GRUPOS */}
        <div className="d-flex flex-column gap-3">
          <div className="d-flex justify-content-between align-items-center">
             <h5 className="fw-bold m-0"><i className="bi bi-people-fill text-primary me-2"></i>Tus Grupos</h5>
             <button className="btn btn-sm btn-outline-light" onClick={() => onNavigate('createGroup')}>+ Crear</button>
          </div>
          
          {groups.length === 0 ? (
             <div className="card-custom text-center py-5 border-dashed">
               <p className="text-muted-light mb-2">No tienes grupos activos</p>
               <small className="text-primary cursor-pointer" onClick={() => onNavigate('createGroup')}>Crear uno ahora</small>
             </div>
          ) : (
             <div className="d-flex flex-column gap-2">
               {groups.map((g) => (
                 <div key={g.id} className="card-custom p-3 d-flex align-items-center justify-content-between hoverable">
                   <div className="d-flex align-items-center overflow-hidden">
                     <div className="rounded-circle bg-dark border border-secondary p-2 me-3 fs-5 flex-shrink-0">⚡</div>
                     <div className="text-truncate">
                       <div className="fw-bold text-truncate">{g.nombre}</div>
                       <small className="text-muted-light">{g.actividad} • {g.horario}</small>
                     </div>
                   </div>
                   <button 
                    className="btn btn-icon-danger ms-2" 
                    title="Eliminar grupo"
                    onClick={(e) => { e.stopPropagation(); deleteGroup(g.id); }}
                   >
                     <i className="bi bi-trash"></i>
                   </button>
                 </div>
               ))}
             </div>
          )}
        </div>

        {/* COLUMNA DERECHA: AGENDA / CALENDARIO */}
        <div className="card-custom h-100 p-0 overflow-hidden d-flex flex-column">
           <div className="p-3 border-bottom border-secondary bg-darker">
             <h5 className="fw-bold m-0">📅 Tu Agenda</h5>
           </div>
           
           {/* Pestañas de la agenda */}
           <div className="d-flex border-bottom border-secondary">
             {['todos', 'asistire', 'guardados'].map(t => (
               <div key={t} 
                 className={`flex-grow-1 text-center p-3 cursor-pointer text-uppercase fw-bold small ${tab === t ? 'text-primary border-bottom border-primary border-2' : 'text-muted-light'}`}
                 style={{background: tab === t ? 'rgba(143, 209, 204, 0.05)' : 'transparent'}}
                 onClick={() => setTab(t)}
               >
                 {t}
               </div>
             ))}
           </div>

           {/* Lista de Actividades */}
           <div className="p-3 d-flex flex-column gap-2 flex-grow-1" style={{minHeight: '200px'}}>
             {filteredActivities.length === 0 ? (
               <div className="text-center py-5 text-muted-light">
                 <i className="bi bi-calendar-x fs-1 d-block mb-2"></i>
                 Sin actividades en esta vista
               </div>
             ) : (
               filteredActivities.map(act => (
                 <div key={act.id} className="card-custom hoverable cursor-pointer p-0 d-flex overflow-hidden" onClick={() => onSelect(act)}>
                    <div style={{width: '6px', background: act.type === 'joined' ? 'var(--primary)' : '#555'}}></div>
                    <div className="p-3 flex-grow-1">
                      <div className="d-flex justify-content-between">
                        <h6 className="fw-bold mb-1">{act.title}</h6>
                        <small className="text-primary fw-bold">
                          {(act.date ? act.date.split(',')[0] : 'FLEXIBLE')}
                        </small>
                      </div>
                      <div className="text-muted-light small"><i className="bi bi-geo-alt me-1"></i>{act.location}</div>
                    </div>
                 </div>
               ))
             )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;