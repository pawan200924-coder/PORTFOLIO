"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CornerFrame from './CornerFrame';

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
    name: 'Canopy & Fascia',
    isFeatureLayout: true,
    projects: [
      { title: 'Canopy Steel Structure — Pre-Cladding', tag: 'Fabrication', image: '/images/p8_canopy_hero.jpg' },
      { title: 'Illuminated Canopy Fascia', tag: 'Nayara Energy', image: '/images/p4_nayara_canopy.jpg' },
      { title: 'Forecourt Canopy Branding', tag: 'HP', image: '/images/p4_hp_station.jpg' },
      { title: 'Installed Canopy — Site View', tag: 'Fabrication', image: '/images/p8_canopy1.jpg' },
      { title: 'Structural Beam Assembly', tag: 'Fabrication', image: '/images/p8_canopy2.jpg' },
    ],
  },
  {
    id: 't2',
    name: 'Monoliths & Unipoles',
    isFeatureLayout: true,
    projects: [
      { title: 'LED Monolith Signage Range', tag: 'IndianOil / HP', image: '/images/p5_monolith_hero.jpg' },
      { title: 'Unipole — Price Display', tag: 'IndianOil', image: '/images/p5_unipole_iocl.jpg' },
      { title: 'Illuminated Unipole — Night', tag: 'HP', image: '/images/p5_unipole_hp.jpg' },
      { title: 'High Mast Unipole Installation', tag: 'Nayara — Install', image: '/images/p5_unipole_nayara_install.jpg' },
      { title: 'Brand Colour Canopy System', tag: 'IndianOil', image: '/images/p4_iocl_orange.jpg' },
    ],
  },
  {
    id: 't3',
    name: 'Showroom Branding',
    isFeatureLayout: true,
    projects: [
      { title: 'Showroom Fascia & ACP Cladding', tag: 'IBO Wholesale', image: '/images/p9_ibo_fascia.jpg' },
      { title: 'Storefront Signage', tag: 'Raymond', image: '/images/p9_raymond.jpg' },
      { title: 'Gallery Storefront Identity', tag: 'Havells', image: '/images/p9_havells.jpg' },
      { title: 'Retail Fascia Signage', tag: 'Linen Club', image: '/images/p9_linenclub.jpg' },
      { title: 'Showroom Launch Branding', tag: 'Lloyd / Havells', image: '/images/p9_lloyd.jpg' },
    ],
  },
  {
    id: 't4',
    name: 'Traffic Signage',
    isFeatureLayout: false,
    projects: [
      { title: 'Road Safety Signage', tag: 'Civic', image: '/images/p7_traffic1.jpg' },
      { title: 'Directional Road Sign', tag: 'Wayfinding', image: '/images/p7_traffic2.jpg' },
      { title: 'Lane Direction Signage', tag: 'Highway', image: '/images/p7_traffic3.jpg' },
      { title: 'Traffic Rule Panel Set', tag: 'Regulatory', image: '/images/p7_traffic5.jpg' },
      { title: 'School Zone Signage', tag: 'Safety', image: '/images/p7_traffic7.jpg' },
      { title: 'Distance Marker Board', tag: 'Highway', image: '/images/p7_traffic9.jpg' },
    ],
  },
  {
    id: 't5',
    name: 'Exhibition Kiosks',
    isFeatureLayout: true,
    projects: [
      { title: 'Trade Show Exhibition Stand', tag: 'A-One Gold', image: '/images/p11_kiosk_aone.jpg' },
      { title: 'Corporate Expo Kiosk', tag: 'SK Steel', image: '/images/p11_kiosk1.jpg' },
      { title: 'Branded Expo Booth', tag: 'Steel Tech', image: '/images/p11_kiosk2.jpg' },
      { title: 'Modular Exhibition Structure', tag: 'BD', image: '/images/p11_kiosk_bd.jpg' },
      { title: 'Trade Fair Display Unit', tag: 'Expo', image: '/images/p11_kiosk3.jpg' },
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
            className={`grid gap-1 ${
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
                  className={`group relative overflow-hidden bg-steel-1 select-none ${
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-5 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
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
