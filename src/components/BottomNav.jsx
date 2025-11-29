const BottomNav = ({ setView, currentView }) => (
  <nav className="nav-mobile d-md-none bg-glass border-top-dark">
    {['dashboard', 'explore', 'notifications', 'messages'].map(v => (
      <div key={v} className={`nav-item-m ${currentView === v ? 'active' : ''}`} onClick={() => setView(v)}>
        <i className={`bi bi-${v === 'dashboard' ? 'house' : v === 'explore' ? 'compass' : v === 'notifications' ? 'bell' : 'chat-dots'}${currentView===v?'-fill':''}`}></i>
      </div>
    ))}
  </nav>
);
export default BottomNav;
