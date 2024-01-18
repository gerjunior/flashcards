import './CardFlip.css';
import { useState } from 'react';
import { Card } from '../../data/source';

type CardFlipProps = {
  card: Card;
};

export const CardFlip = ({ card }: CardFlipProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="w-96 h-36 m-4 scale-150">
      <div
        className={`card transform transition-transform duration-700 ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}
        onClick={handleClick}
      >
        <div className="front absolute w-full h-full bg-slate-800 rounded shadow-lg flex items-center justify-center p-10 overflow-auto">
          {card.front}
        </div>
        <div className="back absolute w-full h-full bg-slate-800 rounded shadow-lg flex items-center justify-center rotate-y-180">
          {card.back}
        </div>
      </div>
    </div>
  );
};
