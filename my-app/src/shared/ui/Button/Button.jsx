import React from 'react';

export const Button = ({ children, onClick, className = '' }) => {
  return (
    <button className={`Button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
