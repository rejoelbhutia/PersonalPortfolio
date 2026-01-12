import React, { useState } from 'react';
import { Eye, Frown } from 'lucide-react';
import EmptyState from '../components/EmptyState';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Web Design', 'Applications', 'Web Development'];

  const projects = [
    // {
    //   id: 1,
    //   title: "E-Commerce Platform",
    //   category: "Applications",
    //   image: "https://via.placeholder.com/600x400?text=E-Commerce",
    //   description: "A full-featured shopping platform with cart, payments, and dashboard."
    // },
    // {
    //   id: 2,
    //   title: "Task Management App",
    //   category: "Applications",
    //   image: "https://via.placeholder.com/600x400?text=Task+App",
    //   description: "Collaborative tool for teams to track progress and manage tasks."
    // },
    // {
    //   id: 3,
    //   title: "Finance Dashboard",
    //   category: "Web Development",
    //   image: "https://via.placeholder.com/600x400?text=Finance",
    //   description: "Real-time analytics dashboard for monitoring financial data."
    // },
    // {
    //   id: 4,
    //   title: "Social Media App",
    //   category: "Applications",
    //   image: "https://via.placeholder.com/600x400?text=Social+App",
    //   description: "Connect with friends and share updates in real-time."
    // },
    //  {
    //   id: 5,
    //   title: "Modern Portfolio",
    //   category: "Web Design",
    //   image: "https://via.placeholder.com/600x400?text=Portfolio",
    //   description: "A sleek, dark-themed portfolio website with animations."
    // },
    // {
    //   id: 6,
    //   title: "Travel Booking",
    //   category: "Web Development",
    //   image: "https://via.placeholder.com/600x400?text=Travel",
    //   description: "Booking system for flights and hotels with search functionality."
    // }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8 border-b border-border pb-4">Portfolio</h2>
      
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
              <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-sm md:text-base font-medium transition-colors hover:text-primary ${
                      activeCategory === category ? 'text-primary' : 'text-muted'
                  }`}
              >
                  {category}
              </button>
          ))}
      </div>
      
      {/* Projects Grid */}
      { projects.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group relative rounded-xl overflow-hidden cursor-pointer">
            
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <span className="text-primary text-xs font-bold uppercase tracking-wider mb-1 block">{project.category}</span>
                     <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                     <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300">
                         <Eye size={16} />
                         <span className="text-sm font-medium">View Project</span>
                     </div>
                </div>
            </div>
            
          </div>
        ))}
      </div>
      ) : (<EmptyState icon={Frown} title={"Project Coming Soon"} description={"Exciting Project in development. Check soon for updates."}/>)
    }
    </section>
  );
};

export default Portfolio;
  