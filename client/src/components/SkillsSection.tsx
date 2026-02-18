import React, { useState, useEffect, useRef } from 'react';
import { Code2, Server, Wrench, Blocks, LucideIcon } from 'lucide-react';

interface Skill {
    name: string;
    level: number;
}

interface SkillCategoryData {
    id: string;
    title: string;
    icon: LucideIcon;
    skills: Skill[];
}

interface SkillCategoryProps {
    category: SkillCategoryData;
    index: number;
    visibleSections: Set<string>;
    setVisibleSections: React.Dispatch<React.SetStateAction<Set<string>>>;
}

const SkillsSection: React.FC = () => {
    const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

    // Unified color schema - all primary
    const skillCategories: SkillCategoryData[] = [
        {
            id: 'frontend',
            title: 'Frontend Development',
            icon: Code2,
            skills: [
                { name: "React", level: 50 },
                { name: "JavaScript", level: 70 },
                { name: "Tailwind CSS", level: 50 },
                { name: "HTML5 / CSS3", level: 95 },
            ]
        },
        {
            id: 'backend',
            title: 'Backend Development',
            icon: Server,
            skills: [
                { name: "Node.js / Express", level: 65 },
                { name: "PostgreSQL / MongoDB", level: 50 },
                { name: "REST APIs", level: 58 },
                { name: "Authentication & Security", level: 32 },
            ]
        },
        {
            id: 'tools',
            title: 'Tools & DevOps',
            icon: Wrench,
            skills: [
                { name: "Git / GitHub", level: 70 },
                { name: "Docker", level: 55 },
                { name: "VS Code", level: 95 },
                { name: "Postman / Thunder Client", level: 75 },
            ]
        },
        {
            id: 'others',
            title: 'Others',
            icon: Blocks,
            skills: [
                { name: "UI/UX Design", level: 75 },
                { name: "Responsive Design", level: 62 },
            ]
        }
    ];

    return (
        <div className="pt-8 border-t border-border">
            <h3 className="text-2xl font-bold text-white mb-8">My Skills</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {skillCategories.map((category, categoryIndex) => (
                    <SkillCategory
                        key={category.id}
                        category={category}
                        index={categoryIndex}
                        visibleSections={visibleSections}
                        setVisibleSections={setVisibleSections}
                    />
                ))}
            </div>
        </div>
    );
};

// Skill Category Component with Scroll Animation
const SkillCategory: React.FC<SkillCategoryProps> = ({ category, index, visibleSections, setVisibleSections }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleSections((prev) => new Set([...prev, category.id]));
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [category.id, setVisibleSections]);

    const isVisible = visibleSections.has(category.id);
    const Icon = category.icon;

    return (
        <div
            ref={sectionRef}
            className={`bg-sidebar p-6 rounded-2xl border border-border transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {/* Category Header */}
            <div className="flex items-center gap-3 mb-6">
                {/* Unified Primary Color for Icons */}
                <div className="p-2 bg-background rounded-lg text-primary">
                    <Icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-white">{category.title}</h4>
            </div>

            {/* Skills */}
            <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                    <div
                        key={skillIndex}
                        className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                            }`}
                        style={{ transitionDelay: `${index * 150 + skillIndex * 100}ms` }}
                    >
                        <div className="flex justify-between mb-2">
                            <span className="text-white font-medium text-sm">{skill.name}</span>
                            <span className="text-muted text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                            {/* Unified Primary Color for Progress Bars */}
                            <div
                                className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                                style={{
                                    width: isVisible ? `${skill.level}%` : '0%',
                                    transitionDelay: `${index * 150 + skillIndex * 100}ms`
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsSection;
