import React, { useState } from 'react';
import { Button } from '../Button/Button';
import { Text } from '../Text/Text';

export const Slider = ({ items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  if (items.length === 0) return null;

  return (
    <div className="slider" style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <Text>Виртуальный элемент: {currentIndex + 1} из {items.length}</Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <Button onClick={prevSlide}>Назад</Button>
        <div>{items[currentIndex]}</div>
        <Button onClick={nextSlide}>Вперед</Button>
      </div>
    </div>
  );
};
