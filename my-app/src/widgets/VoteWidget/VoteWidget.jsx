import React, { useState, useEffect } from 'react';
import { Vote } from '../../entities/Vote/Vote';
import { fetchVoteData } from '../../shared/ui/utils/api/api';
import { Button } from '../../shared/ui/Button/Button';
import { Text } from '../../shared/ui/Text/Text';

export const VoteWidget = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVoteData().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  if (loading) return <Text>Загрузка...</Text>;

  return (
    <div className="widget" style={{ padding: '20px', background: '#f9f9f9', borderRadius: '8px' }}>
      <Vote data={data} />
      <div style={{ marginTop: '15px' }}>
        <Button onClick={() => alert('Голос учтен!')}>Отправить голос</Button>
      </div>
    </div>
  );
};
