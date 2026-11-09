import React from 'react';

export const Text = ({ children, size = 'normal', className = '' }) => {
  return (
    <span className={`text text--${size} ${className}`}>
      {children}
    </span>
  );
};
