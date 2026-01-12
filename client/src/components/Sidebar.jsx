import React from 'react';
import { Github, Linkedin, Twitter, MapPin, Mail, Phone, Cake } from 'lucide-react';
import profileImg from '../assets/Profile.png';


const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-sidebar rounded-3xl flex flex-col gap-y-4 p-6 shrink-0 border border-border/50 shadow-2xl">

      
      <div className="flex flex-col gap-y-2 items-center mb-8">
        
        <div className="w-36 h-36 rounded-2xl bg-neutral-800 mb-4 overflow-hidden shadow-lg">
          <img 
            src={profileImg}
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">Rejeol Bhutia</h1>

       
        <div className="text-center px-3 py-3 rounded-xl bg-neutral-800">
          <p className="text-sm text-gray-300 font-medium">Full Stack Developer</p>
        </div>
      </div>

      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600/50 to-transparent my-2"></div>

      
      <div className="flex-1 flex flex-col justify-between px-2">
        <div className="flex flex-col gap-10">
          <div className="flex items-center gap-3">
            <Mail size={16} className="text-white shrink-0" />
            <div className="overflow-hidden">
              <p className="text-xs text-muted mb-0.5">Email</p>
              <p className="text-sm text-white font-medium">rejoelbhutia69@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Phone size={16} className="text-white shrink-0" /> 
            <div>
              <p className="text-xs text-muted mb-0.5">Phone</p>
              <p className="text-sm text-white font-medium">+91 7548003744</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Cake size={16} className="text-white shrink-0" />
            <div>
              <p className="text-xs text-muted mb-0.5">Birthday</p>
              <p className="text-sm text-white font-medium">01 June 2005</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <MapPin size={16} className="text-white shrink-0" />
            <div>
              <p className="text-xs text-muted mb-0.5">Location</p>
              <p className="text-sm text-white font-medium">Sikkim, India</p>
            </div>
          </div>
        </div>

      
        <div className="mb-5 pt-1">
          <div className="flex justify-center gap-4">
            <a href="https://github.com/rejoelbhutia?tab=overview&from=2026-01-01&to=2026-01-08" className="text-muted hover:text-white transition-transform hover:scale-110"><Github size={20} /></a>
            <a href="#" className="text-muted hover:text-white transition-transform hover:scale-110"><Linkedin size={20} /></a>
            <a href="#" className="text-muted hover:text-white transition-transform hover:scale-110"><Twitter size={20} /></a>
          </div>
        </div>
      </div>

    </aside>
  );
};

export default Sidebar;
