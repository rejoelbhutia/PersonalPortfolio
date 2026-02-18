import React, { useRef, useState } from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

interface EducationCardProps {
    degree: string;
    school: string;
    period: string;
    location?: string;
    description: string;
    highlights?: string[];
    isCurrent?: boolean;
}

const EducationCard: React.FC<EducationCardProps> = ({
    degree,
    school,
    period,
    location,
    description,
    highlights,
    isCurrent,
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    const handleFocus = (): void => setOpacity(1);
    const handleBlur = (): void => setOpacity(0);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleFocus}
            onMouseLeave={handleBlur}
            className={`
      relative pl-8 transition-all duration-300 overflow-hidden
      bg-sidebar/80 backdrop-blur-sm p-6 rounded-2xl border border-border group
      ${isCurrent ? 'border-primary/50 shadow-lg shadow-primary/5' : 'hover:border-primary/50'}
    `}
        >
            {/* Spotlight Effect Overlay - Behind the back gradient effect */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--primary-rgb), 0.15), transparent 40%)`,
                }}
            />

            {/* Border Spotlight */}
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--primary-rgb), 0.4), transparent 40%)`,
                    zIndex: -1
                }}
            />

            {/* Subtle Background Gradient for "behind the back" feel */}
            <div className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isCurrent ? 'opacity-30' : ''}`}></div>


            {/* Timeline Dot with Glow */}
            <div className={`
        absolute top-6 w-4 h-4 rounded-full bg-primary border-4 border-background box-content -left-[27px] z-10
        ${isCurrent ? 'shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]' : ''}
      `}></div>

            {/* Content Container (to stay above effects) */}
            <div className="relative z-10">
                {/* Header Badges */}
                <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium shadow-sm backdrop-blur-md">
                        <Calendar size={14} />
                        <span>{period}</span>
                    </div>
                    {location && (
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-sidebar/50 border border-border text-xs text-muted font-medium shadow-sm">
                            <MapPin size={14} />
                            <span>{location}</span>
                        </div>
                    )}
                </div>

                <h4 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{degree}</h4>
                <span className="text-primary text-base font-bold block mb-4">{school}</span>

                <p className="text-muted leading-relaxed text-sm mb-6 border-b border-border/50 pb-6">
                    {description}
                </p>

                {highlights && (
                    <div className="space-y-3">
                        {highlights.map((highlight, index) => (
                            <div key={index} className="text-muted text-sm flex items-start gap-3 group/item hover:text-white transition-colors">
                                <ChevronRight size={16} className="text-primary mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                                <span className="leading-relaxed">{highlight}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default EducationCard;
