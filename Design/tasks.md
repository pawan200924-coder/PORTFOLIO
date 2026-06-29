# Design Verification Checklist - Pawan Kumar Portfolio

## Environment & Asset Integration
- [x] Copy static assets (images, PDF resume) from `portfolio` into the `public/` folder.
- [x] Install `framer-motion` and `@heroicons/react` (or any other required dependencies).
- [x] Configure custom tailwind styles (colors: ink, steel-1, steel-2, orange, paper, paper-dim, line).
- [x] Import and set up Archivo Black, JetBrains Mono, and Inter fonts.

## Signature Design Elements
- [x] Dimension Line Divider (`DimensionLine.tsx`) - Custom SVG/CSS replication of technical drafting line.
- [x] Corner Framing Marks (`CornerFrame.tsx`) - Fabrication crop marks on visual items to represent layout tolerances.
- [x] Dark, high-end industrial engineering/blueprint visual theme.

## Layout & Components
- [x] Navigation Header
  - [x] Logo block: "P K / Pawan Kumar D / Graphic Designer".
  - [x] Sticky/fixed navigation with backdrop blur.
  - [x] Download Resume (PDF) action.
- [x] Hero Section
  - [x] Typography: "Designing Brands. Delivering Impact."
  - [x] Background engineering grid lines pattern.
  - [x] 8+ Years Experience, 50+ Retail Sites, 4 Major Oil Brands stats.
  - [x] UAE immediate availability call-out (Graphic, Signage, Production Designer, Branding Executive).
- [x] Selected Work Filter Grid (`WorkGrid.tsx`)
  - [x] Interactive tab bar (5 categories).
  - [x] Tab switching with Framer Motion transition animation (no layout shifts).
  - [x] Hover card overlays showing category Tag and Project Title.
- [x] Technical Drawing Showcase (`TechShowcase.tsx`)
  - [x] Split-screen view linking SWAGAT IOCL layout to 3D renders.
  - [x] Specifications grid (Meinhardt/IOCL spec, Pantone separation, 3mm ACM/SS specifications).
  - [x] Custom designer capability credentials (SOP Compliance, Color Separation, Vehicle Wrap, Handoff).
- [x] Experience Timeline (`ExperienceTimeline.tsx`)
  - [x] Senior Graphic Designer at Ambujam LLC (Oct 2018 - Present).
  - [x] Freelance Web Designer & Digital Marketing (Feb 2016 - Oct 2018).
  - [x] Floor Sales In-Charge at Mahalakshmi Airtel Franchise (Aug 2009 - Jan 2016).
- [x] Contact Node & Footer
  - [x] Available Immediately status & location (Abu Dhabi, UAE).
  - [x] Connectivity: Email, Phone, LinkedIn.
  - [x] Modern blueprint-style footer with "Concept · Fabrication · Site Installation" tag.

## Quality & Optimization
- [x] Production build compile testing (`npm run build`).
- [x] Layout responsiveness verification across desktop and mobile.
- [x] Smooth interactive transitions verification (tab switching, scroll animations).

## Deployment & Version Control
- [x] Download and extract portable MinGit environment (due to local Git missing).
- [x] Initialize Git repository locally and configure user attributes.
- [x] Stage and commit all project files (`Initial commit`).
