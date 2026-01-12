import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navItems = [
    { path: '/', label: 'About' },
    { path: '/resume', label: 'Resume' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="flex justify-end p-8 pb-0">
      <ul className="flex gap-8 bg-sidebar/50 backdrop-blur-sm px-8 py-4 rounded-xl border border-border">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-muted'
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
