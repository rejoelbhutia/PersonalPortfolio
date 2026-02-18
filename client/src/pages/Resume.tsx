import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, Download, Loader2, Check, MapPin } from 'lucide-react';
import EmptyState from '../components/EmptyState';
import SkillsSection from '../components/SkillsSection';
import ScrollReveal from '../components/ScrollReveal';
import EducationCard from '../components/EducationCard';

interface ExperienceItem {
    id: number;
    role: string;
    company: string;
    period: string;
    description: string;
}

interface EducationItem {
    id: number;
    degree: string;
    school: string;
    period: string;
    location: string;
    description: string;
    highlights: string[];
}

type DownloadStatus = 'idle' | 'downloading' | 'completed';

const Resume: React.FC = () => {
    const [downloadStatus, setDownloadStatus] = useState<DownloadStatus>('idle');

    const handleDownload = (): void => {
        if (downloadStatus !== 'idle') return;

        setDownloadStatus('downloading');

        // 1. Simulate a short delay for the animation
        setTimeout(() => {
            // 2. Trigger the actual download programmatically
            const link = document.createElement('a');
            link.href = '/RejoelCV.pdf';
            link.download = 'RejoelCV.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // 3. Set success state
            setDownloadStatus('completed');

            // 4. Reset to idle after 2 seconds
            setTimeout(() => {
                setDownloadStatus('idle');
            }, 2000);
        }, 1500);
    };

    const experience: ExperienceItem[] = [];

    const education: EducationItem[] = [
        {
            id: 1,
            degree: "Bachelor of Computer Applications (BCA)",
            school: "Medhavi Skills University",
            period: "2024 - Present",
            location: "Sikkim, India",
            description: "Currently pursuing BCA with a strong focus on software development, web technologies, and problem-solving. Actively involved in skill-based learning, projects, and competitions.",
            highlights: [
                "Strong foundation in Programming, OOP, DBMS, Web Development",
                "Participated in IndiaSkills / technical competitions",
                "Built multiple academic and personal projects",
                "Continuously improving skills in full-stack development"
            ]
        },
    ];

    return (
        <section>
            <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
                <h2 className="text-3xl font-bold text-white">Resume</h2>

                <button
                    onClick={handleDownload}
                    disabled={downloadStatus !== 'idle'}
                    className={`
                flex items-center gap-2 px-4 py-2 rounded-lg border sm:text-base text-sm transition-all duration-300
                ${downloadStatus === 'idle'
                            ? 'text-primary hover:text-white bg-sidebar hover:bg-primary/20 border-border'
                            : ''}
                ${downloadStatus === 'downloading'
                            ? 'text-primary bg-primary/10 border-primary cursor-wait'
                            : ''}
                ${downloadStatus === 'completed'
                            ? 'text-green-500 bg-green-500/10 border-green-500 cursor-default'
                            : ''}
            `}
                >
                    {downloadStatus === 'idle' && (
                        <>
                            <Download size={18} />
                            <span>Download CV</span>
                        </>
                    )}

                    {downloadStatus === 'downloading' && (
                        <>
                            <Loader2 size={18} className="animate-spin" />
                            <span>Downloading...</span>
                        </>
                    )}

                    {downloadStatus === 'completed' && (
                        <>
                            <Check size={18} />
                            <span>Saved!</span>
                        </>
                    )}
                </button>
            </div>

            {/* Experience & Education Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

                {/* --- EXPERIENCE SECTION --- */}
                <ScrollReveal delay={100}>
                    {experience.length > 0 ? (
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-sidebar rounded-lg text-primary shadow-sm shadow-primary/10">
                                    <Briefcase size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Experience</h3>
                            </div>

                            <div className="space-y-8 pl-4 border-l-2 border-border ml-4 relative">
                                {experience.map((item) => (
                                    <div key={item.id} className="relative pl-8">
                                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background box-content"></div>
                                        <h4 className="text-xl font-bold text-white mb-1">{item.role}</h4>
                                        <span className="text-primary text-sm font-medium block mb-2">{item.company}</span>
                                        <div className="flex items-center gap-2 text-sm text-muted mb-3 italic">
                                            <Calendar size={14} />
                                            <span>{item.period}</span>
                                        </div>
                                        <p className="text-muted leading-relaxed text-sm lg:text-base">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="h-full">
                            <div className="flex items-center gap-3 mb-6 opacity-50">
                                <div className="p-2 bg-sidebar rounded-lg text-muted">
                                    <Briefcase size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-muted">Experience</h3>
                            </div>
                            <EmptyState
                                icon={Briefcase}
                                title="Fresher"
                                description="I am currently looking for my first professional opportunity to kickstart my career."
                            />
                        </div>
                    )}
                </ScrollReveal>

                {/* --- EDUCATION SECTION --- */}
                <ScrollReveal delay={300}>
                    {education.length > 0 ? (
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-sidebar rounded-lg text-primary shadow-sm shadow-primary/10">
                                    <GraduationCap size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Education</h3>
                            </div>

                            <div className="space-y-8 pl-4 border-l-2 border-border ml-4 relative">
                                {education.map((item) => (
                                    <EducationCard
                                        key={item.id}
                                        {...item}
                                        isCurrent={item.period.includes('Present')}
                                    />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="h-full">
                            <div className="flex items-center gap-3 mb-6 opacity-50">
                                <div className="p-2 bg-sidebar rounded-lg text-muted">
                                    <GraduationCap size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-muted">Education</h3>
                            </div>
                            <EmptyState
                                icon={GraduationCap}
                                title="Self Taught"
                                description="My journey has been driven by self-learning, online certifications, and hands-on projects."
                            />
                        </div>
                    )}
                </ScrollReveal>
            </div>

            {/* Skills Section - Distinct Component */}
            <SkillsSection />

        </section>
    );
};

export default Resume;
