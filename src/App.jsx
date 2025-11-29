import React, { useState, useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';

// Componentes
import Header from './components/Header';
import ModalActivity from './components/ModalActivity';
import BottomNav from './components/BottomNav'; // Tienes que crear este archivo
import CreateGroupForm from './components/CreateGroupForm'; // Tienes que crear este archivo

// Pages
import Dashboard from './pages/Dashboard';
import ExploreView from './pages/ExploreView'; // Tienes que crear este archivo
import MessagesView from './pages/MessagesView'; // Tienes que crear este archivo
import NotificationsView from './pages/NotificationsView'; // Tienes que crear este archivo
import LoginScreen from './pages/LoginScreen'; // Tienes que crear este archivo

// Estilos
import './styles/App.css';

const MainLayout = () => {
  const { user, createGroup } = useApp();
  const [view, setView] = useState('dashboard');
  const [selectedActivity, setSelectedActivity] = useState(null);

  if (!user) return <LoginScreen />;

  return (
    <>
      <Header setView={setView} currentView={view} />
      
      <main className="app-container py-4 pb-5 mb-5">
        {view === 'dashboard' && <Dashboard onNavigate={setView} onSelect={setSelectedActivity} />}
        {view === 'explore' && <ExploreView onSelect={setSelectedActivity} />}
        {view === 'messages' && <MessagesView />}
        {view === 'notifications' && <NotificationsView />}
        {view === 'createGroup' && (
            <CreateGroupForm 
                onCancel={() => setView('dashboard')} 
                onSubmit={(d) => {createGroup(d); setView('dashboard');}} 
            />
        )}
      </main>
      
      {selectedActivity && (
        <ModalActivity activity={selectedActivity} onClose={() => setSelectedActivity(null)} />
      )}
      
      <BottomNav setView={setView} currentView={view} />
    </>
  );
};

const App = () => {
  // Carga de iconos Bootstrap
  useEffect(() => {
    if(!document.getElementById('bs-icons')) {
      const link = document.createElement("link"); link.id = 'bs-icons';
      link.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"; link.rel = "stylesheet";
      document.head.appendChild(link);
      const linkB = document.createElement("link"); linkB.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"; linkB.rel = "stylesheet";
      document.head.appendChild(linkB);
    }
  }, []);

  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
};

export default App;