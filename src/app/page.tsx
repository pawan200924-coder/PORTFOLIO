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
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const heroShowcase = [
    {
      title: 'Floral Line-Art Corporate Fleet Wrap · Floward',
      tag: 'BRAND IDENTITY & LIVERY',
      label: 'Floward Fleet',
      image: '/images/vehicle-branding/floward_suzuki_ertiga.jpg',
    },
    {
      title: 'Full Commercial Van Wrap · Libra Tech Services LLC',
      tag: 'COMMERCIAL FLEET WRAP',
      label: 'Libra Tech Van',
      image: '/images/vehicle-branding/libra_tech_peugeot_expert.jpg',
    },
    {
      title: 'Modular Trade Show Display & Exhibition Graphics · BD',
      tag: 'EVENT & MARKETING COLLATERAL',
      label: 'Exhibition Kiosk',
      image: '/images/p11_kiosk_bd.jpg',
    },
    {
      title: 'Pet Grooming Mascot Art & Mobile Van Livery · Bath & Bubbles',
      tag: 'CHARACTER ART & WRAP',
      label: 'Bath & Bubbles',
      image: '/images/vehicle-branding/bath_and_bubbles_peugeot_boxer.jpg',
    },
  ];

  const skillsGrouped = {
    'BRAND IDENTITY & DESIGN': [
      'Logo design & visual identity',
      'Brand guideline manuals & SOPs',
      'Corporate stationery & letterheads',
      'Marketing collateral & sales kits',
      'Brochures, catalogs & booklets',
      'Flyers, posters & POSM materials',
      'Executive presentation decks',
      'Social media creative assets',
    ],
    'MARKETING & ADVERTISING': [
      'Outdoor billboards & hoardings',
      'Exhibition booths & modular kiosks',
      'Roll-up banners & pop-up backdrops',
      'Trade show promotional suites',
      'Retail visual merchandising',
      'Double-sided fabric flags',
      'Commercial signage & wayfinding',
    ],
    'VEHICLE FLEET BRANDING': [
      'Commercial van wraps & decals',
      'Fleet branding design systems',
      'Photorealistic 3D client mockups',
      'UAE RTA guideline compliance',
      'Vinyl media selection (Cast/Poly)',
      'Print-and-cut fleet production',
    ],
    'AI & CREATIVE FLOW': [
      'Google Gemini visual research',
      'Google Flow (Veo) video concepts',
      'ComfyUI generative workflows',
      'Visual storyboarding & ideation',
      'Creative prompt engineering',
      'Rapid concept prototyping',
    ],
    'DESIGN TOOLS & SOFTWARE': [
      'Adobe Illustrator',
      'Adobe Photoshop',
      'Adobe InDesign',
      'CorelDRAW',
      'Figma & Canva',
      'Adobe Acrobat Pro',
      'After Effects (basic)',
    ],
    'PREPRESS & PRINT QC': [
      'CMYK color separation',
      'Pantone (PMS) spot color matching',
      'Large-format preflight checks',
      'TIFF & RIP software preparation',
      'Bleed, crop & cut-path setup',
      'Zero-reprint print QC signoff',
    ],
  };

  return (
    <div className="bg-ink min-h-screen text-paper selection:bg-orange-brand selection:text-ink font-sans">
      
      {/* ============ NAVIGATION HEADER ============ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-ink/95 backdrop-blur-md border-b border-line/60 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-[6vw] py-4 flex items-center justify-between">
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
          <nav className="hidden md:flex items-center gap-7">
            <a href="#work" className="font-mono text-xs text-paper-dim hover:text-orange-brand tracking-widest uppercase transition-colors duration-200 relative group py-1">
              Work
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-brand transition-all duration-250 group-hover:w-full" />
            </a>
            <a href="#marketing-collateral" className="font-mono text-xs text-paper-dim hover:text-orange-brand tracking-widest uppercase transition-colors duration-200 relative group py-1">
              Marketing &amp; Collateral
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-brand transition-all duration-250 group-hover:w-full" />
            </a>
            <a href="#vehicle-workflow" className="font-mono text-xs text-paper-dim hover:text-orange-brand tracking-widest uppercase transition-colors duration-200 relative group py-1">
              Fleet Branding
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
              href="#marketing-collateral"
              onClick={toggleMobileMenu}
              className="font-display text-2xl uppercase tracking-wider text-paper hover:text-orange-brand transition-colors"
            >
              Marketing &amp; Collateral
            </a>
            <a
              href="#vehicle-workflow"
              onClick={toggleMobileMenu}
              className="font-display text-2xl uppercase tracking-wider text-paper hover:text-orange-brand transition-colors"
            >
              Fleet Branding
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
      <section className="relative pt-32 sm:pt-36 md:pt-40 pb-20 px-[6vw] max-w-7xl mx-auto blueprint-grid overflow-hidden select-none">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-12 lg:gap-14 items-center relative z-10">
          <div>
            {/* Eyebrow / Identity */}
            <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-[1px] bg-orange-brand block" />
              <span>D. Pawan Kumar · Senior Graphic Designer</span>
            </div>
            
            {/* Main Title - Clean Graphic Designer Hierarchy */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.08] text-paper mb-4 uppercase">
              Brand Identity, Advertising &amp; <br />
              <span className="text-orange-brand neon-pulse-load">Visual Design Specialist</span>
            </h1>

            {/* Target Location Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-steel-1 border border-line text-xs font-mono text-paper mb-5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span>Based in Dubai, UAE · Open to Corporate Graphic Designer Roles in UAE &amp; GCC</span>
            </div>

            {/* Subtext */}
            <p className="text-paper-dim text-sm md:text-base max-w-xl leading-relaxed mb-6">
              Over 7+ years of experience crafting high-impact brand identities, commercial marketing collateral, outdoor advertising campaigns, vehicle fleet branding, and AI-powered visual assets. Bridging creative vision with flawless print and production execution.
            </p>

            {/* Stats row - Compact & Clean */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 max-w-xl">
              <div className="border border-line/50 bg-steel-1/60 p-3">
                <div className="font-display text-2xl md:text-3xl text-orange-brand neon-glow">7+</div>
                <div className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-0.5">Years Exp.</div>
              </div>
              <div className="border border-line/50 bg-steel-1/60 p-3">
                <div className="font-display text-2xl md:text-3xl text-orange-brand neon-glow">100+</div>
                <div className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-0.5">Brand Projects</div>
              </div>
              <div className="border border-line/50 bg-steel-1/60 p-3">
                <div className="font-display text-2xl md:text-3xl text-orange-brand neon-glow">30%</div>
                <div className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-0.5">Faster Delivery</div>
              </div>
              <div className="border border-line/50 bg-steel-1/60 p-3">
                <div className="font-display text-2xl md:text-3xl text-orange-brand neon-glow">0</div>
                <div className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-0.5">Major Reprints</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href="#work"
                className="bg-orange-brand text-ink px-6 py-3.5 font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:bg-paper hover:text-ink hover:-translate-y-0.5"
              >
                View Graphic Design Work
              </a>
              <a
                href="/Pawan_Kumar_Resume.pdf"
                download
                className="border border-line text-paper px-6 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors hover:border-orange-brand hover:text-orange-brand"
              >
                Download Updated CV
              </a>
              <a
                href="https://wa.me/971582648833"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-orange-brand/60 text-orange-brand px-5 py-3.5 text-xs font-bold uppercase tracking-wider transition-colors hover:bg-orange-brand hover:text-ink flex items-center gap-2"
              >
                <span>💬</span> WhatsApp
              </a>
            </div>

            {/* Hero Quick Meta */}
            <div className="font-mono text-xs text-paper-dim flex flex-wrap gap-x-5 gap-y-1">
              <span>📍 Dubai, UAE</span>
              <span>✉ pawankumard@hotmail.com</span>
              <span>📱 +971 58 264 8833 (UAE)</span>
              <span>📱 +91 93908 90890 (IND)</span>
            </div>
          </div>

          {/* Right Side: Interactive Flagship Showcase */}
          <div className="relative max-w-lg lg:max-w-none mx-auto w-full">
            <CornerFrame className="bg-steel-1 overflow-hidden shadow-2xl">
              <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full overflow-hidden bg-black/60">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={heroShowcase[heroImageIndex].image}
                    src={heroShowcase[heroImageIndex].image}
                    alt={heroShowcase[heroImageIndex].title}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover block"
                  />
                </AnimatePresence>

                {/* Badge Tag */}
                <div className="absolute top-3 right-3 bg-ink/90 border border-line text-orange-brand font-mono text-[9px] font-bold py-1 px-2.5 uppercase tracking-wider backdrop-blur-sm z-10">
                  {heroShowcase[heroImageIndex].tag}
                </div>

                {/* Caption Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-4 z-10">
                  <div className="font-display text-xs sm:text-sm text-paper leading-tight">
                    {heroShowcase[heroImageIndex].title}
                  </div>
                </div>
              </div>
            </CornerFrame>

            {/* Quick Interactive Selector Tabs */}
            <div className="grid grid-cols-4 gap-2 mt-3 select-none">
              {heroShowcase.map((item, idx) => {
                const isSelected = idx === heroImageIndex;
                return (
                  <button
                    key={item.title}
                    onClick={() => setHeroImageIndex(idx)}
                    className={`cursor-pointer border text-left p-1.5 transition-all duration-200 ${
                      isSelected
                        ? 'border-orange-brand bg-steel-1'
                        : 'border-line/60 bg-ink/40 hover:border-orange-brand/50 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <div className="aspect-[16/10] overflow-hidden mb-1 bg-black">
                      <img src={item.image} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="font-mono text-[8px] md:text-[9px] text-paper-dim truncate">
                      {item.label}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <DimensionLine label="Brand Identity, Collateral &amp; Commercial Design Portfolio" />

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
              I am a Senior Graphic Designer passionate about crafting visual identities and marketing collateral that command attention in the real world.
            </p>
            <p className="text-paper-dim text-sm md:text-base leading-relaxed">
              With over 7 years of agency and corporate branding experience, I create comprehensive brand identity packages, corporate marketing collateral (brochures, sales flyers, roll-up banners, trade show displays), outdoor advertising campaigns, and commercial vehicle fleet wraps for prominent UAE businesses.
            </p>
            <p className="text-paper-dim text-sm md:text-base leading-relaxed">
              I combine mastery in Adobe Creative Cloud (Illustrator, Photoshop, InDesign) and CorelDRAW with next-generation generative AI workflows (Google Gemini, Google Flow/Veo, and ComfyUI) to deliver concept exploration, rapid storyboarding, and polished creative assets 30% faster without sacrificing brand integrity.
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
              <span className="text-orange-brand font-semibold">💼 Target Role:</span> Senior Graphic Designer (Corporate/Agency)
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
            <span className="font-display text-2xl text-orange-brand">Brand Identity</span>
            <span className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-2">Logos, Guidelines &amp; Stationery</span>
          </div>
          <div className="border border-line bg-ink/30 p-5 flex flex-col justify-between min-h-[110px]">
            <span className="font-display text-2xl text-orange-brand">Marketing Print</span>
            <span className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-2">Brochures, Banners &amp; POSM</span>
          </div>
          <div className="border border-line bg-ink/30 p-5 flex flex-col justify-between min-h-[110px]">
            <span className="font-display text-2xl text-orange-brand">Fleet Wraps</span>
            <span className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-2">Commercial Livery &amp; RTA Files</span>
          </div>
          <div className="border border-line bg-ink/30 p-5 flex flex-col justify-between min-h-[110px]">
            <span className="font-display text-2xl text-orange-brand">AI Flow</span>
            <span className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-2">Gemini, Veo &amp; ComfyUI Ideation</span>
          </div>
          <div className="border border-line bg-ink/30 p-5 flex flex-col justify-between min-h-[110px]">
            <span className="font-display text-2xl text-orange-brand">Prepress QC</span>
            <span className="font-mono text-[9px] text-paper-dim uppercase tracking-wider mt-2">Zero-Error Print Signoff</span>
          </div>
        </div>
      </section>

      {/* ============ TRUSTED BRANDS & CLIENTS ============ */}
      <section className="border-y border-line py-20 px-[6vw] bg-ink select-none">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-12 flex items-center gap-3">
            <span className="w-8 h-[1px] bg-orange-brand block" />
            <span>Capability Sectors &amp; Trusted Brand Collaborations</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sector 1 */}
            <div className="border border-line bg-steel-1/20 p-8 flex flex-col justify-between min-h-[260px] relative">
              <span className="absolute top-2 right-4 font-mono text-[9px] text-orange-brand/35">// SECTOR.01</span>
              <div>
                <h3 className="font-display text-sm text-orange-brand tracking-wide uppercase mb-3">
                  Commercial Fleets &amp; Mobility
                </h3>
                <p className="text-paper-dim text-xs leading-relaxed mb-6">
                  Complete fleet branding designs, realistic 3D client mockups, UAE RTA-compliant production files, and print-and-cut execution for delivery and corporate vehicle fleets across the UAE.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 border-t border-line/30 pt-5 font-display text-[9px] text-paper-dim uppercase tracking-wider">
                <span className="border border-line px-2 py-0.5 text-paper">Floward</span>
                <span className="border border-line px-2 py-0.5 text-paper">Libra Tech</span>
                <span className="border border-line px-2 py-0.5 text-paper">Bath &amp; Bubbles</span>
                <span className="border border-line px-2 py-0.5 text-paper">Greenly.ae</span>
                <span className="border border-line px-2 py-0.5 text-paper">Golden Tower</span>
                <span className="border border-line px-2 py-0.5 text-paper">Expat Group</span>
              </div>
            </div>

            {/* Sector 2 */}
            <div className="border border-line bg-steel-1/20 p-8 flex flex-col justify-between min-h-[260px] relative">
              <span className="absolute top-2 right-4 font-mono text-[9px] text-orange-brand/35">// SECTOR.02</span>
              <div>
                <h3 className="font-display text-sm text-orange-brand tracking-wide uppercase mb-3">
                  Retail Showrooms &amp; Identity
                </h3>
                <p className="text-paper-dim text-xs leading-relaxed mb-6">
                  Facade identity designs, storefront backlit channel letters, 3D retail architectural graphics, and brand launch identity suites for prominent fashion, electrical, and commercial brands.
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
                  Outdoor Campaigns &amp; Corporate Media
                </h3>
                <p className="text-paper-dim text-xs leading-relaxed mb-6">
                  Large-format outdoor advertising hoardings, trade show exhibition kiosks, and multi-location corporate branding rollouts delivered to tight construction and event schedules.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4 border-t border-line/30 pt-5">
                <img src="/images/p19_indianoil_logo.jpg" alt="IndianOil" className="h-6 w-auto object-contain filter grayscale brightness-[2.2] contrast-[0.9] opacity-75 hover:opacity-100 hover:filter-none transition-all duration-300" />
                <img src="/images/p19_hp_logo.jpg" alt="HPCL" className="h-6 w-auto object-contain filter grayscale brightness-[2.2] contrast-[0.9] opacity-75 hover:opacity-100 hover:filter-none transition-all duration-300" />
                <img src="/images/p19_bpcl_logo.jpg" alt="Bharat Petroleum" className="h-6 w-auto object-contain filter grayscale brightness-[2.2] contrast-[0.9] opacity-75 hover:opacity-100 hover:filter-none transition-all duration-300" />
                <span className="font-display text-[9px] text-paper-dim hover:text-paper tracking-wider uppercase font-semibold">SERVO</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WORK SECTION ============ */}
      <section className="py-24 px-[6vw] max-w-7xl mx-auto" id="work">
        <div className="mb-14 max-w-2xl">
          <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-3 select-none">
            // 01 — SELECTED CREATIVE WORK
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-paper tracking-wide leading-tight mb-4">
            Brand Identity, Collateral &amp; Fleet Graphics
          </h2>
          <p className="text-paper-dim text-sm md:text-base leading-relaxed">
            Explore a curated selection of commercial vehicle wraps, marketing collateral, trade show exhibition graphics, and retail brand designs.
          </p>
        </div>

        {/* Dynamic work filter grid */}
        <WorkGrid />
      </section>

      {/* Divider */}
      <DimensionLine label="Marketing Collateral &amp; Exhibition Design" />

      {/* ============ MARKETING COLLATERAL & EXHIBITION SECTION ============ */}
      <section className="bg-steel-1 py-24 px-[6vw]" id="marketing-collateral">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          <div>
            <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-3 select-none">
              // 02 — MARKETING &amp; EXHIBITION COLLATERAL
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-paper tracking-wide leading-tight mb-4">
              Marketing Collateral &amp; Event Graphics
            </h2>
            <p className="text-paper-dim text-sm md:text-base leading-relaxed mb-6 font-semibold">
              High-impact visual communication for events, sales, and retail.
            </p>
            <p className="text-paper-dim text-sm md:text-base leading-relaxed mb-6">
              From corporate sales brochures and product catalogs to trade show modular display backdrops, roll-up banner suites, and POSM materials, I design collateral that elevates brand perception and drives customer engagement.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs text-paper-dim list-none pl-0">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                Corporate brochures &amp; sales kits
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                Exhibition modular backdrops
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                Trade show roll-up banner suites
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                Double-sided fabric flags &amp; signage
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                Product catalogs &amp; flyers
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                POSM &amp; retail merchandising assets
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                Digital presentation slide decks
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 bg-orange-brand shrink-0" />
                Print-ready CMYK &amp; Pantone files
              </li>
            </ul>
          </div>

          <div className="border border-line p-6 bg-ink flex flex-col gap-4 select-none">
            <h4 className="font-display text-paper text-xs uppercase tracking-wider mb-2 border-b border-line pb-2">
              Concept to Print-Ready Execution
            </h4>
            <p className="font-sans text-xs text-paper-dim leading-relaxed">
              Every marketing asset is engineered for flawless output: precise color separations, font licensing verification, high-resolution raster scaling, and substrate-appropriate bleeds to ensure colors and contrast pop across all mediums.
            </p>
            <div className="bg-steel-1 p-4 border border-line flex flex-col gap-2 font-mono text-[10px] text-paper-dim">
              <span className="text-orange-brand font-semibold">// PRODUCTION CHECKLIST</span>
              <span>- Color Space: Pantone Matching System (PMS) &amp; CMYK</span>
              <span>- Resolution: 300 DPI for offset &middot; Scaled vector for large-format</span>
              <span>- Formats: High-Res Print PDF, TIFF, Vector EPS / AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <DimensionLine label="Commercial Fleet Branding Workflow" />

      {/* ============ VEHICLE GRAPHICS WORKFLOW SECTION ============ */}
      <section className="py-24 px-[6vw] max-w-7xl mx-auto" id="vehicle-workflow">
        <div className="mb-14 max-w-2xl">
          <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-3 select-none">
            // 03 — FLEET BRANDING WORKFLOW
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-paper tracking-wide leading-tight mb-4">
            Commercial Fleet Branding Workflow
          </h2>
          <p className="text-paper-dim text-sm md:text-base leading-relaxed">
            From initial vehicle measurement and client mockups to UAE RTA approvals and print-and-cut execution — ensuring dimensionally accurate mobile brand visibility.
          </p>
        </div>

        {/* Workflow Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative select-none">
          {[
            { step: '01', title: 'Measurement', desc: 'Taking physical measurements of the vehicle to prepare accurate branding artwork.' },
            { step: '02', title: 'Artwork', desc: 'Preparing vehicle branding artwork according to vehicle lines, curves, and brand guidelines.' },
            { step: '03', title: '3D Mockup', desc: 'Creating realistic multi-angle vehicle mockups and presenting to the client for signoff.' },
            { step: '04', title: 'RTA Approval', desc: 'Preparing vehicle branding artwork in accordance with UAE RTA guidelines and approval requirements.' },
            { step: '05', title: 'Print & Cut Files', desc: 'Exporting TIFF files and vector paths with registration marks for plotter cutting.' },
            { step: '06', title: 'RIP Prep', desc: 'Configuring files and sending RIP-ready layouts to the printing queue.' },
            { step: '07', title: 'Epson Printing', desc: 'Supervising Epson Eco-Solvent digital printing equipment for vehicle graphics production.' },
            { step: '08', title: 'Plotter Cutting', desc: 'Preparing vector cut files and operating plotter cutting equipment for decals.' },
            { step: '09', title: 'Finishing', desc: 'Weeding vinyl, trimming edges, and applying gloss or matte UV lamination.' },
            { step: '10', title: 'Application', desc: 'Coordinating graphic installation with practical knowledge of cast and polymeric vinyl media.' }
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
      <DimensionLine label="Prepress &amp; Production Artwork" />

      {/* ============ TECHNICAL ARTWORK SHOWCASE ============ */}
      <section className="bg-steel-1 py-24 px-[6vw]" id="technical">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-2xl">
            <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-3 select-none">
              // 04 — PREPRESS &amp; TECHNICAL ACCURACY
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-paper tracking-wide leading-tight mb-4">
              Prepress &amp; Production Technical Art
            </h2>
            <p className="text-paper-dim text-sm md:text-base leading-relaxed">
              Unlike designers who only create digital visuals, I specialize in translating approved brand layouts into exact production blueprints. By calculating panel splits, sheet counts, and cut paths, I guarantee zero-reprint execution for fabrication and print vendors.
            </p>
          </div>

          {/* Split display component */}
          <TechShowcase />
        </div>
      </section>

      {/* Divider */}
      <DimensionLine label="Professional Experience &amp; Creative Skills" />

      {/* ============ EXPERIENCE TIMELINE ============ */}
      <section className="py-24 px-[6vw] max-w-7xl mx-auto" id="experience">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16 items-start">
          
          {/* Header & Skills */}
          <div>
            <div className="mb-8">
              <div className="font-mono text-xs text-orange-brand tracking-widest uppercase mb-3 select-none">
                // 05 — PROFESSIONAL CAREER
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-paper tracking-wide leading-tight mb-4">
                Creative Experience<br />With Proven Results
              </h2>
            </div>
            
            <p className="text-paper-dim text-sm md:text-base leading-relaxed mb-6">
              Over seven years of agency and corporate design experience taught me to balance creative flair with commercial deadlines and production feasibility.
            </p>
            <p className="text-paper-dim text-sm md:text-base leading-relaxed mb-8">
              Whether designing commercial vehicle fleets in Dubai or rolling out major brand collateral packages, I ensure that every design is visually striking, consistent with brand guidelines, and optimized for physical execution.
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
          Let&apos;s create your next<br />
          <span className="text-orange-brand">brand campaign.</span>
        </h2>

        <p className="text-paper-dim text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-12">
          Based in Dubai, UAE | Looking for a Senior Graphic Designer role with a corporate company, agency, or brand house in the UAE or GCC. Open to discussing brand identity, marketing collateral, and fleet graphics projects.
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
          Brand Identity &middot; Marketing Collateral &middot; Fleet Branding &middot; AI Visual Design
        </div>
      </footer>
    </div>
  );
}
