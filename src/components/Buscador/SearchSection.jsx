import React, { useState } from 'react';

const SearchSection = ({ onSearch, onNavigate }) => {
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);
    // Simulamos carga de 0.6s
    setTimeout(() => {
      onSearch(inputText);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="d-flex flex-column gap-4 mb-5 mb-lg-0">
      {/* Tarjeta de Búsqueda */}
      <div className="content-card hover-lift">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 class="fw-bold m-0">Próximas actividades</h5>
          <small className="text-muted cursor-pointer"><i class="bi bi-sliders"></i> Filtros</small>
        </div>
        
        <div className="scroll-container mb-4">
            <button className="filter-btn active">Todos</button>
            <button className="filter-btn">Gimnasio</button>
            <button className="filter-btn">Padel</button>
        </div>

        <div className="search-area">
          <h5 class="fw-bold">Busca actividades cerca</h5>
          <p class="small text-muted mb-3">Encuentra tu compañero de entreno</p>
          <div className="input-group mb-2">
            <span className="input-group-text bg-dark border-secondary text-light"><i class="bi bi-search"></i></span>
            <input 
              type="text" 
              className="form-control bg-dark border-secondary text-light" 
              placeholder="Ej: Pecho, Yoga..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
          <button className="btn btn-teal" onClick={handleSearch} disabled={loading}>
            {loading ? <div className="spinner-border spinner-border-sm text-dark"></div> : 'BUSCAR'}
          </button>
        </div>
      </div>

      {/* Tarjetas de Grupos */}
      <div className="row g-3">
        <div className="col-12 col-md-6">
          <div className="content-card hover-lift d-flex flex-column justify-content-center text-center text-md-start h-100">
            <h5 class="fw-bold">Tus Grupos</h5>
            <div className="py-3">
              <p className="mb-1 text-muted small">No te has unido a ningún grupo</p>
              
              {/* AQUÍ ESTÁ EL CAMBIO PARA NAVEGAR */}
              <span 
                className="small text-info text-decoration-none fw-bold cursor-pointer"
                onClick={onNavigate}
                style={{cursor: 'pointer'}}
              >
                Descubrir grupos &rarr;
              </span>

            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="create-group-card h-100">
            <div className="d-flex align-items-center">
              <div className="icon-box">💪</div>
              <div>
                <h6 class="fw-bold mb-1">Crear grupo</h6>
                <small class="text-muted">Busca spotter</small>
              </div>
            </div>
            <i className="bi bi-chevron-right text-muted"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;