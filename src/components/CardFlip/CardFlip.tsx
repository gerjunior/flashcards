import './CardFlip.css';
import { Card } from '../../data/source';

const colorMap: Record<Card['category'], string> = {
  database: 'bg-blue-800',
  development: 'bg-green-800',
  security: 'bg-yellow-800',
};

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
        <div className={`front absolute w-full h-full ${colorMap[card.category]} rounded shadow-lg flex items-center justify-evenly p-10`}>
          {card.front}
          {card.image && (
            <div className="ml-8">
              <img src={card.image} alt={card.front} className="scale-150" />
            </div>
            )
          }
        </div>
        <div
          className={`back absolute w-full h-full ${
            colorMap[card.category]
          } rounded shadow-lg flex items-center justify-center rotate-y-180`}
        >
          {card.back}
        </div>
      </div>
    </div>
  );
};
