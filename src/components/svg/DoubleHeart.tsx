interface DoubleHeartProps {
  className?: string;
}

const DoubleHeart = ({ className = "" }: DoubleHeartProps) => {
  return (
    <div className={`flex ${className}`}>
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-pink-500"
      >
        <path
          d="M2.5 1.5C4.5 0.5 6.5 1 8 3C9.5 1 11.5 0.5 13.5 1.5C15.5 2.5 16 4.5 16 6.5C16 8.5 15 10 13.5 11.5C12 13 10 14 8 14C6 14 4 13 2.5 11.5C1 10 0 8.5 0 6.5C0 4.5 0.5 2.5 2.5 1.5Z"
          fill="currentColor"
        />
      </svg>
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-green-500 -ml-1"
      >
        <path
          d="M2.5 1.5C4.5 0.5 6.5 1 8 3C9.5 1 11.5 0.5 13.5 1.5C15.5 2.5 16 4.5 16 6.5C16 8.5 15 10 13.5 11.5C12 13 10 14 8 14C6 14 4 13 2.5 11.5C1 10 0 8.5 0 6.5C0 4.5 0.5 2.5 2.5 1.5Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default DoubleHeart;
