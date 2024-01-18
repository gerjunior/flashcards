import { useState } from 'react';
import { Button } from '../components/Button/Button';
import { CardFlip } from '../components/CardFlip/CardFlip';
import { cards } from '../data/source';

export const Main = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleClickNext = () => {
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      setCurrentCard(0);
    }
  };

  const handleClickPrev = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    } else {
      setCurrentCard(cards.length - 1);
    }
  };

  return (
    <div className="min-h-full flex flex-col">
      <h1 className="text-4xl font-bold mb-48 mt-8">AWS Certified Developer Associate (DVA-C02) Flashcards</h1>
      <div className="flex flex-col justify-center items-center">
        <CardFlip card={cards[currentCard]} />
        <div className="flex flex-row justify-center items-center pt-10 space-x-4">
          <Button text="prev" onClick={handleClickPrev} />
          <Button text="next" onClick={handleClickNext} />
        </div>
      </div>
    </div>
  );
};
