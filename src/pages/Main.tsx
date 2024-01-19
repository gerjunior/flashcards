import React, { useState } from 'react';
import { fuzzy } from 'fast-fuzzy';
import { Button } from '../components/Button/Button';
import { CardFlip } from '../components/CardFlip/CardFlip';
import { cards } from '../data/source';
import { Input } from "../components/Input/Input.tsx";
import { getLongestStreak } from "../utils/localStorage.ts";

export const Main = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const [input, setInput] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [streak, setStreak] = useState(0)
  const [longestStreak, _setLongestStreak] = useState(getLongestStreak())

  const setLongestStreak = (streak: number) => {
    _setLongestStreak(streak)
    localStorage.setItem('longestStreak', streak.toString())
  }

  const clearCard = () => {
    setIsCorrect(null)
    setShouldAnimate(false);
    setIsFlipped(false);
    setInput('')
    setTimeout(() => {
      setShouldAnimate(true);
    }, 1);
  }

  const handleClickCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleClickNext = () => {
    clearCard()
    if (currentCard < cards.length - 1) {
      setCurrentCard(currentCard + 1);
    } else {
      setCurrentCard(0);
    }
  };

  const handleClickPrev = () => {
    clearCard();
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
    } else {
      setCurrentCard(cards.length - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  const handlePressEnter = () => {
    if (input === '' || isFlipped || isCorrect || isCorrect === false) {
      return
    }

    setIsFlipped(true)

    const fuzzyMatch = fuzzy(input, cards[currentCard].back, { ignoreCase: true, normalizeWhitespace: true });
    if (fuzzyMatch > 0.8) {
      setIsCorrect(true)
      setStreak(streak + 1)
      if (streak + 1 > longestStreak) {
        setLongestStreak(streak + 1)
      }
      return
    }

    setIsCorrect(false)
    setStreak(0)
  }

  const handleClickPickRandom = () => {
    clearCard()
    const randomCard = Math.floor(Math.random() * cards.length)
    setCurrentCard(randomCard)
  }

  const inputHighlightColor = isCorrect === true ? 'green' : isCorrect === false ? 'red' : undefined
  const streakColor = streak === 0 ? 'red' : 'green'

  return (
    <div className="min-h-full flex flex-col">
      <h1 className="text-4xl font-bold mb-20 mt-8">AWS Certified Developer Associate (DVA-C02) Flashcards</h1>
      <div>
        <p className="text-2xl font-bold mb-4">What is this?</p>
        <p className="text-xl mb-20">
          This is a flashcard app for the AWS Certified Developer Associate (DVA-C02) exam. It is built with React and
          Tailwind CSS.
        </p>
      </div>
      <div className="flex justify-center">
        <p className="text-2xl font-bold mb-4 mr-20">
          Current streak: <span
          className={ `text-2xl font-bold text-${ streakColor }-500 ` }>{ streak }</span>
        </p>
        <p className="text-2xl font-bold mb-4">
          Longest streak: <span
          className={ `text-2xl font-bold text-green-500 ` }>{ longestStreak }</span>
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <CardFlip card={ cards[currentCard] } shouldAnimate={ shouldAnimate } handleClick={ handleClickCard }
                  isFlipped={ isFlipped }/>
        <div className="mt-16">
          <Input onChange={ handleInputChange } value={ input } placeholder="Type your answer"
                 onPressEnter={ handlePressEnter } highlightColor={ inputHighlightColor }/>
        </div>
        <div className="flex flex-row justify-center items-center mt-4 space-x-4">
          <Button text="prev" onClick={ handleClickPrev } color="bg-blue-500"/>
          <Button text="next" onClick={ handleClickNext } color="bg-blue-500"/>
        </div>
        <div className="mt-3">
          <Button text="pick random" onClick={ handleClickPickRandom }/>
        </div>
      </div>
    </div>
  );
};
