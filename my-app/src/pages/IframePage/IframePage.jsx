import React from 'react';
import { Iframe } from '../../shared/ui/Iframe/Iframe';

export const IframePage = () => {
  return (
    <div>
      <h1>Страница с Iframe</h1>
      <Iframe src="https://www.example.com" title="Example" />
    </div>
  );
}
