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
    role: 'Graphic Designer & Print Machine Operator',
    company: 'Ash & Sims Advertising LLC — Dubai, UAE',
    description: 'Specialized in vehicle branding wraps and large-format print for the UAE market. Designed vehicle branding artwork and promotional graphics, preparing client-facing mockups for approval before production. Handled video editing and promotional content alongside design, prepared TIFF files for RIP software, and operated Epson Eco-Solvent printers and plotter cutters to produce precise print-and-cut graphics.',
    highlights: [
      'Fleet & vehicle wraps (Epson Eco-Solvent & Plotter Cut)',
      'UAE RTA-compliant file preparation & client mockups',
      'TIFF & RIP software workflow management',
    ],
  },
  {
    period: 'OCT 2018 — MAY 2026',
    role: 'Senior Graphic Designer',
    company: 'Ambujam Advertising LLC — Hyderabad, India',
    description: 'Spearheaded outdoor advertising, retail branding, signage, and large-format production. Designed complete brand and signage systems for 50+ Indian Oil and HPCL retail sites, spanning canopy fascia, monolith pylons, hoarding signage, and in-station POSM. Prepared print-ready artwork in CMYK and Pantone with material-specific settings for vinyl, ACM panels, flex banners, and backlit substrates.',
    highlights: [
      '50+ retail site brand rollouts for Indian Oil & HPCL',
      'Cut project turnaround time by 30% via workflow restructuring',
      '6 years without a major reprint due to meticulous prepress & color management',
    ],
  },
  {
    period: 'FEB 2016 — OCT 2018',
    role: 'Web Designer & Digital Marketing Specialist',
    company: 'Freelance — Hyderabad, India',
    description: 'Built responsive WordPress websites and brand identity collateral for SME clients in retail, hospitality, and corporate services. Executed SEO audits, on-page optimization, and managed end-to-end client lifecycles from initial creative briefs to delivery.',
  },
  {
    period: 'AUG 2009 — JAN 2016',
    role: 'Floor Sales In-Charge',
    company: 'Mahalakshmi Enterprises (Airtel Franchise) — Hyderabad, India',
    description: 'Led retail store operations, customer engagement, and sales targets. Coordinated customer enquiries, KYC documentation, and operational reporting, building strong communication and client-handling skills.',
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
