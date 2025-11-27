import React from 'react';

const ActivityItem = ({ data, isLiked, onToggleLike }) => {
  return (
    <div className="activity-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center flex-grow-1">
        <div className="pe-2">
          <div className="date-label">{data.fecha}</div>
          <div className="fw-bold small">{data.titulo}</div>
          <div className="text-muted small">
            <i className="bi bi-geo-alt-fill me-1"></i> {data.lugar}
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <button 
          className={`btn-like ${isLiked ? 'liked' : ''} me-2`} 
          onClick={() => onToggleLike(data.id)}
        >
          <i className={`bi ${isLiked ? 'bi-heart-fill' : 'bi-heart'}`}></i>
        </button>
        <img src={data.img} className="activity-img shadow-sm" alt={data.titulo} />
      </div>
    </div>
  );
};

export default ActivityItem;