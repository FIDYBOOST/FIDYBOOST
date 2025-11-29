import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';

const MessagesView = () => {
  const { messages, sendMessage } = useApp();
  const [txt, setTxt] = useState('');
  const endRef = useRef(null);

  // Auto-scroll al final cuando llega un mensaje nuevo
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (txt.trim()) {
      sendMessage(txt);
      setTxt('');
    }
  };

  return (
    <div className="row justify-content-center h-100 fade-in">
      <div className="col-12 col-lg-8">
        <div className="card-custom d-flex flex-column" style={{ height: 'calc(100vh - 140px)' }}>
          
          {/* Header del Chat */}
          <div className="p-3 border-bottom border-secondary d-flex align-items-center bg-darker">
            <div className="rounded-circle bg-dark d-flex align-items-center justify-content-center me-3 border border-secondary" style={{width: 40, height: 40}}>🤖</div>
            <div>
                <h5 className="fw-bold m-0">FidyBot</h5>
                <small className="text-primary" style={{fontSize: '0.75rem'}}>● Online</small>
            </div>
          </div>

          {/* Área de Mensajes */}
          <div className="flex-grow-1 overflow-auto p-3 d-flex flex-column gap-3 custom-scrollbar">
            {messages.map((m) => (
              <div key={m.id} className={`d-flex ${m.from === 'user' ? 'justify-content-end' : 'justify-content-start'}`}>
                <div 
                  className={`p-3 rounded-4 ${m.from === 'user' ? 'bg-primary text-dark' : 'bg-dark border border-secondary text-white'}`} 
                  style={{ maxWidth: '80%', borderBottomRightRadius: m.from === 'user' ? 2 : 20, borderBottomLeftRadius: m.from === 'bot' ? 2 : 20 }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={endRef}></div>
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 border-top border-secondary d-flex gap-2 bg-card">
            <input 
              className="input-dark" 
              value={txt} 
              onChange={(e) => setTxt(e.target.value)} 
              placeholder="Escribe un mensaje..." 
            />
            <button className="btn-teal px-3">
              <i className="bi bi-send-fill"></i>
            </button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default MessagesView;