import { useState } from 'react';
import { Button } from '../components/Button/Button';
import { CardFlip } from '../components/CardFlip/CardFlip';
import { cards } from '../data/source';

export const Main = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClickCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleClickNext = () => {
    setShouldAnimate(false);
    setIsFlipped(false);
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      setCurrentCard(0);
    }
    setTimeout(() => {
      setShouldAnimate(true);
    }, 1);
  };

  const handleClickPrev = () => {
    setShouldAnimate(false);
    setIsFlipped(false);
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    } else {
      setCurrentCard(cards.length - 1);
    }
    setTimeout(() => {
      setShouldAnimate(true);
    }, 1);
  };

  return (
    <div className="min-h-full flex flex-col">
      <h1 className="text-4xl font-bold mb-20 mt-8">AWS Certified Developer Associate (DVA-C02) Flashcards</h1>
      <div>
        <p className="text-2xl font-bold mb-4">What is this?</p>
        <p className="text-xl mb-20">
          This is a flashcard app for the AWS Certified Developer Associate (DVA-C02) exam. It is built with React and Tailwind CSS.
        </p>
      </div>
      <div>
        <p className="text-2xl font-bold mb-4">
          {currentCard + 1} of {cards.length}
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <CardFlip card={cards[currentCard]} shouldAnimate={shouldAnimate} handleClick={handleClickCard} isFlipped={isFlipped} />
        <div className="flex flex-row justify-center items-center mt-20 space-x-4">
          <Button text="prev" onClick={handleClickPrev} />
          <Button text="next" onClick={handleClickNext} />
        </div>
      </div>
    </div>
  );
};