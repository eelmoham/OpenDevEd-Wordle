'use client';
import React, { useState } from 'react';
import Board from '@/app/components/Board'
import Keyboard from '@/app/components/Keyboard';
import { WORDS } from '@/utils/words';

const Home: React.FC = () => {
  const [word] = useState(WORDS[Math.floor(Math.random() * WORDS.length)]);
  const [boardState, setBoardState] = useState<string[][]>(
    Array.from({ length: 6 }, () => Array(5).fill(''))
  );
  const [rowIndex, setRowIndex] = useState(0);
  const [colIndex, setColIndex] = useState(0);
  const [nextRow, setNextRow] = useState(true);

  const handleKeyPress = (key: string) => {
    console.log(colIndex, rowIndex, key);

    if (key === 'DEL') {
      if (colIndex > 0) {
        const newBoardState = boardState.map((row, i) =>
          i === rowIndex ? row.map((letter, j) => (j === colIndex - 1 ? '' : letter)) : row
        );
        setBoardState(newBoardState);
        setColIndex(colIndex - 1);
      }
      return;
    }
    else if (key === 'ENTER') {
      setNextRow(true);
      const guess = boardState[rowIndex - 1].join('');
      if (guess === word.toUpperCase()) {
        alert('You win!');
      } else {
        alert('You lose!');
      }
      return;
    }
    else if (!nextRow) return;
    if (colIndex < 5) {
      const newBoardState = boardState.map((row, i) =>
        i === rowIndex ? row.map((letter, j) => (j === colIndex ? key : letter)) : row
      );
      setBoardState(newBoardState);
      setColIndex(colIndex + 1);
    }

    if (colIndex + 1 === 5) {
      setRowIndex(rowIndex + 1);
      setColIndex(0);
      setNextRow(false);
    }
  };
  console.log('<<<<>>>>>',word);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Board boardState={boardState} word={word} submet={nextRow} currentRow={rowIndex - 1} />
      <Keyboard onKeyPress={handleKeyPress} />
    </div>
  );
};

export default Home;