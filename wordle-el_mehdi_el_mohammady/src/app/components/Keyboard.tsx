import React from 'react';

const Keyboard: React.FC<{ onKeyPress: (key: string) => void }> = ({ onKeyPress }) => {
  const topRow = 'QWERTYUIOP'.split('');
  const middleRow = 'ASDFGHJKL'.split('');
  const bottomRow = 'ZXCVBNM'.split('');

  return (
    <div className="flex flex-col items-center mt-4 space-y-2">
      <div className="flex space-x-2">
        {topRow.map((key) => (
          <button
            key={key}
            onClick={() => onKeyPress(key)}
            className="bg-gray-300 text-black py-3 px-4 rounded-md hover:bg-gray-400 font-bold"
          >
            {key}
          </button>
        ))}
      </div>
      <div className="flex space-x-2">
        {middleRow.map((key) => (
          <button
            key={key}
            onClick={() => onKeyPress(key)}
            className="bg-gray-300 text-black py-3 px-4 rounded-md hover:bg-gray-400 font-bold"
          >
            {key}
          </button>
        ))}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onKeyPress('DEL')}
          className="bg-red-400 text-white py-3 px-6 rounded-md hover:bg-red-500 font-bold"
        >
          DEL
        </button>
        {bottomRow.map((key) => (
          <button
            key={key}
            onClick={() => onKeyPress(key)}
            className="bg-gray-300 text-black py-3 px-4 rounded-md hover:bg-gray-400 font-bold"
          >
            {key}
          </button>
        ))}
        <button
          onClick={() => onKeyPress('ENTER')}
          className="bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 font-bold"
        >
          ENTER
        </button>
      </div>
    </div>
  );
};

export default Keyboard;
