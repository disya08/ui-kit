import React from 'react';

export const Iframe = ({ src, title, height = '300px' }) => {
  return (
    <iframe
      src={src}
      title={title}
      style={{ width: '100%', height, border: 'none' }}
      allowFullScreen
    />
  );
};