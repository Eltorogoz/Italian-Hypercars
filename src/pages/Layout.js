import React, { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../pages/layout.css";

export default function Layout() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // close menu after navigation
  React.useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-inner">
          <Link to="/" className="brand">
            <span className="brand-dot" />
            {/* NAME CHANGE HERE */}
            Italian Performance Studio 
          </Link>

          <button className="menuBtn" onClick={() => setIsOpen((v) => !v)} aria-label="Menu">
            &#8801;
          </button>

          <ul className={`nav-links ${isOpen ? "isOpen" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/models">Models</Link></li>
            <li><Link to="/heritage">Heritage</Link></li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
}