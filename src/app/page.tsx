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
    DESIGN: ['Adobe Illustrator', 'Adobe Photoshop', 'CorelDRAW', 'Figma'],
    PREPRESS: [
      'Print-ready artwork',
      'CMYK preparation',
      'Pantone colour matching',
      'Large-format preflight',
      'TIFF production files',
      'RIP-ready files',
      'Print & cut file preparation'
    ],
    'PRINT PRODUCTION': [
      'Large-format digital printing',
      'Flatbed printing',
      'Roll-to-roll printing',
      'Epson Eco-Solvent printing',
      'Lamination',
      'Print finishing',
      'Print quality control'
    ],
    'CUTTING & FABRICATION': [
      'Plotter cutting',
      'Vector cut paths',
      'ACP/ACM panel preparation',
      'CNC cutting path/tool-path preparation',
      'Fabrication-ready artwork'
    ],
    'VEHICLE GRAPHICS': [
      'Vehicle measurement',
      'Vehicle branding artwork',
      'Vehicle mockups',
      'RTA-compliant artwork preparation',
      'Vinyl media selection',
      'Flat-surface media',
      'Semi-curved media',
      'Fully curved media',
      'Print & cut workflow'
    ]
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
                Pawan Kumar D
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
            <a href="#workflow" className="font-mono text-xs text-paper-dim hover:text-orange-brand tracking-widest uppercase transition-colors duration-200 relative group py-1">
              Workflow
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
              href="#workflow"
              onClick={toggleMobileMenu}
              className="font-display text-2xl uppercase tracking-wider text-paper hover:text-orange-brand transition-colors"
            >
              Workflow
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
              <span>Design &rarr; Prepress &rarr; Print &rarr; Finishing &rarr; Delivery</span>
            </div>
            
            {/* Title */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.0] text-paper mb-6 uppercase">
              Graphic Designer <br />
              <span className="text-orange-brand">&amp; Print, Prepress &amp; Signage Production Specialist</span>
            </h1>

            {/* Subtext */}
            <p className="text-paper-dim text-sm md:text-base max-w-lg leading-relaxed mb-6">
              8+ years of experience across graphic design, prepress, large-format printing, signage, vehicle graphics and production artwork.
            </p>

            {/* Current Relocation Target */}
            <p className="text-paper text-sm font-semibold mb-8 max-w-lg border-l border-orange-brand/30 pl-4 py-1">
              Currently based in Dubai, UAE | Open to relocating to New Zealand
            </p>

            {/* Stats row */}
            <div className="flex gap-8 md:gap-12 mb-8">
              <div>
                <div className="font-display text-3xl md:text-4xl text-orange-brand">8+</div>
                <div className="font-mono text-[10px] text-paper-dim uppercase tracking-wider mt-1.5">Years Exp.</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl text-orange-brand">50+</div>
                <div className="font-mono text-[10px] text-paper-dim uppercase tracking-wider mt-1.5">Retail Sites</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl text-orange-brand">4</div>
                <div className="font-mono text-[10px] text-paper-dim uppercase tracking-wider mt-1.5">Oil Brands</div>
              </div>
            </div>

            {/* Hero Quick Meta */}
            <div className="font-mono text-xs text-paper-dim flex flex-wrap gap-x-6 gap-y-2 mb-10">
              <span>📍 Dubai, UAE</span>
              <span>✉ pawankumard@hotmail.com</span>
              <span>📱 +971 58 241 6063</span>
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
                Download CV
              </a>
              <a
                href="#contact"
                className="border border-line text-paper px-6 py-4 text-xs font-bold uppercase tracking-wider transition-colors hover:border-orange-brand hover:text-orange-brand"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Side image viewport with corner framing */}
          <div className="relative max-w-md lg:max-w-none mx-auto w-full">
            <CornerFrame>
              <img
                src="/images/p4_hero_indianoil.jpg"
                alt="IndianOil canopy signage installation"
                className="w-full h-auto object-cover aspect-[4/3] block"
              />
              <div className="absolute bottom-0 left-0 bg-orange-brand text-ink font-mono text-[10px] font-bold py-1 px-3 select-none">
                Canopy Fascia, IndianOil
              </div>
            </CornerFrame>
          </div>
        </div>
      </section>

      {/* Divider */}
      <DimensionLine label="Print, Signage &amp; Production Portfolio" />

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
                Pawan Kumar D
              </div>
            </div>
          </div>

          {/* Description Paragraphs */}
          <div className="flex flex-col gap-4">
            <p className="text-paper text-sm md:text-base leading-relaxed font-semibold">
              I design for physical production, not just for the screen.
            </p>
            <p className="text-paper-dim text-sm md:text-base leading-relaxed">
              I am a production-focused Graphic Designer with over 8 years of experience in large-format digital printing, signage systems, vehicle graphics, and prepress artwork. I specialize in translating brand guidelines and layouts into print-ready arrangements with strict attention to bleed, scale, and color accuracy.
            </p>
            <p className="text-paper-dim text-sm md:text-base leading-relaxed mb-4">
              Currently operating print machinery and managing file preparation at Ash &amp; Sims in Dubai, I work directly with flatbed and roll-to-roll digital printing equipment, plotter cutting equipment, and finishing teams, ensuring accurate handoffs from design through fabrication to final delivery.
            </p>
            <a
              href="/Pawan_Kumar_Resume.pdf"
              download
              className="bg-orange-brand text-ink py-3 px-6 font-mono text-[11px] uppercase tracking-wider font-bold w-fit transition-all hover:bg-paper hover:text-ink"
            >
              ↓ Download CV (PDF)
            </a>
          </div>

          {/* Fact Sheet block */}
          <div className="bg-ink border border-line p-6 font-mono text-xs md:text-sm text-paper-dim flex flex-col gap-3.5">
            <div>
              <span className="text-orange-brand font-semibold">📍 Location:</span> Dubai, UAE (Open to New Zealand Relocation)
            </div>
            <div>
              <span className="text-orange-brand font-semibold">✉ Email:</span> pawankumard@hotmail.com
            </div>
            <div>
              <span className="text-orange-brand font-semibold">📱 Phone:</span> +971 58 241 6063
            </div>
            <div>
              <span className="text-orange-brand font-semibold">💼 Current Role:</span> Graphic Designer &amp; Print Operator
            </div>
            <div>
              <span className="text-orange-brand font-semibold">🌐 Languages:</span> English · Telugu · Hindi
            </div>
          </div>
        </div>

        {/* Capability Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12 pt-12 border-t border-line/30 select-none">
          <div className="border border-line bg-ink/30 p-5 flex flex-col justify-between min-h-[110px]">
            <span className="font-display text-2xl text-orange-brand">8+</span>
            <span className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-2">Years Experience</span>
          </div>
          <div className="border border-line bg-ink/30 p-5 flex flex-col justify-between min-h-[110px]">
            <span className="font-display text-2xl text-orange-brand">Prepress</span>
            <span className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-2">Preflight &amp; CMYK Separation</span>
          </div>
          <div className="border border-line bg-ink/30 p-5 flex flex-col justify-between min-h-[110px]">
            <span className="font-display text-2xl text-orange-brand">50+</span>
            <span className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-2">Large-Format Sites</span>
          </div>
          <div className="border border-line bg-ink/30 p-5 flex flex-col justify-between min-h-[110px]">
            <span className="font-display text-2xl text-orange-brand">Wraps</span>
            <span className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-2">Vehicle Signage &amp; Decals</span>
          </div>
          <div className="border border-line bg-ink/30 p-5 flex flex-col justify-between min-h-[110px]">
            <span className="font-display text-2xl text-orange-brand">Artwork</span>
            <span className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-2">Production-Ready Files</span>
          </div>
        </div>
      </section>

      {/* ============ TRUSTED BRANDS & CLIENTS ============ */}
      <section className="border-y border-line py-20 px-[6vw] bg-ink select-none">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-12 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-orange-brand block" />
            <span>Capability Sectors & Approved Brands</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sector 1 */}
            <div className="border border-line bg-steel-1/20 p-8 flex flex-col justify-between min-h-[260px] relative">
              <span className="absolute top-2 right-4 font-mono text-[9px] text-orange-brand/35">// SECTOR.01</span>
              <div>
                <h3 className="font-display text-sm text-orange-brand tracking-wide uppercase mb-3">
                  Forecourt & Fuel Retail
                </h3>
                <p className="text-paper-dim text-xs leading-relaxed mb-6">
                  Artwork design and panel arrangement sheet layouts for fuel retail canopy fascias, LED monolith structures, unipoles, and forecourt branding to brand standard specifications.
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
                  Showrooms & Storefronts
                </h3>
                <p className="text-paper-dim text-xs leading-relaxed mb-6">
                  ACP facade layouts, backlit channel letters, 3D retail modeling storefronts, and interior branding rollouts for fashion showrooms and wholesales.
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

            {/* Sector 3 */}
            <div className="border border-line bg-steel-1/20 p-8 flex flex-col justify-between min-h-[260px] relative">
              <span className="absolute top-2 right-4 font-mono text-[9px] text-orange-brand/35">// SECTOR.03</span>
              <div>
                <h3 className="font-display text-sm text-orange-brand tracking-wide uppercase mb-3">
                  Exhibition & Production Specs
                </h3>
                <p className="text-paper-dim text-xs leading-relaxed mb-6">
                  Trade show modular kiosks, exhibition booth styling, corporate advertising boards, and large-format digital print artwork scaling.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 border-t border-line/30 pt-5">
                <span className="font-display text-[9px] text-paper-dim hover:text-paper tracking-widest font-semibold">OTTO</span>
                <span className="font-display text-[9px] text-paper-dim hover:text-paper tracking-wider uppercase font-semibold">TECHNOSPORT</span>
                <span className="font-display text-[9px] text-paper-dim hover:text-paper tracking-widest uppercase font-semibold leading-none">GOEL TMT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WORK SECTION ============ */}
      <section className="py-24 px-[6vw] max-w-7xl mx-auto" id="work">
        <div className="mb-14 max-w-2xl">
          <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-3 select-none">
            // 01 — SELECTED WORK
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-paper tracking-wide leading-tight mb-4">
            Print, Signage &amp; Production
          </h2>
          <p className="text-paper-dim text-sm md:text-base leading-relaxed">
            Selected work across large-format print, vehicle graphics, signage, retail branding, exhibition graphics and production artwork.
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
              // 02 — PREPRESS & PRODUCTION ARTWORK
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-paper tracking-wide leading-tight mb-4">
              Prepress &amp; Production Artwork
            </h2>
            <p className="text-paper-dim text-sm md:text-base leading-relaxed">
              I translate client-approved layouts (like IOCL standards) into detailed, production-ready signage and sheet arrangement plans. I calculate exact panel divisions (such as ACM fascia splits), sheet counts, and directional signage placements to provide the fabrication and production departments with a clear, error-free view for manufacturing.
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
              Translating design concepts into fabrication-ready drawings and cut files. I specialize in preparing files for manufacturing, ensuring that all components align, fit, and are optimized for machine cutting and bending.
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
                Production-ready file packages
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
            Vehicle Graphics &amp; Print Production Workflow
          </h2>
          <p className="text-paper-dim text-sm md:text-base leading-relaxed">
            From initial vehicle measurement to the final vinyl wrap application — a systematic approach ensuring dimensionally accurate graphics and RTA-compliant branding.
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
              <span>Artwork Preparation</span>
              <span className="text-orange-brand font-bold">&rarr;</span>
              <span>Preflight</span>
              <span className="text-orange-brand font-bold">&rarr;</span>
              <span>CMYK / Colour Management</span>
              <span className="text-orange-brand font-bold">&rarr;</span>
              <span>Large Format Printing</span>
              <span className="text-orange-brand font-bold">&rarr;</span>
              <span>Finishing</span>
              <span className="text-orange-brand font-bold">&rarr;</span>
              <span>Quality Control</span>
            </div>

            <div className="flex flex-col gap-4 text-paper-dim text-sm leading-relaxed">
              <div className="border-l-2 border-orange-brand pl-4 py-1 mb-2">
                <h4 className="font-display text-paper text-sm uppercase tracking-wider mb-1">
                  Current Role: Graphic Designer &amp; Print Operator
                </h4>
                <p className="font-mono text-xs text-orange-brand">Ash &amp; Sims Advertising LLC — Dubai, UAE (2026 — Present)</p>
              </div>
              <p>
                In my current role, I manage the physical transition of files from digital layouts into premium physical prints. I handle all prepress prep work, preflight checks, spot colors, and CMYK/Pantone matching to guarantee color consistency.
              </p>
              <p>
                I am responsible for operating our flatbed and roll-to-roll digital printing equipment, operating plotter cutting equipment, weeding vinyl graphics, and overseeing final finishing processes. I work closely with our fabrication team to ensure correct installation sizing and zero-error print delivery.
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
              <span>Flatbed &amp; Roll Printing Equipment</span>
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
                // 03 — EXPERIENCE
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-paper tracking-wide leading-tight mb-4">
                From Forecourt Signage<br />to Full Brand Systems
              </h2>
            </div>
            
            <p className="text-paper-dim text-sm md:text-base leading-relaxed mb-6">
              <strong>I design for the real world, not just the screen.</strong> Eight years of building branding systems for petroleum retail networks taught me to think in fabrication tolerances, material specs, and install constraints — not just layouts. Every canopy, monolith, and showroom fascia I&apos;ve designed has had to survive weather, vendors, and site conditions.
            </p>
            <p className="text-paper-dim text-sm md:text-base leading-relaxed mb-8">
              At Ambujam Advertising, I work with client-approved templates and brand guidelines—such as IOCL standards—translating site layouts into production-ready signage and sheet arrangements. I calculate exact panel divisions, sheet counts, and placements so that the fabrication and production teams can assemble everything without errors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {Object.entries(skillsGrouped).map(([category, items]) => (
                <div key={category} className="border border-line/40 bg-ink/10 p-4">
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
          </div>
        </div>
      </section>

      {/* ============ CONTACT SECTION ============ */}
      <section className="border-t border-line py-28 px-[6vw] bg-ink text-center max-w-7xl mx-auto" id="contact">
        <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-6 flex justify-center items-center gap-3 select-none">
          <span className="w-4 h-[1px] bg-orange-brand" />
          Dubai, UAE
          <span className="w-4 h-[1px] bg-orange-brand" />
        </div>
        
        <h2 className="font-display text-3xl sm:text-5xl md:text-7xl text-paper tracking-tight leading-tight mb-6">
          Let&apos;s build your next<br />
          <span className="text-orange-brand">brand rollout.</span>
        </h2>

        <p className="text-paper-dim text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-12">
          Currently based in Dubai, UAE | Open to relocating to New Zealand. Open to connecting on print production, signage, and branding projects.
        </p>

        {/* Contact Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          <a
            href="mailto:pawankumard@hotmail.com"
            className="border border-line text-paper bg-orange-brand text-ink border-orange-brand font-mono text-xs md:text-sm py-4.5 px-7 flex items-center gap-2.5 tracking-wider uppercase font-bold hover:bg-white hover:border-white transition-all duration-200"
          >
            ✉ pawankumard@hotmail.com
          </a>
          <a
            href="tel:+971582416063"
            className="border border-line text-paper font-mono text-xs md:text-sm py-4.5 px-7 flex items-center gap-2.5 tracking-wider uppercase hover:border-orange-brand hover:text-orange-brand transition-all duration-200"
          >
            📱 +971 58 241 6063
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

        {/* Relocation Info */}
        <div className="font-mono text-xs text-paper-dim mb-4">
          Open to New Zealand opportunities and relocation
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-line py-8 px-[6vw] flex flex-col sm:flex-row justify-between items-center gap-4 max-w-7xl mx-auto font-mono text-[10px] md:text-xs text-paper-dim select-none">
        <div>
          © 2026 D. Pawan Kumar — Graphic Designer
        </div>
        <div className="tracking-wider uppercase text-orange-brand/80">
          Concept &middot; Prepress &middot; Print &middot; Fabrication Coordination
        </div>
      </footer>
    </div>
  );
}
