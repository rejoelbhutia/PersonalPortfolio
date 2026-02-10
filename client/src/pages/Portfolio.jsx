import React, { useState } from 'react';
import { Eye, ExternalLink, Image as ImageIcon } from 'lucide-react';
import EmptyState from '../components/EmptyState';
import ScrollReveal from '../components/ScrollReveal';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web Design", "Applications", "Web Development"];

  const portfolioItems = [
    // {
    //   id: 1,
    //   title: "Finance App",
    //   category: "Web Development",
    //   image: "https://via.placeholder.com/400x300",
    //   link: "#"
    // },
    // {
    //   id: 2,
    //   title: "Orizon UI Kit",
    //   category: "Web Design",
    //   image: "https://via.placeholder.com/400x300",
    //   link: "#"
    // },
    // {
    //   id: 3,
    //   title: "Fundo App",
    //   category: "Applications",
    //   image: "https://via.placeholder.com/400x300",
    //   link: "#"
    // },
    // {
    //   id: 4,
    //   title: "Brawlhalla",
    //   category: "Applications",
    //   image: "https://via.placeholder.com/400x300",
    //   link: "#"
    // }
  ];

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section>
      <ScrollReveal>
        <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
          <h2 className="text-3xl font-bold text-white">Portfolio</h2>
        </div>
      </ScrollReveal>

      {/* Filter Categories */}
      <ScrollReveal delay={100}>
        <ul className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setActiveCategory(category)}
                className={`
                                text-sm font-medium transition-colors hover:text-primary 
                                ${activeCategory === category ? 'text-primary' : 'text-muted'}
                            `}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </ScrollReveal>

      {/* Projects Grid */}
      <ScrollReveal delay={200}>
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="group relative rounded-xl overflow-hidden cursor-pointer">
                <div className="aspect-[4/3] w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <div className="p-3 bg-sidebar rounded-xl text-primary hover:bg-neutral-800 transition-colors">
                    <Eye size={20} />
                  </div>
                  <a href={item.link} className="p-3 bg-sidebar rounded-xl text-primary hover:bg-neutral-800 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>

                <div className="absolute  inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h4 className="text-white font-bold mb-1">{item.title}</h4>
                  <span className="text-primary text-sm">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState
            icon={ImageIcon}
            title="Work in Progress"
            description="I'm currently creating new projects to showcase here. Stay tuned for updates!"
          />
        )}
      </ScrollReveal>
    </section>
  );
};

export default Portfolio;