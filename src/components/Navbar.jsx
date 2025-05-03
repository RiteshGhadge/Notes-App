import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
      {/* Navbar Container */}
      <div className="w-[70vw] bg-blue-600 p-4 shadow-md mx-auto">
        <div className="flex flex-row gap-6 justify-between items-center">
          {/* Site Name */}
          <h1 className="text-white text-3xl font-extrabold tracking-wider hover:text-blue-300 transition">
            Notes
          </h1>

          {/* Navigation Links */}
          <div className="flex flex-row gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white text-lg font-semibold hover:text-blue-300 transition ${
                  isActive ? 'underline underline-offset-4' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/pastes"
              className={({ isActive }) =>
                `text-white text-lg font-semibold hover:text-blue-300 transition ${
                  isActive ? 'underline underline-offset-4' : ''
                }`
              }
            >
              Pastes
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;