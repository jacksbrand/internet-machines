import { useState, useEffect } from 'react';

import fetchRandomFlipText from '../../pages/api/fetchRandomText';

import styles from '../../styles/flip-bar.module.css';

const FlipBar = () => {
  const [flip1, setFlip1] = useState('S E C U R E');
  const [flip2, setFlip2] = useState('S C A L E A B L E');
  const [flip3, setFlip3] = useState('I N T E G R A T E D');

  useEffect(() => {
    firstFlip();
    secondFlip();
    thirdFlip();
  }, []);

  const firstFlip = () => {
    setTimeout(() => {
      fetchRandomFlipText(setFlip1);
      setTimeout(firstFlip, Math.random() * 10000);
    }, Math.random() * 10000);
  };

  const secondFlip = () => {
    setTimeout(() => {
      fetchRandomFlipText(setFlip2);
      setTimeout(secondFlip, Math.random() * 10000);
    }, Math.random() * 10000);
  };

  const thirdFlip = () => {
    setTimeout(() => {
      fetchRandomFlipText(setFlip3);
      setTimeout(thirdFlip, Math.random() * 10000);
    }, Math.random() * 10000);
  };

  return (
    <div className={styles.container}>
      <p>{flip1}</p>
      <p>{flip2}</p>
      <p>{flip3}</p>
    </div>
  );
};

export default FlipBar;
