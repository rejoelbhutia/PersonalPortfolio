import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, Download, Loader2, Check } from 'lucide-react';
import EmptyState from '../components/EmptyState'; 

const Resume = () => {
  const [downloadStatus, setDownloadStatus] = useState('idle'); // 'idle' | 'downloading' | 'completed'

  const handleDownload = () => {
    if (downloadStatus !== 'idle') return;

    setDownloadStatus('downloading');

    // 1. Simulate a short delay for the animation (optional, purely for visual effect)
    setTimeout(() => {
        // 2. Trigger the actual download programmatically
        const link = document.createElement('a');
        link.href = '../assets/RejoelCV.pdf';
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

  const experience = [];

  const education = [
    {
      id: 1,
      degree: "Bachelor in Computer Application",
      school: "Medhavi Skill University",
      period: "2024 - 2027",
      description: "Specialized in Full Stack Development and DevOps."
    },
  ];

  const skills = [
      { name: "React / Next.js", level: 95 },
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Node.js", level: 85 },
      { name: "PostgreSQL / MongoDB", level: 80 },
      { name: "UI/UX Design", level: 75 }
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-8 border-b border-border pb-4">
          <h2 className="text-3xl font-bold text-white">Resume</h2>
          
          {/* Animated Download Button */}
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        
        {/* --- EXPERIENCE SECTION --- */}
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

        {/* --- EDUCATION SECTION --- */}
        {education.length > 0 ? (
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-sidebar rounded-lg text-primary shadow-sm shadow-primary/10">
                        <GraduationCap size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>

                <div className="space-y-8 pl-4 border-l-2 border-border ml-4">
                    {education.map((item) => (
                        <div key={item.id} className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background box-content"></div>
                            <h4 className="text-xl font-bold text-white mb-1">{item.degree}</h4>
                            <span className="text-primary text-sm font-medium block mb-2">{item.school}</span>
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
      </div>

      {/* Skills Section */}
      <div className="bg-sidebar p-8 rounded-2xl border border-border">
          <h3 className="text-2xl font-bold text-white mb-6">My Skills</h3>
          <div className="grid grid-cols-1 gap-x-12 gap-y-8">
              {skills.map((skill, index) => (
                  <div key={index}>
                      <div className="flex justify-between mb-2">
                          <span className="text-white font-medium">{skill.name}</span>
                          <span className="text-muted">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                      </div>
                  </div>
              ))}
          </div>
      </div>

    </section>
  );
};

export default Resume;