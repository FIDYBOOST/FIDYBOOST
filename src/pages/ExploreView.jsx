import React, { useState } from 'react';
import { useApp } from "../context/AppContext";

// Nota: He cambiado 'onSelectActivity' por 'onSelect' para que coincida con tu App.jsx
const ExploreView = ({ onSelect }) => {
  // 1. CORRECCIÓN: Usamos 'allExplore' que es como se llama en el Context
  const { allExplore, myActivities } = useApp();
  
  // 2. RESTAURACIÓN: Recuperamos el estado del buscador y filtros
  const [search, setSearch] = useState('');
  const [filterCat, setFilterCat] = useState('Todas');

  // Lógica de filtrado
  const categories = ['Todas', ...new Set(allExplore.map(i => i.category))];

  const filtered = allExplore.filter(a => {
    const matchesSearch = a.title.toLowerCase().includes(search.toLowerCase());
    const matchesCat = filterCat === 'Todas' || a.category === filterCat;
    return matchesSearch && matchesCat;
  });

  return (
    <div className="fade-in app-container">
      <div className="mb-4">
        <h3 className="fw-bold mb-3">Descubrir Actividades</h3>
        
        {/* Buscador + Filtros */}
        <div className="d-flex flex-column gap-3">
          <div className="position-relative">
            <i className="bi bi-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted-light"></i>
            <input 
              type="text" 
              className="input-dark ps-5" 
              placeholder="¿Qué te apetece entrenar hoy?" 
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="d-flex gap-2 overflow-auto pb-2 custom-scrollbar">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`btn btn-sm px-3 rounded-pill fw-bold whitespace-nowrap ${filterCat === cat ? 'btn-teal' : 'btn-outline-light'}`}
                onClick={() => setFilterCat(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid de Resultados */}
      <div className="row g-3">
        {filtered.map(item => {
           const isJoined = myActivities.some(a => a.id === item.id);
           return (
            <div key={item.id} className="col-12 col-md-6 col-lg-4">
              <div className="card-custom hoverable h-100 d-flex flex-column overflow-hidden border-0" onClick={() => onSelect(item)}>
                <div style={{height: '160px', background: `url(${item.img}) center/cover`}} className="position-relative">
                    {isJoined && <span className="position-absolute top-0 end-0 m-2 badge bg-primary text-dark shadow fw-bold">APUNTADO</span>}
                    <div className="position-absolute bottom-0 start-0 m-2">
                       <span className="badge bg-dark border border-secondary">{item.category}</span>
                    </div>
                </div>
                <div className="p-3 flex-grow-1 d-flex flex-column">
                  <h5 className="fw-bold text-white mb-1">{item.title}</h5>
                  <div className="text-muted-light small mb-3"><i className="bi bi-geo-alt text-primary"></i> {item.location}</div>
                  <p className="text-muted-light small flex-grow-1 line-clamp-2">{item.description}</p>
                  <button className="btn btn-sm btn-outline-light w-100 mt-2">Ver Info</button>
                </div>
              </div>
            </div>
           );
        })}
      </div>
    </div>
  );
};

export default ExploreView;