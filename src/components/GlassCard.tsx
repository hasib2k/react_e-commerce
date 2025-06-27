import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', onClick }) => {
  return (
    <div 
      className={`glass p-6 transition-all duration-300 hover:shadow-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default GlassCard;
