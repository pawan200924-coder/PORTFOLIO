import React from 'react';

interface TimelineItem {
  period: string;
  role: string;
  company: string;
  description?: string;
}

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    period: '2026 — PRESENT',
    role: 'Graphic Designer & Print Machine Operator',
    company: 'Ash & Sims Advertising LLC — Dubai, UAE',
    description: 'Designing and producing vehicle branding graphics from initial vehicle measurement and artwork through client mockup approval, RTA-compliant file preparation, RIP-ready production files, Epson Eco-Solvent printing and plotter cutting. Responsibilities include vehicle measurement, vehicle branding artwork, client mockups, preparing vehicle branding artwork in accordance with UAE RTA guidelines and approval requirements, TIFF/RIP file preparation, operation of flatbed and roll-to-roll digital printing equipment, plotter cutting equipment, vinyl media selection, and print quality control.',
  },
  {
    period: 'OCT 2018 — JUN 2026',
    role: 'Senior Graphic Designer',
    company: 'Ambujam Advertising LLC — Retail Infrastructure & ACP/MS Signage',
    description: 'Designed complex retail branding systems, indoor/outdoor signage, and detailed ACM/ACP layout arrangements compliant with client standards. Coordinated forecourt branding, pricing pylons, and canopy structures as one of several major retail projects. Served as key coordination point between clients, print room, fabrication floor, and dispatch to ensure zero-error delivery. Practical production experience includes printing machine operation, lamination machine operation, plotter cutting equipment, ACP/ACM panel artwork, CNC cutting path/tool-path preparation for ACP/ACM fabrication, fabrication-ready artwork, and signage production.',
  },
  {
    period: 'FEB 2016 — OCT 2018',
    role: 'Web Designer & Digital Marketing (Secondary Role)',
    company: 'Freelance — WordPress, SEO, Brand Identity',
    description: 'Designed responsive websites and managed digital brand assets. Transitioned to full-time focus on print production and large-format graphics.',
  },
  {
    period: 'AUG 2009 — JAN 2016',
    role: 'Floor Sales In-Charge (Retail Sales)',
    company: 'Mahalakshmi Enterprises — Airtel Franchise',
    description: 'Managed retail operations, customer service, and franchise product sales cycles. Coordinated with floor staff to exceed franchise service metrics.',
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
            <p className="text-paper-dim text-sm leading-relaxed max-w-xl">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
