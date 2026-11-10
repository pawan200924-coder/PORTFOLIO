import React from 'react';

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description?: string;
  highlights?: string[];
}

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    period: 'JUN 2026 — NOV 2026',
    role: 'Senior Graphic Designer',
    company: 'Ash & Sims Advertising LLC — Dubai, UAE',
    description: 'Spearheaded commercial vehicle branding, fleet identity systems, and large-format promotional graphics for leading UAE corporate clients. Created client-facing 3D mockups for approval, handled promotional video editing and content creation, prepared print-ready TIFF/RIP production files, and oversaw precision print-and-cut output on Epson eco-solvent equipment.',
    highlights: [
      'Commercial fleet branding & vehicle wrap design (Floward, Libra Tech, Bath & Bubbles)',
      'UAE RTA-compliant file preparation, client approvals & mockups',
      'Video editing, promotional marketing content & storyboarding',
    ],
  },
  {
    period: 'OCT 2018 — MAY 2026',
    role: 'Senior Graphic Designer',
    company: 'Ambujam Advertising LLC — Hyderabad, India',
    description: 'Led end-to-end creative design for outdoor advertising campaigns, marketing collateral suites, and retail brand identity rollouts. Developed comprehensive marketing materials including brochures, sales flyers, roll-up banners, exhibition booth displays, and POSM. Redesigned internal creative workflows, cutting turnaround time by 30% while maintaining a flawless zero-reprint track record across 50+ corporate locations.',
    highlights: [
      'Marketing collateral suites: brochures, flyers, standees, exhibition displays & POSM',
      'Brand & signage systems for 50+ Indian Oil and HPCL retail locations',
      'Cut project turnaround time by 30% through restructured design & file workflows',
      '6 years of zero major reprints via rigorous preflight & CMYK/Pantone color management',
    ],
  },
  {
    period: 'FEB 2016 — OCT 2018',
    role: 'Graphic & Web Designer (Freelance)',
    company: 'Freelance — Brand Identity & Digital Media',
    description: 'Designed complete brand identity packages, corporate logos, marketing brochures, and responsive WordPress websites for SME clients across retail, hospitality, and corporate services. Managed digital visual assets, social media graphics, and end-to-end client design briefs.',
  },
  {
    period: 'AUG 2009 — JAN 2016',
    role: 'Floor Sales In-Charge',
    company: 'Mahalakshmi Enterprises (Airtel Franchise)',
    description: 'Supervised retail operations, customer communication, and sales targets. Coordinated customer documentation, service requests, and team targets, building foundational skills in client relationship management and meeting tight deadlines.',
  },
];

export default function ExperienceTimeline() {
  return (
    <div className="relative border-l-2 border-line pl-8 ml-2 md:ml-4 flex flex-col gap-10">
      {TIMELINE_ITEMS.map((item, idx) => (
        <div key={idx} className="relative group">
          {/* Timeline Node Bullet */}
          <span className="absolute left-[-41px] top-1.5 w-[18px] h-[18px] rounded-full border-4 border-ink bg-orange-brand transition-transform duration-200 group-hover:scale-125 z-10" />

          {/* Period */}
          <div className="font-mono text-xs md:text-sm text-orange-brand tracking-widest font-semibold mb-2">
            {item.period}
          </div>

          {/* Role */}
          <h3 className="font-display text-base md:text-xl text-paper tracking-wide mb-1">
            {item.role}
          </h3>

          {/* Company */}
          <div className="font-mono text-xs md:text-sm text-paper-dim mb-3">
            {item.company}
          </div>

          {/* Description */}
          {item.description && (
            <p className="text-paper-dim text-sm leading-relaxed max-w-xl mb-3">
              {item.description}
            </p>
          )}

          {/* Bullet Highlights */}
          {item.highlights && (
            <ul className="list-none pl-0 flex flex-col gap-1.5 mt-2">
              {item.highlights.map((h, i) => (
                <li key={i} className="font-mono text-xs text-orange-brand/90 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
