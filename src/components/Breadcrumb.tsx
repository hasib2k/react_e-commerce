'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center space-x-1 text-sm font-museo mb-6">
      <Link 
        href="/" 
        className="flex items-center text-gray-400 hover:text-primary transition-colors duration-300"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-4 h-4 text-gray-400" />
          {item.href ? (
            <Link 
              href={item.href}
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-primary font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
