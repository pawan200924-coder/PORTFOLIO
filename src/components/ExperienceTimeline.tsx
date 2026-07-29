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
    description: 'Designing brand collateral and operating large-format printing machinery. Responsible for production-ready artwork preparation, color management, machine operation, and print quality control.',
  },
  {
    period: 'OCT 2018 — 2026',
    role: 'Senior Graphic Designer',
    company: 'Ambujam Advertising LLC — Retail Infrastructure (HPCL, IOCL), ACP / MS Structures & Signage',
    description: 'Preparing site layouts and production-ready ACM sheet arrangement plans compliant with brand standards. Key coordination point between clients, fabrication/production teams, and dispatch.',
  },
  {
    period: 'FEB 2016 — OCT 2018',
    role: 'Web Designer & Digital Marketing',
    company: 'Freelance — WordPress, SEO, Brand Identity',
    description: 'Designed and launched responsive websites, developed digital brand identities, and managed search engine optimization strategies for SMB clients.',
  },
  {
    period: 'AUG 2009 — JAN 2016',
    role: 'Floor Sales In-Charge',
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
