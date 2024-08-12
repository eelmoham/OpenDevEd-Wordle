// src/components/Tile.tsx
import React, { use, useEffect } from 'react';
import { useState } from 'react';

interface TileProps {
  letter: string;
  submet: boolean;
  word: string;
  isCorrect: number;
  position: number;
}

const Tile: React.FC<TileProps> = ({ letter, word, submet, position }) => {
  const [isCorrect, setIsCorrect] = useState(0);
  // on submit is true and the letter is exist in the word in correct position set isCorrect to 1
  // on submit is true and the letter is exist in the word in wrong position set isCorrect to 2
  // 0 when the letter is not exist in the word

  useEffect(() => {
    if (submet) {
      if (word.includes(letter) && word.indexOf(letter) === position) {
        setIsCorrect(1);
      }
      else if (word.includes(letter)) {
        setIsCorrect(2);
      }
    }
  }, [submet]);
  if (submet)
    return (
      <div className='w-12 h-12 bg-gray-300 text-center text-3xl font-bold flex items-center justify-center rounded-lg'>
        {letter}
      </div>
    )
  else
    return (

      isCorrect === 1 ? (
        <div className="w-12 h-12 bg-green-300 text-center text-3xl font-bold flex items-center justify-center rounded-lg">
          {letter}
        </div>
      ) : isCorrect === 2 ? (
        <div className="w-12 h-12 bg-yellow-300 text-center text-3xl font-bold flex items-center justify-center rounded-lg">
          {letter}
        </div>
      ) : (
        <div className="w-12 h-12 bg-gray-300 text-center text-3xl font-bold flex items-center justify-center rounded-lg">
          {letter}
        </div>)

    );
};

export default Tile;



