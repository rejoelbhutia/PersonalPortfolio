import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="h-screen bg-black p-4 md:p-6 flex flex-col md:flex-row gap-6 overflow-hidden">
      {/* Sidebar - Hidden on mobile, handled via potential drawer later or responsive stack */}
      <div className="hidden md:block h-full">
         <Sidebar />
      </div>

      <main className="flex-1 h-full bg-sidebar rounded-3xl flex flex-col border border-border/50 shadow-2xl relative overflow-hidden">
        {/* Top Gradient Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-purple-500/50 to-primary/50"></div>
        
        <Navbar />
        
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
