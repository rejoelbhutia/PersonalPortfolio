import React from 'react';
import { Outlet, useLocation, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [isProfileOpen, setIsProfileOpen] = React.useState(false);
  const location = useLocation();

  // Close mobile menus on route change
  React.useEffect(() => {
    setIsNavOpen(false);
    setIsProfileOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'About' },
    { path: '/resume', label: 'Resume' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="h-screen bg-black p-4 md:p-6 flex flex-col md:flex-row gap-6 overflow-hidden relative">
      {/* Sidebar - Desktop */}
      <div className="hidden md:block w-64 h-full shrink-0">
        <Sidebar />
      </div>

      {/* Mobile Navigation Drawer (Right Side) */}
      <div className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isNavOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} onClick={() => setIsNavOpen(false)}>
        <div
          className={`fixed inset-y-0 right-0 w-[260px] h-full bg-background shadow-2xl transition-transform duration-300 transform ${isNavOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full p-6 flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-white">Menu</h3>
              <button onClick={() => setIsNavOpen(false)} className="p-2 text-muted hover:text-white">
                <X size={24} />
              </button>
            </div>
            <nav className="flex-1">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl font-medium transition-colors ${isActive
                          ? 'bg-primary text-white'
                          : 'text-muted hover:text-white hover:bg-neutral-800'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Profile Drawer (Left Side) */}
      <div className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isProfileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`} onClick={() => setIsProfileOpen(false)}>
        <div
          className={`fixed inset-y-0 left-0 w-[280px] h-full bg-background shadow-2xl transition-transform duration-300 transform ${isProfileOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="h-full flex flex-col">
            {/* Close button overlap or inside sidebar? Reusing Sidebar component which fills height.
                     I'll wrap it in a div that allows strict content boundary.
                 */}
            <div className="flex justify-end p-2 absolute top-2 right-2 z-10">
              <button onClick={() => setIsProfileOpen(false)} className="p-2 bg-black/50 rounded-full text-white hover:bg-primary">
                <X size={18} />
              </button>
            </div>
            <div className="flex-1 h-full overflow-y-auto">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>

      <main className="flex-1 h-full bg-sidebar rounded-3xl flex flex-col border border-border/50 shadow-2xl relative overflow-hidden">
        {/* Top Gradient Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-purple-500/50 to-primary/50"></div>

        <Navbar
          onNavClick={() => setIsNavOpen(true)}
          onProfileClick={() => setIsProfileOpen(true)}
        />

        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 lg:p-12">
          <div className="max-w-5xl mx-auto w-full animate-fade-in pb-12">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
