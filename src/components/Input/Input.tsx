import React from "react";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPressEnter?: () => void;
  highlightColor?: 'red' | 'green';
}

const highlightColorMap = {
  red: 'bg-red-500',
  green: 'bg-green-500',
  none: '',
}

export const Input = ({ placeholder, value, onChange, onPressEnter, highlightColor }: InputProps) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onPressEnter && onPressEnter();
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <input type="text" onChange={ onChange } onKeyDown={ handleKeyPress } placeholder={ placeholder } value={ value }
             className={ `border-2 rounded-md p-2 bg-slate-500 text-white text-xl w-96 focus:outline-none focus:ring-2
              focus:ring-blue-600 focus:border-transparent ${ highlightColorMap[highlightColor ?? 'none'] }` }/>
    </div>
  );
}