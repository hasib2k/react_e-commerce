import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`backdrop-blur-xl bg-black/25 border border-black/30 rounded-lg shadow-xl p-2 transition-all duration-300 hover:shadow-2xl hover:bg-black/30 ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;
