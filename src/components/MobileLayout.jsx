import React from "react";
import './MobileLayout.css';

export default function MobileLayout({ children }) {
  return (
    <div className="mobile-layout d-flex flex-column">
      
      <header className="mobile-header p-2 text-center">
        <h5 className="m-0">FIDY<span className="azul">BOOST</span></h5>
      </header>

      <main className="mobile-main flex-grow-1 p-3">
        {children}
      </main>

      <footer className="mobile-footer p-2 text-center">
        <small>©2025 FidyBoost</small>
      </footer>

    </div>
  );
}
