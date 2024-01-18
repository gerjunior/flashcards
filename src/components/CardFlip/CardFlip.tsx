import './CardFlip.css';
import { Card } from '../../data/source';

type CardFlipProps = {
  card: Card;
  shouldAnimate?: boolean;
  isFlipped?: boolean;
  handleClick?: () => void;
};

export const CardFlip = ({ card, shouldAnimate, handleClick, isFlipped }: CardFlipProps) => {
  return (
    <div className="w-96 h-56 m-4 scale-150">
      <div className={`card ${shouldAnimate ? 'duration-700 ease-in-out' : ''} ${isFlipped ? 'rotate-y-180' : ''}`} onClick={handleClick}>
        <div className="front absolute w-full h-full bg-slate-800 rounded shadow-lg flex items-center justify-center p-10">
          {card.front}
        </div>
        <div className="back absolute w-full h-full bg-slate-800 rounded shadow-lg flex items-center justify-center rotate-y-180">
          {card.back}
        </div>
      </div>
    </div>
  );
};
