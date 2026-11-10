"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  tag: string;
  image: string;
}

interface Category {
  id: string;
  name: string;
  isFeatureLayout: boolean;
  projects: Project[];
}

const CATEGORIES: Category[] = [
  {
    id: 't1',
    name: 'Brand Identity & Fleet Graphics',
    isFeatureLayout: true,
    projects: [
      {
        title: 'Floral Line-Art Corporate Fleet Wrap',
        tag: 'Floward · Suzuki Ertiga',
        image: '/images/vehicle-branding/floward_suzuki_ertiga.jpg',
      },
      {
        title: 'Full Commercial Van Wrap & Electrical Branding',
        tag: 'Libra Tech Services LLC · Peugeot Expert',
        image: '/images/vehicle-branding/libra_tech_peugeot_expert.jpg',
      },
      {
        title: 'Pet Grooming Fleet Livery & Custom Mascot Art',
        tag: 'Bath & Bubbles · Peugeot Boxer',
        image: '/images/vehicle-branding/bath_and_bubbles_peugeot_boxer.jpg',
      },
      {
        title: 'Flower Delivery Commercial Fleet Wrap',
        tag: 'Floward · Renault Dokker',
        image: '/images/vehicle-branding/floward_renault_dokker.jpg',
      },
      {
        title: 'Landscaping & Pool Services Vehicle Decals',
        tag: 'Greenly.ae · Toyota Previa',
        image: '/images/vehicle-branding/greenly_toyota_previa.jpg',
      },
      {
        title: 'Corporate Metal Works Livery & Half-Wrap',
        tag: 'Golden Tower Metal Industries · Toyota Yaris',
        image: '/images/vehicle-branding/golden_tower_toyota_yaris.jpg',
      },
      {
        title: 'Minimalist EV Home Maintenance Fleet Branding',
        tag: 'Expat Group · Tesla Model Y',
        image: '/images/vehicle-branding/expat_group_tesla_model_y.jpg',
      },
    ],
  },
  {
    id: 't2',
    name: 'Marketing Collateral & Exhibition Graphics',
    isFeatureLayout: true,
    projects: [
      { title: 'Modular Display Backdrop & Graphics', tag: 'Trade Show · BD', image: '/images/p11_kiosk_bd.jpg' },
      { title: 'Large-Format Exhibition Banner', tag: 'A-One Gold · Event Branding', image: '/images/p11_kiosk_aone.jpg' },
      { title: 'Double-Sided Fabric Flag Print Suite', tag: 'SK Steel · Collateral', image: '/images/p11_kiosk1.jpg' },
      { title: 'Trade Show Roll-Up Banner Set', tag: 'Expo Campaign Collateral', image: '/images/p11_kiosk3.jpg' },
      { title: 'Retail Print Graphics & POSM', tag: 'Steel Tech · Merchandising', image: '/images/p11_kiosk2.jpg' },
    ],
  },
  {
    id: 't3',
    name: 'Commercial Storefronts & Signage',
    isFeatureLayout: true,
    projects: [
      { title: 'Showroom Fascia & Facade Identity', tag: 'IBO Wholesale · Retail Facade', image: '/images/p9_ibo_fascia.jpg' },
      { title: 'Storefront Backlit Channel Letter Signage', tag: 'Raymond · Storefront', image: '/images/p9_raymond.jpg' },
      { title: 'Gallery Storefront Brand Identity', tag: 'Havells · Retail Gallery', image: '/images/p9_havells.jpg' },
      { title: 'Retail Storefront Fascia Signage', tag: 'Linen Club · Retail Rollout', image: '/images/p9_linenclub.jpg' },
      { title: 'Showroom Launch Branding & Graphics', tag: 'Lloyd / Havells · Brand Launch', image: '/images/p9_lloyd.jpg' },
    ],
  },
  {
    id: 't4',
    name: 'Outdoor Advertising & Brand Systems',
    isFeatureLayout: true,
    projects: [
      { title: 'Illuminated Retail Pylon & Price Display', tag: 'HP · High Mast Signage', image: '/images/p5_unipole_hp.jpg' },
      { title: 'LED Monolith Corporate Signage Range', tag: 'IndianOil / HP · SOP Specs', image: '/images/p5_monolith_hero.jpg' },
      { title: 'Illuminated Architectural Canopy Fascia', tag: 'Nayara Energy · 50+ Sites', image: '/images/p4_nayara_canopy.jpg' },
      { title: 'High Mast Corporate Signage Installation', tag: 'Nayara · Outdoor Media', image: '/images/p5_unipole_nayara_install.jpg' },
      { title: 'Civic Wayfinding & Directional Signage System', tag: 'Civic Infrastructure', image: '/images/p7_traffic1.jpg' },
    ],
  },
  {
    id: 't5',
    name: 'Prepress & Production Artwork',
    isFeatureLayout: false,
    projects: [
      { title: 'SWAGAT Fascia ACM Division Sheet', tag: 'Prepress / Bleed / Panel Splits', image: '/images/tech_swagat_fascia_layout.jpg' },
      { title: 'IOCL Signage Bay 3D Setup', tag: '3D Spatial Modeling & Verification', image: '/images/tech_iocl_bay_3d.jpg' },
      { title: 'Mobile Stop Sign Fabrication Layout', tag: 'Production-ready Vector Drawings', image: '/images/tech_stop_sign_3d.jpg' },
    ],
  },
];

export default function WorkGrid() {
  const [activeTab, setActiveTab] = useState<string>('t1');

  const currentCategory = CATEGORIES.find((cat) => cat.id === activeTab) || CATEGORIES[0];

  return (
    <div className="w-full">
      {/* Tab bar header */}
      <div className="flex border-b border-line mb-10 overflow-x-auto scrollbar-hide flex-nowrap md:flex-wrap">
        {CATEGORIES.map((cat) => {
          const isActive = cat.id === activeTab;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`relative font-mono text-xs md:text-sm tracking-wider uppercase py-4 px-5 md:px-6 shrink-0 transition-colors duration-200 cursor-pointer ${
                isActive ? 'text-orange-brand' : 'text-paper-dim hover:text-paper'
              }`}
            >
              {cat.name}
              {isActive && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-orange-brand"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Grid panels */}
      <div className="relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className={`grid gap-2 ${
              currentCategory.isFeatureLayout
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]'
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
            }`}
          >
            {currentCategory.projects.map((proj, idx) => {
              const isFirstInFeature = currentCategory.isFeatureLayout && idx === 0;

              return (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className={`group relative overflow-hidden bg-steel-1 select-none border border-line/40 hover:border-orange-brand/60 transition-colors duration-200 ${
                    isFirstInFeature
                      ? 'row-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2 aspect-[16/10] md:aspect-[16/9] lg:aspect-auto'
                      : 'aspect-[4/3]'
                  }`}
                >
                  {/* Image with scaling effect on hover */}
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 saturate-[1.05]"
                  />

                  {/* Corner marks for the main features */}
                  {isFirstInFeature && (
                    <div className="absolute inset-0 pointer-events-none z-20">
                      <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-orange-brand" />
                      <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-orange-brand" />
                    </div>
                  )}

                  {/* Gradient Overlay & Details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-5 md:p-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="font-mono text-[10px] md:text-xs text-orange-brand tracking-widest uppercase mb-1">
                      {proj.tag}
                    </span>
                    <h3 className="font-display text-sm md:text-base text-paper leading-tight">
                      {proj.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
