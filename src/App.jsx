import React, { useState } from 'react';
import Header from './components/header/Header'
import GroupsList from './components/ListaGrupos/GroupsList'
import SearchSection from './components/Buscador/SearchSection'
import ActivityItem from './components/Actividades/ActivityItem'
import BottomNav from './components/Buscador/BottomNav'
import { actividadesIniciales } from './data/mockData';
import './index.css';

function App() {
  // --- ESTADOS ---
  const [currentView, setCurrentView] = useState('dashboard'); // 'dashboard' o 'groups'
  const [activeTab, setActiveTab] = useState('todos'); // todos, asistire, guardados
  const [searchTerm, setSearchTerm] = useState('');
  const [likes, setLikes] = useState(new Set()); 

  // --- LÓGICA ---
  
  // Función Like
  const toggleLike = (id) => {
    const newLikes = new Set(likes);
    if (newLikes.has(id)) {
      newLikes.delete(id);
    } else {
      newLikes.add(id);
    }
    setLikes(newLikes);
  };

  // Filtrado de actividades
  const actividadesFiltradas = actividadesIniciales.filter(act => {
    // 1. Filtro Tab
    let cumpleTab = false;
    if (activeTab === 'todos') cumpleTab = true;
    if (activeTab === 'asistire' && act.tipo === 'asistire') cumpleTab = true;
    if (activeTab === 'guardados' && likes.has(act.id)) cumpleTab = true;

    // 2. Filtro Search
    let cumpleSearch = true;
    if (searchTerm) {
      const text = searchTerm.toLowerCase();
      cumpleSearch = act.titulo.toLowerCase().includes(text) || act.categoria.includes(text);
    }

    return cumpleTab && cumpleSearch;
  });

  return (
    <div className="App">
      <Header />

      {/* RENDERIZADO CONDICIONAL: ¿Qué pantalla mostramos? */}
      {currentView === 'groups' ? (
        
        /* 1. VISTA DE GRUPOS */
        /* Al darle a volver, cambiamos el estado a 'dashboard' */
        <GroupsList onBack={() => setCurrentView('dashboard')} />

      ) : (

        /* 2. VISTA DASHBOARD (PRINCIPAL) */
        <div className="container container-xl my-lg-4 px-3">
          <div className="row g-4">
            
            <div className="col-12 col-lg-7">
              {/* Pasamos la función onNavigate para cambiar a 'groups' */}
              <SearchSection 
                onSearch={(text) => setSearchTerm(text)} 
                onNavigate={() => setCurrentView('groups')}
              />
            </div>

            <div className="col-12 col-lg-5">
              <div className="content-card h-100">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 class="fw-bold">Tu calendario</h5>
                  <i className="bi bi-calendar3 text-muted"></i>
                </div>
                
                <div className="nav-tabs-scroll">
                  {['todos', 'asistire', 'guardados'].map(tab => (
                     <button 
                       key={tab}
                       className={`tab-link ${activeTab === tab ? 'active' : ''}`} 
                       onClick={() => setActiveTab(tab)}
                       style={{textTransform: 'capitalize'}}
                     >
                       {tab === 'asistire' ? 'Asistiré' : tab}
                     </button>
                  ))}
                </div>

                <div className="mt-3">
                  {actividadesFiltradas.length > 0 ? (
                    actividadesFiltradas.map(act => (
                      <ActivityItem 
                        key={act.id} 
                        data={act} 
                        isLiked={likes.has(act.id)} 
                        onToggleLike={toggleLike} 
                      />
                    ))
                  ) : (
                    <p className="text-center text-muted py-4">No hay actividades aquí.</p>
                  )}
                </div>

              </div>
            </div>
            
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}

export default App;