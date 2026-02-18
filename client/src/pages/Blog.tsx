import React, { useState } from 'react';
import { Search, Clock, ChevronRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

interface BlogPost {
    id: number;
    title: string;
    category: string;
    date: string;
    readTime: string;
    image: string;
    excerpt: string;
}

const Blog: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', 'Development', 'Design', 'Backend', "Literature", "Poetry"];

    const posts: BlogPost[] = [
        /* {
           id: 1,
           title: "The Future of Frontend Development",
           category: "Development",
           date: "Oct 24, 2023",
           readTime: "5 min read",
           image: "https://via.placeholder.com/600x400?text=Frontend+Future",
           excerpt: "Exploring the latest trends in web development, from Server Components to AI-driven coding assistants."
         },
         {
           id: 2,
           title: "Mastering Tailwind CSS",
           category: "Design",
           date: "Sep 15, 2023",
           readTime: "8 min read",
           image: "https://via.placeholder.com/600x400?text=Tailwind+CSS",
           excerpt: "A comprehensive guide to building responsive and beautiful user interfaces with utility-first CSS."
         },
         {
           id: 3,
           title: "Node.js Performance Tips",
           category: "Backend",
           date: "Aug 10, 2023",
           readTime: "6 min read",
           image: "https://via.placeholder.com/600x400?text=Node+Performance",
           excerpt: "How to optimize your Node.js applications for maximum speed and scalability."
         },
         {
           id: 4,
           title: "UI Design Principles",
           category: "Design",
           date: "Jul 22, 2023",
           readTime: "4 min read",
           image: "https://via.placeholder.com/600x400?text=UI+Principles",
           excerpt: "Fundamental principles that every developer should know to create better looking applications."
         },*/
    ];

    const filteredPosts = posts.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section>
            <ScrollReveal>
                <h2 className="text-3xl font-bold text-white mb-8 border-b border-border pb-4">Blog</h2>
            </ScrollReveal>

            {/* Controls: Search & Tabs */}
            <ScrollReveal delay={100}>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                    {/* Categories */}
                    <div className="flex bg-sidebar p-1 rounded-lg border border-border w-max overflow-x-auto">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${activeCategory === category
                                    ? 'bg-gray-800 text-white shadow-sm'
                                    : 'text-muted hover:text-white'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={18} />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                            className="w-full bg-sidebar border border-border rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                        />
                    </div>
                </div>
            </ScrollReveal>

            {/* Blog Grid */}
            <ScrollReveal delay={200}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.map((post) => (
                        <article key={post.id} className="group flex flex-col h-full bg-sidebar rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
                            {/* Image */}
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                    <span className="text-xs font-medium text-white">{post.category}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-4 text-xs text-muted mb-4">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                                    <div className="flex items-center gap-1">
                                        <Clock size={12} />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors leading-snug">
                                    {post.title}
                                </h3>

                                <p className="text-muted text-sm leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="mt-auto">
                                    <a href="#" className="inline-flex items-center gap-2 text-primary text-sm font-medium group/link">
                                        Read More
                                        <ChevronRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
                {filteredPosts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-muted text-lg">No articles found matching your criteria.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                            className="mt-4 text-primary hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </ScrollReveal>

        </section>
    );
};
export default Blog;
