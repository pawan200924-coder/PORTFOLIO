"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DimensionLine from '@/components/DimensionLine';
import CornerFrame from '@/components/CornerFrame';
import WorkGrid from '@/components/WorkGrid';
import TechShowcase from '@/components/TechShowcase';
import ExperienceTimeline from '@/components/ExperienceTimeline';

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const skillsGrouped = {
    'AI & CREATIVE': [
      'Google Gemini',
      'Google Flow (Veo)',
      'ComfyUI Workflows',
      'AI Visual Research',
      'Prompt Engineering',
      'Visual Concept Storyboarding',
    ],
    'DESIGN & TOOLS': [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'CorelDRAW',
      'Adobe InDesign',
      'Adobe Acrobat Pro',
      'Figma',
      'Canva',
      'After Effects (basic)',
    ],
    'PREPRESS & QC': [
      'Print-ready artwork',
      'CMYK color separation',
      'Pantone color matching',
      'Large-format preflight',
      'TIFF production files',
      'RIP-ready file setup',
      'Print & cut registration',
      'Zero-reprint QC signoff',
    ],
    'VEHICLE GRAPHICS & WRAPS': [
      'Vehicle measurement',
      'Vehicle branding artwork',
      'Realistic client mockups',
      'UAE RTA-compliant file prep',
      'Vinyl media selection (Flat/Curved)',
      'Full & partial wraps',
      'Print & cut fleet workflow',
    ],
    'PRINT PRODUCTION': [
      'Large-format digital printing',
      'Flatbed printing equipment',
      'Roll-to-roll printing',
      'Epson Eco-Solvent printers',
      'Lamination & finishing',
      'Weeding & plot trimming',
      'Print quality control',
    ],
    'CUTTING & FABRICATION': [
      'Plotter cutting equipment',
      'Vector cut paths',
      'ACP/ACM panel preparation',
      'CNC cutting tool-path prep',
      'Fabrication-ready drawings',
    ],
  };

  return (
    <div className="bg-ink min-h-screen text-paper selection:bg-orange-brand selection:text-ink font-sans">
      
      {/* ============ NAVIGATION HEADER ============ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-ink/95 to-ink/0 backdrop-blur-[6px] transition-all duration-200">
        <div className="max-w-7xl mx-auto px-[6vw] py-5 flex items-center justify-between">
          <div className="flex items-center gap-3.5 select-none">
            {/* Box Logo Mark */}
            <div className="w-10 h-10 border-2 border-orange-brand flex items-center justify-center font-display text-sm shrink-0">
              <span className="text-paper">P</span>
              <span className="text-orange-brand">K</span>
            </div>
            <div>
              <div className="font-display text-sm tracking-wide leading-none text-paper uppercase">
                D. Pawan Kumar
              </div>
              <div className="font-mono text-[9px] text-orange-brand uppercase tracking-widest mt-1">
                Senior Graphic Designer
              </div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#work" className="font-mono text-xs text-paper-dim hover:text-orange-brand tracking-widest uppercase transition-colors duration-200 relative group py-1">
              Work
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-brand transition-all duration-250 group-hover:w-full" />
            </a>
            <a href="#technical" className="font-mono text-xs text-paper-dim hover:text-orange-brand tracking-widest uppercase transition-colors duration-200 relative group py-1">
              Prepress
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-brand transition-all duration-250 group-hover:w-full" />
            </a>
            <a href="#vehicle-workflow" className="font-mono text-xs text-paper-dim hover:text-orange-brand tracking-widest uppercase transition-colors duration-200 relative group py-1">
              Vehicle Wrap Workflow
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-brand transition-all duration-250 group-hover:w-full" />
            </a>
            <a href="#experience" className="font-mono text-xs text-paper-dim hover:text-orange-brand tracking-widest uppercase transition-colors duration-200 relative group py-1">
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-brand transition-all duration-250 group-hover:w-full" />
            </a>
            <a href="#contact" className="font-mono text-xs text-paper-dim hover:text-orange-brand tracking-widest uppercase transition-colors duration-200 relative group py-1">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-brand transition-all duration-250 group-hover:w-full" />
            </a>
            <a
              href="/Pawan_Kumar_Resume.pdf"
              download
              className="border border-orange-brand text-orange-brand px-4 py-2 font-mono text-[11px] uppercase tracking-wider transition-all duration-200 hover:bg-orange-brand hover:text-ink hover:scale-[1.02]"
            >
              ↓ CV (PDF)
            </a>
          </nav>

          {/* Mobile menu hamburger toggle button */}
          <button
            onClick={toggleMobileMenu}
            className="flex md:hidden flex-col gap-1.5 cursor-pointer z-50 p-1"
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-[2px] bg-paper transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2 bg-orange-brand' : ''}`} />
            <span className={`w-6 h-[2px] bg-paper transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-[2px] bg-paper transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-orange-brand' : ''}`} />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-ink/98 flex flex-col justify-center items-center gap-8 px-6 md:hidden"
          >
            <a
              href="#work"
              onClick={toggleMobileMenu}
              className="font-display text-2xl uppercase tracking-wider text-paper hover:text-orange-brand transition-colors"
            >
              Work
            </a>
            <a
              href="#technical"
              onClick={toggleMobileMenu}
              className="font-display text-2xl uppercase tracking-wider text-paper hover:text-orange-brand transition-colors"
            >
              Prepress
            </a>
            <a
              href="#vehicle-workflow"
              onClick={toggleMobileMenu}
              className="font-display text-2xl uppercase tracking-wider text-paper hover:text-orange-brand transition-colors"
            >
              Vehicle Wrap Workflow
            </a>
            <a
              href="#experience"
              onClick={toggleMobileMenu}
              className="font-display text-2xl uppercase tracking-wider text-paper hover:text-orange-brand transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              onClick={toggleMobileMenu}
              className="font-display text-2xl uppercase tracking-wider text-paper hover:text-orange-brand transition-colors"
            >
              Contact
            </a>
            <a
              href="/Pawan_Kumar_Resume.pdf"
              download
              onClick={toggleMobileMenu}
              className="border border-orange-brand text-orange-brand px-6 py-3 font-mono text-xs uppercase tracking-widest mt-4"
            >
              ↓ Download CV (PDF)
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-screen flex flex-col justify-center blueprint-grid pt-32 pb-16 px-[6vw] max-w-7xl mx-auto overflow-hidden select-none">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-16 items-center relative z-10">
          <div>
            {/* Eyebrow / Workflow */}
            <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-5 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-orange-brand block" />
              <span>Concept · AI Exploration · Prepress · Print · Finishing · Delivery</span>
            </div>
            
            {/* Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.0] text-paper mb-6 uppercase">
              Senior Graphic Designer <br />
              <span className="text-orange-brand neon-pulse-load">&amp; Brand, Prepress &amp; Signage Production Specialist</span>
            </h1>

            {/* Subtext */}
            <p className="text-paper-dim text-sm md:text-base max-w-lg leading-relaxed mb-6">
              Over 7+ years of experience in brand design, outdoor advertising, retail signage rollouts (50+ Indian Oil &amp; HPCL sites), prepress, vehicle branding wraps, and modern AI workflows.
            </p>

            {/* Target Location */}
            <p className="text-paper text-sm font-semibold mb-8 max-w-lg border-l border-orange-brand/50 pl-4 py-1 bg-steel-1/30">
              Based in Dubai, UAE | Looking for corporate graphic designer roles in the UAE &amp; GCC
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 mb-8">
              <div className="border border-line/40 bg-steel-1/40 p-3.5">
                <div className="font-display text-3xl md:text-4xl text-orange-brand neon-glow">7+</div>
                <div className="font-mono text-[10px] text-paper-dim uppercase tracking-wider mt-1">Years Exp.</div>
              </div>
              <div className="border border-line/40 bg-steel-1/40 p-3.5">
                <div className="font-display text-3xl md:text-4xl text-orange-brand neon-glow">50+</div>
                <div className="font-mono text-[10px] text-paper-dim uppercase tracking-wider mt-1">Retail Sites</div>
              </div>
              <div className="border border-line/40 bg-steel-1/40 p-3.5">
                <div className="font-display text-3xl md:text-4xl text-orange-brand neon-glow">30%</div>
                <div className="font-mono text-[10px] text-paper-dim uppercase tracking-wider mt-1">Faster Turnaround</div>
              </div>
              <div className="border border-line/40 bg-steel-1/40 p-3.5">
                <div className="font-display text-3xl md:text-4xl text-orange-brand neon-glow">0</div>
                <div className="font-mono text-[10px] text-paper-dim uppercase tracking-wider mt-1">Major Reprints (6 Yrs)</div>
              </div>
            </div>

            {/* Hero Quick Meta */}
            <div className="font-mono text-xs text-paper-dim flex flex-wrap gap-x-6 gap-y-2 mb-10">
              <span>📍 Dubai, UAE (Open to UAE &amp; GCC)</span>
              <span>✉ pawankumard@hotmail.com</span>
              <span>📱 +971 58 264 8833 (UAE)</span>
              <span>📱 +91 93908 90890 (IND)</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="bg-orange-brand text-ink px-6 py-4 font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:bg-paper hover:text-ink hover:-translate-y-0.5"
              >
                View Production Work
              </a>
              <a
                href="/Pawan_Kumar_Resume.pdf"
                download
                className="border border-line text-paper px-6 py-4 text-xs font-bold uppercase tracking-wider transition-colors hover:border-orange-brand hover:text-orange-brand"
              >
                Download Updated CV
              </a>
              <a
                href="https://wa.me/971582648833"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-orange-brand/60 text-orange-brand px-6 py-4 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-orange-brand hover:text-ink"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </div>

          {/* Right Side image viewport with corner framing */}
          <div className="relative max-w-md lg:max-w-none mx-auto w-full">
            <CornerFrame>
              <img
                src="/images/vehicle-branding/libra_tech_peugeot_expert.jpg"
                alt="Libra Tech Services Commercial Van Full Wrap"
                className="w-full h-auto object-cover aspect-[4/3] block"
              />
              <div className="absolute bottom-0 left-0 bg-orange-brand text-ink font-mono text-[10px] font-bold py-1 px-3 select-none">
                Vehicle Branding Wrap, Libra Tech Services LLC
              </div>
            </CornerFrame>
          </div>
        </div>
      </section>

      {/* Divider */}
      <DimensionLine label="Print, Signage &amp; Vehicle Graphics Portfolio" />

      {/* ============ SUMMARY STRIP (ABOUT) ============ */}
      <section className="bg-steel-1 py-20 px-[6vw]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[140px_1.2fr_1fr] gap-12 items-start">
          
          {/* Avatar Circle */}
          <div className="flex justify-center lg:justify-start">
            <div className="w-[130px] h-[130px] border-2 border-orange-brand rounded-full flex flex-col items-center justify-center shrink-0 p-4 select-none">
              <div className="font-display text-2xl tracking-wide uppercase leading-none">
                <span className="text-paper">P</span>
                <span className="text-orange-brand">K</span>
              </div>
              <div className="font-mono text-[9px] text-paper-dim uppercase mt-2 tracking-widest text-center">
                D. Pawan Kumar
              </div>
            </div>
          </div>

          {/* Description Paragraphs */}
          <div className="flex flex-col gap-4">
            <p className="text-paper text-sm md:text-base leading-relaxed font-semibold">
              I design for physical production and corporate brand integrity, taking jobs from first concept to error-free output.
            </p>
            <p className="text-paper-dim text-sm md:text-base leading-relaxed">
              I am a Senior Graphic Designer with over seven years of specialized experience in brand design, outdoor advertising, retail signage systems, and vehicle branding. Having designed and rolled out brand identities for more than 50 Indian Oil and HPCL retail stations, I know how to navigate tight construction schedules, fabrication tolerances, and strict brand guidelines.
            </p>
            <p className="text-paper-dim text-sm md:text-base leading-relaxed">
              Most recently in Dubai, I designed and produced vehicle wraps and large-format graphics at Ash &amp; Sims, operating Epson eco-solvent printers and plotter cutters. To accelerate concept development, I integrate modern generative AI workflows (Google Gemini, Google Flow/Veo, and ComfyUI) for rapid visual research and storyboard prototyping.
            </p>
            <a
              href="/Pawan_Kumar_Resume.pdf"
              download
              className="bg-orange-brand text-ink py-3 px-6 font-mono text-[11px] uppercase tracking-wider font-bold w-fit transition-all hover:bg-paper hover:text-ink mt-2"
            >
              ↓ Download Updated CV (PDF)
            </a>
          </div>

          {/* Fact Sheet block */}
          <div className="bg-ink border border-line p-6 font-mono text-xs md:text-sm text-paper-dim flex flex-col gap-3.5">
            <div>
              <span className="text-orange-brand font-semibold">📍 Location:</span> Dubai, UAE (Open to UAE &amp; GCC)
            </div>
            <div>
              <span className="text-orange-brand font-semibold">✉ Email:</span> pawankumard@hotmail.com
            </div>
            <div>
              <span className="text-orange-brand font-semibold">📱 UAE Phone:</span> +971 58 264 8833
            </div>
            <div>
              <span className="text-orange-brand font-semibold">📱 India Phone:</span> +91 93908 90890
            </div>
            <div>
              <span className="text-orange-brand font-semibold">💼 Target Role:</span> Senior Graphic Designer (Corporate)
            </div>
            <div>
              <span className="text-orange-brand font-semibold">🌐 Languages:</span> English · Telugu · Hindi
            </div>
            <div>
              <span className="text-orange-brand font-semibold">🚗 Driving:</span> Indian LMV Licence Holder
            </div>
          </div>
        </div>

        {/* Capability Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12 pt-12 border-t border-line/30 select-none">
          <div className="border border-line bg-ink/30 p-5 flex flex-col justify-between min-h-[110px]">
            <span className="font-display text-2xl text-orange-brand">7+ Yrs</span>
            <span className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-2">Branding &amp; Print Production</span>
          </div>
          <div className="border border-line bg-ink/30 p-5 flex flex-col justify-between min-h-[110px]">
            <span className="font-display text-2xl text-orange-brand">AI Flow</span>
            <span className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-2">Gemini, Veo &amp; ComfyUI</span>
          </div>
          <div className="border border-line bg-ink/30 p-5 flex flex-col justify-between min-h-[110px]">
            <span className="font-display text-2xl text-orange-brand">50+ Sites</span>
            <span className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-2">Indian Oil &amp; HPCL Retail</span>
          </div>
          <div className="border border-line bg-ink/30 p-5 flex flex-col justify-between min-h-[110px]">
            <span className="font-display text-2xl text-orange-brand">Fleet Wraps</span>
            <span className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-2">Vehicle Branding &amp; RTA Setup</span>
          </div>
          <div className="border border-line bg-ink/30 p-5 flex flex-col justify-between min-h-[110px]">
            <span className="font-display text-2xl text-orange-brand">30% Faster</span>
            <span className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-2">Workflow Turnaround</span>
          </div>
        </div>
      </section>

      {/* ============ TRUSTED BRANDS & CLIENTS ============ */}
      <section className="border-y border-line py-20 px-[6vw] bg-ink select-none">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-12 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-orange-brand block" />
            <span>Capability Sectors &amp; Trusted Brand Rollouts</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sector 1 */}
            <div className="border border-line bg-steel-1/20 p-8 flex flex-col justify-between min-h-[260px] relative">
              <span className="absolute top-2 right-4 font-mono text-[9px] text-orange-brand/35">// SECTOR.01</span>
              <div>
                <h3 className="font-display text-sm text-orange-brand tracking-wide uppercase mb-3">
                  Forecourt &amp; Fuel Retail
                </h3>
                <p className="text-paper-dim text-xs leading-relaxed mb-6">
                  Complete brand rollouts for 50+ petroleum retail sites: canopy fascias, illuminated pylons, monolith price displays, and forecourt POSM compliant with strict brand SOPs.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 border-t border-line/30 pt-5">
                <img src="/images/p19_indianoil_logo.jpg" alt="IndianOil" className="h-6 w-auto object-contain filter grayscale brightness-[2.2] contrast-[0.9] opacity-75 hover:opacity-100 hover:filter-none transition-all duration-300" />
                <img src="/images/p19_hp_logo.jpg" alt="HPCL" className="h-6 w-auto object-contain filter grayscale brightness-[2.2] contrast-[0.9] opacity-75 hover:opacity-100 hover:filter-none transition-all duration-300" />
                <img src="/images/p19_bpcl_logo.jpg" alt="Bharat Petroleum" className="h-6 w-auto object-contain filter grayscale brightness-[2.2] contrast-[0.9] opacity-75 hover:opacity-100 hover:filter-none transition-all duration-300" />
                <span className="font-display text-[9px] text-paper-dim hover:text-paper tracking-wider uppercase font-semibold">SERVO</span>
              </div>
            </div>

            {/* Sector 2 */}
            <div className="border border-line bg-steel-1/20 p-8 flex flex-col justify-between min-h-[260px] relative">
              <span className="absolute top-2 right-4 font-mono text-[9px] text-orange-brand/35">// SECTOR.02</span>
              <div>
                <h3 className="font-display text-sm text-orange-brand tracking-wide uppercase mb-3">
                  Commercial Fleet &amp; Vehicle Wraps
                </h3>
                <p className="text-paper-dim text-xs leading-relaxed mb-6">
                  Vehicle branding, realistic 3D client mockups, UAE RTA-compliant layouts, and print-and-cut file preparation for corporate and commercial fleets across the UAE.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 border-t border-line/30 pt-5 font-display text-[9px] text-paper-dim uppercase tracking-wider">
                <span className="border border-line px-2 py-0.5 text-paper">Libra Tech</span>
                <span className="border border-line px-2 py-0.5 text-paper">Floward</span>
                <span className="border border-line px-2 py-0.5 text-paper">Bath &amp; Bubbles</span>
                <span className="border border-line px-2 py-0.5 text-paper">Greenly.ae</span>
                <span className="border border-line px-2 py-0.5 text-paper">Golden Tower</span>
                <span className="border border-line px-2 py-0.5 text-paper">Expat Group</span>
              </div>
            </div>

            {/* Sector 3 */}
            <div className="border border-line bg-steel-1/20 p-8 flex flex-col justify-between min-h-[260px] relative">
              <span className="absolute top-2 right-4 font-mono text-[9px] text-orange-brand/35">// SECTOR.03</span>
              <div>
                <h3 className="font-display text-sm text-orange-brand tracking-wide uppercase mb-3">
                  Showrooms, Retail &amp; Exhibitions
                </h3>
                <p className="text-paper-dim text-xs leading-relaxed mb-6">
                  ACP cladding facade drawings, backlit 3D channel letters, trade show modular display backdrops, and exhibition graphics for leading apparel, electrical, and manufacturing brands.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 border-t border-line/30 pt-5">
                <div className="bg-white px-2 py-0.5 rounded-sm">
                  <img src="/images/p9_raymond.jpg" alt="Raymond" className="h-5 w-auto object-contain filter grayscale brightness-[1.1] opacity-75 hover:opacity-100 hover:filter-none transition-all duration-300" />
                </div>
                <div className="bg-white px-2 py-0.5 rounded-sm">
                  <img src="/images/p19_havells_logo.jpg" alt="Havells" className="h-4 w-auto object-contain filter grayscale brightness-[1.1] opacity-75 hover:opacity-100 hover:filter-none transition-all duration-300" />
                </div>
                <span className="font-display text-[9px] text-paper-dim hover:text-paper tracking-wider italic font-semibold">Siyaram&apos;s</span>
                <span className="font-display text-[9px] text-paper-dim hover:text-paper tracking-wider uppercase font-semibold">MINISTER WHITE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WORK SECTION ============ */}
      <section className="py-24 px-[6vw] max-w-7xl mx-auto" id="work">
        <div className="mb-14 max-w-2xl">
          <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-3 select-none">
            // 01 — SELECTED PRODUCTION WORK
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-paper tracking-wide leading-tight mb-4">
            Vehicle Wraps, Signage &amp; Prepress
          </h2>
          <p className="text-paper-dim text-sm md:text-base leading-relaxed">
            Explore commercial vehicle branding projects, large-format outdoor signage, prepress technical sheets, and retail infrastructure systems.
          </p>
        </div>

        {/* Dynamic work filter grid */}
        <WorkGrid />
      </section>

      {/* Divider */}
      <DimensionLine label="Prepress &amp; Technical Specifications" />

      {/* ============ TECHNICAL ARTWORK SHOWCASE ============ */}
      <section className="bg-steel-1 py-24 px-[6vw]" id="technical">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-3 select-none">
              // 02 — PREPRESS &amp; PRODUCTION ARTWORK
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-paper tracking-wide leading-tight mb-4">
              Prepress &amp; Technical Drawings
            </h2>
            <p className="text-paper-dim text-sm md:text-base leading-relaxed">
              I translate client-approved layouts into detailed, production-ready signage and sheet arrangement plans. By calculating exact panel divisions (such as ACM fascia splits), sheet counts, and directional signage placements, I provide fabrication teams with clear, error-free manufacturing blueprints.
            </p>
          </div>

          {/* Split display component */}
          <TechShowcase />
        </div>
      </section>

      {/* Divider */}
      <DimensionLine label="Signage Fabrication &amp; CNC Production" />

      {/* ============ SIGNAGE FABRICATION & CNC PRODUCTION SECTION ============ */}
      <section className="py-24 px-[6vw] max-w-7xl mx-auto" id="signage-fabrication">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <div>
            <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-3 select-none">
              // 03 — FABRICATION DESIGN
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-paper tracking-wide leading-tight mb-4">
              Signage Fabrication &amp; CNC Production
            </h2>
            <p className="text-paper-dim text-sm md:text-base leading-relaxed mb-6 font-semibold">
              Designing for fabrication — not just visualization.
            </p>
            <p className="text-paper-dim text-sm md:text-base leading-relaxed mb-6">
              Translating design concepts into fabrication-ready drawings and cut files. I specialize in preparing files for manufacturing, ensuring that all components align, fit, and are optimized for machine cutting, routing, and folding.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-paper-dim list-none pl-0">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                ACP/ACM panel design &amp; layout
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                Panel divisions &amp; splitting sheets
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                Fabrication-ready vector artwork
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                CNC cutting path &amp; tool-path prep
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                Plotter vector cut paths &amp; registration
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                Lamination &amp; print protection specs
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                Print production scale calculations
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                Zero-reprint verified packages
              </li>
            </ul>
          </div>

          <div className="border border-line p-6 bg-steel-1 flex flex-col gap-4 select-none">
            <h4 className="font-display text-paper text-xs uppercase tracking-wider mb-2 border-b border-line pb-2">
              CNC Tool-Path Preparation
            </h4>
            <p className="font-sans text-xs text-paper-dim leading-relaxed">
              I prepare precise vector layouts for CNC routing of aluminum composite panels (ACP/ACM). This includes pocket routing paths for v-groove folds, contour cut paths, nesting parts to minimize sheet waste, and specifying tool offsets to match fabrication templates.
            </p>
            <div className="bg-ink p-4 border border-line flex flex-col gap-2 font-mono text-[10px] text-paper-dim">
              <span className="text-orange-brand font-semibold">// ROUTING SCHEMATICS</span>
              <span>- 90&deg; V-Groove depth: 2.2mm (for folding)</span>
              <span>- Nesting yield: optimized per 1220x2440mm sheet</span>
              <span>- Cut path margins: 15mm bleed for wrap edges</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <DimensionLine label="Vehicle Graphics &amp; Print Production Workflow" />

      {/* ============ VEHICLE GRAPHICS WORKFLOW SECTION ============ */}
      <section className="py-24 px-[6vw] max-w-7xl mx-auto" id="vehicle-workflow">
        <div className="mb-14 max-w-2xl">
          <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-3 select-none">
            // 04 — VEHICLE GRAPHICS WORKFLOW
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-paper tracking-wide leading-tight mb-4">
            Vehicle Graphics &amp; Fleet Wrap Workflow
          </h2>
          <p className="text-paper-dim text-sm md:text-base leading-relaxed">
            From initial vehicle measurement to the final vinyl wrap application — a systematic approach ensuring dimensionally accurate graphics and UAE RTA-compliant fleet branding.
          </p>
        </div>

        {/* Workflow Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative select-none">
          {[
            { step: '01', title: 'Measurement', desc: 'Taking physical measurements of the vehicle to prepare accurate branding artwork.' },
            { step: '02', title: 'Artwork', desc: 'Preparing vehicle branding artwork according to the vehicle dimensions and branding requirements.' },
            { step: '03', title: 'Mockup', desc: 'Creating a realistic vehicle mockup and sharing it with the client for approval.' },
            { step: '04', title: 'RTA Approval', desc: 'Preparing vehicle branding artwork in accordance with applicable UAE RTA guidelines and approval requirements.' },
            { step: '05', title: 'Print & Cut Files', desc: 'Exporting TIFF files and vector paths with registration marks for cutting.' },
            { step: '06', title: 'RIP Prep', desc: 'Configuring files and sending RIP-ready layouts to the printing queue.' },
            { step: '07', title: 'Epson Printing', desc: 'Operating Epson Eco-Solvent printing equipment for vehicle graphics production.' },
            { step: '08', title: 'Plotter Cutting', desc: 'Preparing vector cut files and operating plotter cutting equipment for decals.' },
            { step: '09', title: 'Finishing', desc: 'Weeding vinyl, trimming edges, and applying gloss or matte lamination.' },
            { step: '10', title: 'Vehicle Branding', desc: 'Applying graphics with practical knowledge of vinyl media for flat, semi-curved, and fully curved surfaces.' }
          ].map((item) => (
            <div key={item.step} className="border border-line bg-steel-1 p-5 flex flex-col justify-between min-h-[165px]">
              <div>
                <span className="font-mono text-xs text-orange-brand font-bold">{item.step}</span>
                <h3 className="font-display text-xs text-paper uppercase mt-2 mb-2 leading-tight">{item.title}</h3>
              </div>
              <p className="font-sans text-[10px] text-paper-dim leading-normal">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Divider */}
      <DimensionLine label="Print Production Experience" />

      {/* ============ PRINT PRODUCTION EXPERIENCE SECTION ============ */}
      <section className="bg-steel-1 py-20 px-[6vw]" id="production-experience">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 items-start">
          <div>
            <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-3 select-none">
              // 05 — PRODUCTION CAPABILITY
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-paper tracking-wide leading-tight mb-6">
              Print Production Experience
            </h2>
            
            {/* Visual production workflow */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[10px] md:text-xs text-paper mb-8 bg-ink border border-line p-4 w-fit select-none">
              <span>Concept &amp; AI Explorations</span>
              <span className="text-orange-brand font-bold">&rarr;</span>
              <span>Preflight Checks</span>
              <span className="text-orange-brand font-bold">&rarr;</span>
              <span>CMYK / Pantone Match</span>
              <span className="text-orange-brand font-bold">&rarr;</span>
              <span>Large Format Printing</span>
              <span className="text-orange-brand font-bold">&rarr;</span>
              <span>Finishing &amp; Plotter Cut</span>
              <span className="text-orange-brand font-bold">&rarr;</span>
              <span>Quality Control</span>
            </div>

            <div className="flex flex-col gap-4 text-paper-dim text-sm leading-relaxed">
              <div className="border-l-2 border-orange-brand pl-4 py-1 mb-2">
                <h4 className="font-display text-paper text-sm uppercase tracking-wider mb-1">
                  Experienced Graphic Designer &amp; Print Operator
                </h4>
                <p className="font-mono text-xs text-orange-brand">Ash &amp; Sims Advertising LLC · Dubai, UAE (Jun 2026 – Nov 2026)</p>
              </div>
              <p>
                In my role at Ash &amp; Sims, I managed the physical transition of files from digital layouts into premium physical prints. I handled prepress preparation, preflight checks, spot colors, and CMYK/Pantone matching to guarantee color consistency across substrates.
              </p>
              <p>
                I operated our Epson eco-solvent printers and plotter cutting machinery, weeded vinyl graphics, and oversaw final finishing processes to deliver zero-error vehicle branding for the UAE market.
              </p>
            </div>
          </div>

          <div className="border border-line p-6 bg-ink flex flex-col gap-4 select-none">
            <h4 className="font-display text-paper text-xs uppercase tracking-wider mb-2 border-b border-line pb-2">
              Production Checkpoints
            </h4>
            <div className="flex justify-between items-center text-xs font-mono text-paper-dim py-1 border-b border-line/30">
              <span>Raster Image Processor (RIP) setup</span>
              <span className="text-orange-brand font-semibold">100% Verified</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-paper-dim py-1 border-b border-line/30">
              <span>Epson Eco-Solvent &amp; Flatbed Equipment</span>
              <span className="text-orange-brand font-semibold">Hands-on</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-paper-dim py-1 border-b border-line/30">
              <span>Vinyl Weed &amp; Edge Trimming</span>
              <span className="text-orange-brand font-semibold">QC Overseen</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-paper-dim py-1 border-b border-line/30">
              <span>Pantone / Spot Color Verification</span>
              <span className="text-orange-brand font-semibold">Color Match</span>
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-paper-dim py-1">
              <span>ACM / ACP Cladding Sheet Splits</span>
              <span className="text-orange-brand font-semibold">Scale Prep</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <DimensionLine label="Professional Experience &amp; Skills" />

      {/* ============ EXPERIENCE TIMELINE ============ */}
      <section className="py-24 px-[6vw] max-w-7xl mx-auto" id="experience">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
          
          {/* Header & Skills */}
          <div>
            <div className="mb-8">
              <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-3 select-none">
                // 06 — PROFESSIONAL EXPERIENCE
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-paper tracking-wide leading-tight mb-4">
                Proven Track Record<br />In Brand &amp; Print
              </h2>
            </div>
            
            <p className="text-paper-dim text-sm md:text-base leading-relaxed mb-6">
              <strong>I design for the physical world, not just the screen.</strong> More than seven years of delivering branding systems across petroleum retail networks and corporate commercial fleets taught me to think in fabrication tolerances, material durability, and installation constraints.
            </p>
            <p className="text-paper-dim text-sm md:text-base leading-relaxed mb-8">
              Every canopy, pylon, showroom fascia, and fleet wrap I have developed has had to withstand real-world site conditions, client guidelines, and vendor workflows.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(skillsGrouped).map(([category, items]) => (
                <div key={category} className="border border-line/40 bg-ink/30 p-4">
                  <h4 className="font-mono text-xs text-orange-brand tracking-wider uppercase mb-2">
                    // {category}
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="font-mono text-[9px] md:text-[10px] text-paper-dim bg-steel-1 border border-line/20 px-2 py-0.5"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Nodes */}
          <div>
            <ExperienceTimeline />

            {/* Education */}
            <div className="mt-12 pt-8 border-t border-line/40">
              <h4 className="font-mono text-xs text-orange-brand tracking-wider uppercase mb-4">
                // Education &amp; Credentials
              </h4>
              <div className="flex flex-col gap-4">
                <div>
                  <div className="font-display text-sm md:text-base text-paper">
                    BTCA — Osmania University
                  </div>
                  <div className="font-mono text-xs text-paper-dim mt-0.5">
                    In Progress · Since 2025
                  </div>
                </div>
                <div>
                  <div className="font-display text-sm md:text-base text-paper">
                    Diploma — Computer Science
                  </div>
                  <div className="font-mono text-xs text-paper-dim mt-0.5">
                    3-Year Programme · 2009
                  </div>
                </div>
                <div className="pt-2">
                  <span className="font-mono text-xs text-orange-brand">Driving Licence:</span>
                  <span className="font-mono text-xs text-paper-dim ml-2">Indian LMV Licence Holder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section className="border-t border-line py-28 px-[6vw] bg-ink text-center max-w-7xl mx-auto" id="contact">
        <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-6 flex justify-center items-center gap-3 select-none">
          <span className="w-4 h-[1px] bg-orange-brand" />
          Dubai, UAE · Open to UAE &amp; GCC
          <span className="w-4 h-[1px] bg-orange-brand" />
        </div>
        
        <h2 className="font-display text-3xl sm:text-5xl md:text-7xl text-paper tracking-tight leading-tight mb-6">
          Let&apos;s build your next<br />
          <span className="text-orange-brand">brand rollout.</span>
        </h2>

        <p className="text-paper-dim text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-12">
          Based in Dubai, UAE | Looking for a Senior Graphic Designer role with a corporate company in the UAE or GCC. Open to connecting on brand design, large-format print, and vehicle graphics projects.
        </p>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a
            href="mailto:pawankumard@hotmail.com"
            className="border border-orange-brand bg-orange-brand text-ink font-mono text-xs md:text-sm py-4.5 px-7 flex items-center gap-2.5 tracking-wider uppercase font-bold hover:bg-white hover:border-white transition-all duration-200"
          >
            ✉ pawankumard@hotmail.com
          </a>
          <a
            href="tel:+971582648833"
            className="border border-line text-paper font-mono text-xs md:text-sm py-4.5 px-7 flex items-center gap-2.5 tracking-wider uppercase hover:border-orange-brand hover:text-orange-brand transition-all duration-200"
          >
            📱 +971 58 264 8833 (UAE)
          </a>
          <a
            href="tel:+919390890890"
            className="border border-line text-paper font-mono text-xs md:text-sm py-4.5 px-7 flex items-center gap-2.5 tracking-wider uppercase hover:border-orange-brand hover:text-orange-brand transition-all duration-200"
          >
            📱 +91 93908 90890 (IND)
          </a>
          <a
            href="https://wa.me/971582648833"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line text-paper font-mono text-xs md:text-sm py-4.5 px-7 flex items-center gap-2.5 tracking-wider uppercase hover:border-orange-brand hover:text-orange-brand transition-all duration-200"
          >
            💬 WhatsApp Chat
          </a>
          <a
            href="https://www.linkedin.com/in/pawankumardholli"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-line text-paper font-mono text-xs md:text-sm py-4.5 px-7 flex items-center gap-2.5 tracking-wider uppercase hover:border-orange-brand hover:text-orange-brand transition-all duration-200"
          >
            LinkedIn Profile
          </a>
        </div>

        {/* Relocation / Availability Info */}
        <div className="font-mono text-xs text-paper-dim mb-4">
          Available in the UAE · Open to corporate roles across UAE &amp; GCC
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-line py-8 px-[6vw] flex flex-col sm:flex-row justify-between items-center gap-4 max-w-7xl mx-auto font-mono text-[10px] md:text-xs text-paper-dim select-none">
        <div>
          © 2026 D. Pawan Kumar — Senior Graphic Designer
        </div>
        <div className="tracking-wider uppercase text-orange-brand/80">
          Brand Identity &middot; AI Concepting &middot; Prepress &middot; Vehicle Wraps &middot; Print Production
        </div>
      </footer>
    </div>
  );
}
