// src/components/Board.tsx
import React, { use, useEffect, useState } from 'react';
import Tile from './Tile';

interface BoardProps {
  boardState: string[][];
  word : string;
  submet: boolean;
  currentRow: number;
}

const Board: React.FC<BoardProps> = ({ boardState, word , submet, currentRow}) => {
  const [isCorrect, setIsCorrect] = useState(0);
  useEffect(() => {
    if(submet && currentRow >= 0){
      if (boardState[currentRow].join('') === word.toUpperCase()) {
        console.log('You win!');
        setIsCorrect(1);
      }
    }
  }, [submet]);
  return (
    <div className="grid grid-rows-6 gap-2">
      {boardState.map((row, i) => (
        <div key={i} className="grid grid-cols-5 gap-2">
          {row.map((letter, j) => (
            <Tile key={j} letter={letter} submet={submet} word={word} isCorrect={isCorrect} position={j}  />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
