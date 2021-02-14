import { Dispatch, SetStateAction } from 'react';

import flipText from '../../data/flipText_DATA';

const fetchRandomFlipText = (i: Dispatch<SetStateAction<string>>) => {
  const textToShow = flipText[Math.floor(Math.random() * flipText.length)];
  i(textToShow);
};

export default fetchRandomFlipText;
