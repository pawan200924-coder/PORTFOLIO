import React from 'react';

interface DimensionLineProps {
  label: string;
}

export default function DimensionLine({ label }: DimensionLineProps) {
  return (
    <div className="flex items-center gap-2 w-full mx-auto px-[6vw] text-orange-brand my-12 select-none">
      {/* Left Tick */}
      <div className="w-[1px] h-3.5 bg-orange-brand neon-line shrink-0" />
      
      {/* Left Line */}
      <div className="flex-1 h-[1px] bg-orange-brand neon-line" />
      
      {/* Label */}
      <span className="font-mono text-[10px] md:text-[11px] tracking-widest uppercase whitespace-nowrap px-3 text-orange-brand neon-glow">
        {label}
      </span>
      
      {/* Right Line */}
      <div className="flex-1 h-[1px] bg-orange-brand neon-line" />
      
      {/* Right Tick */}
      <div className="w-[1px] h-3.5 bg-orange-brand neon-line shrink-0" />
    </div>
  );
}
