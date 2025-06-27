'use client';

import React from 'react';

interface ProductsLayoutProps {
  children: React.ReactNode;
}

const ProductsLayout: React.FC<ProductsLayoutProps> = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

export default ProductsLayout;
