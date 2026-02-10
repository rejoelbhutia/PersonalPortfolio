import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, User } from 'lucide-react';

const Navbar = ({ onNavClick, onProfileClick }) => {
  const navItems = [
    { path: '/', label: 'About' },
    { path: '/resume', label: 'Resume' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="flex justify-between md:justify-end items-center p-6 md:p-8 pb-0 relative z-20">

      {/* Mobile Profile Trigger */}
      <button
        onClick={onProfileClick}
        className="md:hidden p-2 text-white bg-sidebar rounded-xl border border-border hover:bg-neutral-800 transition-colors z-50"
      >
        <User size={24} />
      </button>

      {/* Mobile Menu Trigger */}
      <button
        onClick={onNavClick}
        className="md:hidden p-2 text-white bg-sidebar rounded-xl border border-border hover:bg-neutral-800 transition-colors z-50"
      >
        <Menu size={24} />
      </button>

      <ul className="hidden md:flex gap-8 bg-sidebar/50 backdrop-blur-sm px-8 py-4 rounded-xl border border-border">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${isActive ? 'text-primary' : 'text-muted'
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
