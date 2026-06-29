import React from 'react';
import CornerFrame from './CornerFrame';

const SPECS = [
  { k: 'Design Standard', v: 'IOCL Brand SOP Compliance' },
  { k: 'Colour Accuracy', v: 'Pantone-Matched, CMYK Separation' },
  { k: 'Materials Specified', v: '3mm ACM, SS Tube, Retro-Reflective Vinyl' },
  { k: 'Output Format', v: 'Production-Ready ACM Panel Arrangements' },
];

const CERTS = [
  'CLIENT SOP DESIGN COMPLIANCE',
  'LARGE-FORMAT COLOR SEPARATION',
  'VEHICLE WRAP & SIGNAGE SPECS',
  'FABRICATION-READY DESIGN HANDOFF',
];

export default function TechShowcase() {
  return (
    <div className="w-full">
      {/* Visual Split Screen */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 mb-12">
        {/* Left Side: Main Technical Layout (SWAGAT IOCL) */}
        <div className="flex flex-col">
          <div className="font-mono text-xs text-orange-brand tracking-widest mb-2 uppercase">
            // DWG.01 — SWAGAT FASCIA SPECIFICATION SHEET
          </div>
          <CornerFrame className="bg-white p-4 h-full flex items-center justify-center">
            <img
              src="/images/tech_swagat_fascia_layout.jpg"
              alt="SWAGAT IndianOil fascia technical layout drawing"
              className="w-full h-auto object-contain block max-h-[500px]"
            />
          </CornerFrame>
        </div>

        {/* Right Side: Stacked 3D Renders */}
        <div className="flex flex-col gap-6 justify-between">
          {/* Render 1 */}
          <div className="flex flex-col">
            <div className="font-mono text-xs text-orange-brand tracking-widest mb-2 uppercase">
              // DWG.02 — 3D RETAIL MODELING
            </div>
            <CornerFrame className="bg-ink p-4 flex flex-col gap-3">
              <div className="bg-white p-2 flex items-center justify-center">
                <img
                  src="/images/tech_iocl_bay_3d.jpg"
                  alt="IOCL bay signage 3D render"
                  className="w-full h-auto object-contain max-h-[160px]"
                />
              </div>
              <div className="font-mono text-[11px] text-paper-dim flex justify-between">
                <span>IOCL-AA-CS-STD-266C</span>
                <span className="text-orange-brand font-semibold">BAY SIGNAGE</span>
              </div>
            </CornerFrame>
          </div>

          {/* Render 2 */}
          <div className="flex flex-col">
            <div className="font-mono text-xs text-orange-brand tracking-widest mb-2 uppercase">
              // DWG.03 — MOBILITY FABRICATION RENDER
            </div>
            <CornerFrame className="bg-ink p-4 flex flex-col gap-3">
              <div className="bg-white p-2 flex items-center justify-center">
                <img
                  src="/images/tech_stop_sign_3d.jpg"
                  alt="Stop fuelling in progress sign 3D render"
                  className="w-full h-auto object-contain max-h-[160px]"
                />
              </div>
              <div className="font-mono text-[11px] text-paper-dim flex justify-between">
                <span>MOBILE STOP SIGN</span>
                <span className="text-orange-brand font-semibold">SHEET 09/10</span>
              </div>
            </CornerFrame>
          </div>
        </div>
      </div>

      {/* Specifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {SPECS.map((spec) => (
          <div key={spec.k} className="border-l-2 border-orange-brand pl-4 flex flex-col justify-center">
            <span className="font-mono text-[10px] md:text-xs text-paper-dim uppercase tracking-wider">
              {spec.k}
            </span>
            <span className="font-display text-sm md:text-base text-paper mt-1">
              {spec.v}
            </span>
          </div>
        ))}
      </div>

      {/* Workshop Certifications badges */}
      <div className="flex flex-wrap gap-3 mt-6">
        {CERTS.map((cert) => (
          <div
            key={cert}
            className="border border-orange-brand text-orange-brand font-mono text-[11px] tracking-wide py-2.5 px-4.5 select-none"
          >
            {cert}
          </div>
        ))}
      </div>
    </div>
  );
}
