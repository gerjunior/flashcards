type ButtonProps = {
  text: string;
  color?: string;
  onClick: () => void;
};

export const Button = ({ text, onClick, color }: ButtonProps) => {
  return (
    <button className={`${color} hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`} onClick={onClick}>
      {text}
    </button>
  );
};
