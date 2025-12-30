
import React from 'react';
import logo from '/src/assets/logo.png';

export const Header: React.FC = () => {
  return (
    <header className="bg-brandBlue text-white shadow-lg z-20">
      <div className="max-w-screen-1xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-15 w-15 rounded-full flex items-center justify-center">
            <img
              src={logo}
              alt="FarmixCard"
              className="h-14 w-auto"
            />
          </div>
          <h1 className="font-montserrat text-2xl font-extrabold tracking-tight">
            FARMIX<span className="text-brandOrange">CARD</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center">
          <span className="text-sm font-medium opacity-80">
          </span>
        </div>
      </div>
    </header>
  );
};
