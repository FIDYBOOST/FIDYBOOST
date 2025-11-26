import React from "react";
import './MobileFrame.css';

export default function MobileFrame({ children }) {
  return (
    <div className="mobile-frame-container d-flex justify-content-center align-items-center">
      <div className="mobile-frame">
        <div className="mobile-notch"></div>
        <div className="mobile-screen">
          {children}
        </div>
      </div>
    </div>
  );
}
