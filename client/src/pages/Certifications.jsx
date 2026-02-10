import React, { useState } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Certifications = () => {
    const [certifications] = useState([
        // Example data structure for certifications
        // {
        //   id: 1,
        //   title: "React Advanced Patterns",
        //   issuer: "Udacity",
        //   date: "December 2023",
        //   image: "path/to/cert.jpg",
        //   link: "https://example.com/cert"
        // }
    ]);

    return (
        <section className="space-y-8">
            <ScrollReveal>
                <header className="mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4 border-b border-border pb-4">
                        Certifications
                    </h2>
                    <p className="text-muted">
                        Professional certifications and achievements demonstrating continuous learning and expertise.
                    </p>
                </header>
            </ScrollReveal>

            {/* Certifications Grid */}
            <ScrollReveal delay={100}>
                {certifications.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map((cert) => (
                            <div
                                key={cert.id}
                                className="bg-sidebar border border-border rounded-xl p-6 hover:border-primary transition-all group"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Award size={24} className="text-primary" />
                                    </div>
                                    {cert.link && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-muted hover:text-primary transition-colors"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-sm text-muted mb-2">{cert.issuer}</p>
                                <div className="flex items-center gap-2 text-xs text-muted">
                                    <Calendar size={14} />
                                    <span>{cert.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-16">
                        <Award size={64} className="mx-auto mb-4 text-muted/30" />
                        <h3 className="text-xl font-bold text-white mb-2">No Certifications Yet</h3>
                        <p className="text-muted">
                            Certifications will be displayed here once added.
                        </p>
                    </div>
                )}
            </ScrollReveal>
        </section>
    );
};

export default Certifications;
