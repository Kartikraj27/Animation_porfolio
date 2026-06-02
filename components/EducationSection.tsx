'use client'; // Next.js standard execution safety for client-side hooks like useEffect

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    id: "edu-1",
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science & Engineering",
    institution: "Government Engineering College, Vaishali",
    logoUrl: "https://www.gecvaishali.ac.in/wp-content/uploads/2026/03/logo-1.png",
    academicYear: "2022 - 2026",
    description: "Specialized in computer engineering modules including deep analytics, structural algorithms, and highly distributed web applications. Actively focusing on modern structural development methodologies.",
    skillsLearned: ["Data Structures", "Algorithms", "Web Development", "Database Systems"]
  }
];

const Education: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Heading Reveal Animation
    gsap.fromTo(
      sectionRef.current.querySelector('.edu-heading'),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    // Timeline Node & Card Reveal Animation
    cardRefs.current.forEach((card) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-[70vh] bg-[#0a0a0a] text-white py-20 px-6 overflow-hidden flex flex-col justify-center"
      id="education"
    >
      {/* Premium Cinematic Background Mesh */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_50%)]" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Section Header */}
        <div className="mb-14 edu-heading">
          <p className="text-xs font-mono tracking-[0.3em] text-neutral-500 uppercase mb-2">Academic Journey</p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
            Education
          </h2>
          <div className="h-[1px] w-12 bg-neutral-700 mt-4"></div>
        </div>

        {/* Timeline Dynamic Track */}
        <div className="relative border-l border-neutral-800 ml-2 pl-6 md:pl-8 space-y-8">
          {educationData.map((edu, idx) => (
            <div
              key={edu.id}
              ref={(el) => { if (el) cardRefs.current[idx] = el; }}
              className="relative group"
            >
              {/* Pulsing Interactive Point */}
              <div className="absolute -left-[31px] md:-left-[39px] top-2 w-3 h-3 rounded-full bg-neutral-900 border border-neutral-700 group-hover:bg-white group-hover:border-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-300" />

              {/* Main Structural Layout Card */}
              <div className="p-6 md:p-8 rounded-xl bg-neutral-900/30 border border-neutral-800/80 backdrop-blur-sm hover:border-neutral-700/60 transition-all duration-300">
                
                {/* Academic Metadata */}
                <div className="flex flex-col justify-between gap-1 mb-4">
                  <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
                    {edu.academicYear}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-neutral-400">
                    Branch: <span className="text-neutral-300">{edu.branch}</span>
                  </p>
                </div>

                <div className="border-t border-neutral-800/60 my-4"></div>

                {/* College Info Block with Live Image Stream */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-14 h-14 flex-shrink-0 bg-neutral-950/80 border border-neutral-800 rounded-xl p-1.5 overflow-hidden flex items-center justify-center group-hover:border-neutral-700 transition-colors shadow-inner">
                    <Image 
                      src={edu.logoUrl} 
                      alt={`${edu.institution} Logo`}
                      width={48}
                      height={48}
                      className="object-contain filter brightness-100 transition-all duration-300"
                      priority={idx === 0}
                    />
                  </div>
                  <h4 className="text-base md:text-lg font-semibold text-neutral-200 tracking-wide leading-snug max-w-xl">
                    {edu.institution}
                  </h4>
                </div>

                <p className="text-sm md:text-base text-neutral-400 leading-relaxed max-w-2xl mt-2">
                  {edu.description}
                </p>

                {/* Conceptual Skill Chips */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {edu.skillsLearned.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="text-[11px] font-mono px-2.5 py-1 bg-neutral-900 border border-neutral-800 rounded text-neutral-400 group-hover:border-neutral-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
