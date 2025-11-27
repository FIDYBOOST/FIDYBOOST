import React from 'react';

const GroupsList = ({ onBack }) => {
  // Datos falsos de grupos cercanos a ti
  const grupos = [
    { id: 1, nombre: "Padel Molina de Segura", miembros: 24, nivel: "Intermedio", img: "🎾" },
    { id: 2, nombre: "Gimnasio La Puebla", miembros: 156, nivel: "Todos", img: "🏋️‍♂️" },
    { id: 3, nombre: "Calistenia Parque de la Seda", miembros: 45, nivel: "Avanzado", img: "🤸" },
    { id: 4, nombre: "Running Río Segura", miembros: 89, nivel: "Principiante", img: "🏃" },
    { id: 5, nombre: "Powerlifting Murcia", miembros: 30, nivel: "Elite", img: "🔥" },
  ];

  return (
    <div className="container my-4">
      {/* Botón Volver */}
      <button className="btn btn-outline-light mb-4" onClick={onBack}>
        <i className="bi bi-arrow-left me-2"></i> Volver al Inicio
      </button>

      <h2 className="fw-bold mb-4">Descubre grupos cerca de ti</h2>

      <div className="row g-3">
        {grupos.map((grupo) => (
          <div key={grupo.id} className="col-12 col-md-6 col-lg-4">
            <div className="content-card hover-lift h-100 d-flex flex-column">
              <div className="d-flex align-items-center mb-3">
                <div className="icon-box fs-1">{grupo.img}</div>
                <div>
                  <h5 className="fw-bold mb-0">{grupo.nombre}</h5>
                  <small className="text-muted">{grupo.miembros} miembros</small>
                </div>
              </div>
              
              <div className="mt-auto">
                <div className="d-flex justify-content-between align-items-center mb-3">
                   <span className="badge bg-dark border border-secondary text-light">
                    {grupo.nivel}
                  </span>
                  <small className="text-info">Ver info</small>
                </div>
                
                <button className="btn btn-teal w-100">
                  UNIRME AL GRUPO
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GroupsList;