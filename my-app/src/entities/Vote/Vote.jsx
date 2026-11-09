import React, { useState } from 'react';
import { Text } from '../../shared/ui/Text/Text';
import { Slider } from '../../shared/ui/Slider/Slider';

export const Vote = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="vote-entity">
      <Text size="large">{data.question}</Text>
      <Slider items={data.options} />
      
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '10px' }}>
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={(e) => setIsChecked(e.target.checked)} 
        />
        <Text>Подтвердить выбор</Text>
      </label>
    </div>
  );
};
