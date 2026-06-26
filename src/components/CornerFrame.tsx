import React from 'react';

interface CornerFrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function CornerFrame({ children, className = "" }: CornerFrameProps) {
  return (
    <div className={`relative border border-line ${className}`}>
      {/* Top Left Corner Mark */}
      <span className="absolute top-[-1px] left-[-1px] w-4 h-4 border-t-2 border-l-2 border-orange-brand z-10 pointer-events-none" />
      
      {/* Bottom Right Corner Mark */}
      <span className="absolute bottom-[-1px] right-[-1px] w-4 h-4 border-b-2 border-r-2 border-orange-brand z-10 pointer-events-none" />
      
      {children}
    </div>
  );
}
