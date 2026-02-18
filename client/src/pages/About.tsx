import React, { useRef } from 'react';
import {
    Code, Layout as LayoutIcon, Smartphone, Database,
    ChevronLeft, ChevronRight, MessageSquareDashed, Users, Coffee
} from 'lucide-react';
import EmptyState from '../components/EmptyState';
import Quote from '../components/Quote';

interface Service {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
}

interface Testimonial {
    id: number;
    name: string;
    role: string;
    text: string;
    avatar: string;
}

interface Client {
    id: number;
    name: string;
    logo: string;
}

const About: React.FC = () => {
    const testimonialsRef = useRef<HTMLDivElement>(null);
    const clientsRef = useRef<HTMLDivElement>(null);

    const scroll = (ref: React.RefObject<HTMLDivElement | null>, direction: 'left' | 'right'): void => {
        if (ref.current) {
            const { current } = ref;
            const scrollAmount = direction === 'left' ? -300 : 300;
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const services: Service[] = [
        // {
        //   id: 1,
        //   title: "Web Development",
        //   description: "Building high-quality, responsive websites consisting of proper structure and optimized performance.",
        //   icon: <Code size={32} />
        // },
        // {
        //   id: 2,
        //   title: "App Development",
        //   description: "Developing cross-platform mobile applications with seamless user experiences and native-like performance.",
        //   icon: <Smartphone size={32} />
        // },
        // {
        //   id: 3,
        //   title: "UI/UX Design",
        //   description: "Creating intuitive and aesthetically pleasing user interfaces that drive user engagement.",
        //   icon: <Layout size={32} />
        // },
        // {
        //   id: 4,
        //   title: "Backend Solutions",
        //   description: "Architecting robust server-side logic and database schemas for scalable applications.",
        //   icon: <Database size={32} />
        // }
    ];

    // --- DATA ARRAYS ---
    // Tip: Empty these arrays to test the Empty State view
    const testimonials: Testimonial[] = [
        // {
        //   id: 1,
        //   name: "Daniel Lewis",
        //   role: "CEO at TechStart",
        //   text: "Only a few developers possess such a great combination of technical skills and design eye. The result exceeded all our expectations.",
        //   avatar: "https://via.placeholder.com/100?text=DL"
        // },
        // {
        //   id: 2,
        //   name: "Sarah Miller",
        //   role: "Product Manager",
        //   text: "Working with this developer was a pleasure. Communication was clear, and the delivery was on time. Highly recommended!",
        //   avatar: "https://via.placeholder.com/100?text=SM"
        // },
        // {
        //   id: 3,
        //   name: "Michael Chen",
        //   role: "Founder",
        //   text: "An incredible attention to detail. The animation work and responsiveness made our site feel truly premium.",
        //   avatar: "https://via.placeholder.com/100?text=MC"
        // },
        // {
        //   id: 4,
        //   name: "Emily Davis",
        //   role: "Creative Director",
        //   text: "Transformed our rough ideas into a polished, professional digital presence that we're proud to show off.",
        //   avatar: "https://via.placeholder.com/100?text=ED"
        // }
    ];

    const clients: Client[] = [
        // { id: 1, name: "Company A", logo: "https://via.placeholder.com/150x60?text=Client+A" },
        // { id: 2, name: "Company B", logo: "https://via.placeholder.com/150x60?text=Client+B" },
        // { id: 3, name: "Company C", logo: "https://via.placeholder.com/150x60?text=Client+C" },
        // { id: 4, name: "Company D", logo: "https://via.placeholder.com/150x60?text=Client+D" },
        // { id: 5, name: "Company E", logo: "https://via.placeholder.com/150x60?text=Client+E" },
        // { id: 6, name: "Company F", logo: "https://via.placeholder.com/150x60?text=Client+F" },
    ];

    return (
        <>
            <section>
                <Quote />
            </section>
            <section className="space-y-12">
                {/* Introduction Section */}
                <header className="mb-12">
                    <h2 className="text-3xl font-bold text-white dark:text-white text-light-text mb-8 border-b border-border dark:border-border border-light-border pb-4">About Me</h2>
                    <div className="text-muted dark:text-muted text-light-muted leading-relaxed space-y-4">
                        <p>
                            I’m a Full Stack Developer based in Yangsum, West Sikkim, specializing in web development. I enjoy transforming complex problems into simple, elegant, and intuitive designs.
                        </p>
                        <p>
                            I focus on building websites that are not only functional and user-friendly but also visually engaging. I bring a personal touch to every project, ensuring it is both eye-catching and easy to navigate. My goal is to communicate your message and brand identity in the most creative and effective way. I continuously enhance my skills in full-stack development, DevOps practices, and agentic AI to deliver cutting-edge solutions
                        </p>
                    </div>
                </header>

                {/* What I'm Doing Section */}
                <div>
                    <h3 className="text-2xl font-bold text-white mb-6">What I'm Doing</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {services.map((service) => (
                            <div key={service.id} className="bg-sidebar p-6 rounded-xl border border-border hover:border-primary transition-colors flex gap-4">
                                <div className="text-primary mt-1 shrink-0">
                                    {service.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white mb-2">{service.title}</h4>
                                    <p className="text-muted text-sm leading-relaxed line-clamp-2">{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials Section */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-white">Testimonials</h3>

                        {/* Only show scroll buttons if there are items */}
                        {testimonials.length > 0 && (
                            <div className="flex gap-2">
                                <button
                                    onClick={() => scroll(testimonialsRef, 'left')}
                                    className="p-2 bg-sidebar border border-border rounded-lg text-muted hover:text-white hover:border-primary transition-colors"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={() => scroll(testimonialsRef, 'right')}
                                    className="p-2 bg-sidebar border border-border rounded-lg text-muted hover:text-white hover:border-primary transition-colors"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        )}
                    </div>

                    {testimonials.length > 0 ? (
                        <div ref={testimonialsRef} className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x scroll-smooth">
                            {testimonials.map((item) => (
                                <div key={item.id} className="min-w-[300px] md:min-w-[400px] bg-sidebar p-8 rounded-xl border border-border relative mt-8 snap-center">
                                    <div className="absolute -top-6 left-8 bg-sidebar border border-border p-3 rounded-xl text-primary">
                                        <Quote />
                                    </div>

                                    <p className="text-muted italic mb-6 leading-relaxed relative z-10">"{item.text}"</p>

                                    <div className="flex items-center gap-4">
                                        <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover bg-gray-800" />
                                        <div>
                                            <h4 className="text-white font-bold text-sm">{item.name}</h4>
                                            <span className="text-sm text-gray-500">{item.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        // --- Empty State for Testimonials ---
                        <EmptyState
                            icon={MessageSquareDashed}
                            title="No Testimonials Yet"
                            description="I'm just getting started! Check back later to see what people are saying."
                        />
                    )}
                </div>

                {/* Clients Section */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-2xl font-bold text-white">Clients</h3>

                        {/* Only show scroll buttons if there are items */}
                        {clients.length > 0 && (
                            <div className="flex gap-2">
                                <button
                                    onClick={() => scroll(clientsRef, 'left')}
                                    className="p-2 bg-sidebar border border-border rounded-lg text-muted hover:text-white hover:border-primary transition-colors"
                                >
                                    <ChevronLeft size={20} />
                                </button>
                                <button
                                    onClick={() => scroll(clientsRef, 'right')}
                                    className="p-2 bg-sidebar border border-border rounded-lg text-muted hover:text-white hover:border-primary transition-colors"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>
                        )}
                    </div>

                    {clients.length > 0 ? (
                        <div ref={clientsRef} className="flex gap-8 overflow-x-auto pb-4 scrollbar-hide items-center scroll-smooth">
                            {clients.map((client) => (
                                <a key={client.id} href="#" className="min-w-[120px] grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300">
                                    <img src={client.logo} alt={client.name} className="w-full h-auto" />
                                </a>
                            ))}
                        </div>
                    ) : (
                        // --- Empty State for Clients ---
                        <EmptyState
                            icon={Users}
                            title="No Clients Yet"
                            description="I'm currently open for new opportunities and collaborations."
                        />
                    )}
                </div>

            </section>
        </>
    );
};


export default About;
