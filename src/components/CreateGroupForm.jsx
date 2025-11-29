import React, { useState } from 'react';

const CreateGroupForm = ({ onCancel, onSubmit }) => {
  const [form, setForm] = useState({ nombre: '', actividad: 'Gimnasio', horario: '' });

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita recarga de página
    if (form.nombre.trim()) {
      onSubmit(form);
    }
  };

  return (
    <div className="app-container fade-in">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card-custom p-4">
            <h3 className="fw-bold mb-4">✨ Nuevo Grupo</h3>
            
            {/* Usamos <form> para permitir envío con tecla Enter */}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="text-muted-light small mb-1">Nombre del Grupo</label>
                <input 
                  className="input-dark" 
                  value={form.nombre} 
                  onChange={e => setForm({...form, nombre: e.target.value})} 
                  placeholder="Ej: Los Runners de Murcia" 
                  autoFocus 
                  required // Validación nativa HTML
                />
              </div>
              
              <div className="mb-3">
                <label className="text-muted-light small mb-1">Actividad Principal</label>
                <select 
                  className="input-dark" 
                  value={form.actividad} 
                  onChange={e => setForm({...form, actividad: e.target.value})}
                >
                  <option>Gimnasio</option>
                  <option>Running</option>
                  <option>Padel</option>
                  <option>Crossfit</option>
                  <option>Yoga</option>
                </select>
              </div>
              
              <div className="mb-4">
                 <label className="text-muted-light small mb-1">Horario Habitual</label>
                 <input 
                   className="input-dark" 
                   value={form.horario} 
                   onChange={e => setForm({...form, horario: e.target.value})} 
                   placeholder="Ej: Lunes y Miércoles 19h" 
                 />
              </div>
              
              <div className="d-flex gap-3">
                <button type="button" className="btn btn-outline-light w-50" onClick={onCancel}>
                  Cancelar
                </button>
                <button type="submit" className="btn-teal w-50" disabled={!form.nombre}>
                  Crear Grupo
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupForm;