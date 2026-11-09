import React from 'react';
import { VoteWidget } from '../../widgets/VoteWidget/VoteWidget';
import { Text } from '../../shared/ui/Text/Text';

export const HomePage = () => {
  return (
    <div>
      <Text size="title">Главная страница</Text>
      <VoteWidget />
    </div>
  );
};
