interface IntertwinedHeartsProps {
  className?: string;
}

const IntertwinedHearts = ({ className = "" }: IntertwinedHeartsProps) => {
  return (
    <div className={`flex items-center ${className}`}>
      {/* Pink Heart */}
      <svg
        width="32"
        height="28"
        viewBox="0 0 32 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-pink-500 relative z-10"
      >
        <path
          d="M5 3C9 1 13 2 16 6C19 2 23 1 27 3C31 5 32 9 32 13C32 17 31 21 27 25C23 29 19 30 16 30C13 30 9 29 5 25C1 21 0 17 0 13C0 9 1 5 5 3Z"
          fill="currentColor"
        />
      </svg>
      {/* Green Heart - slightly overlapping */}
      <svg
        width="32"
        height="28"
        viewBox="0 0 32 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-green-500 -ml-4 relative z-0"
      >
        <path
          d="M5 3C9 1 13 2 16 6C19 2 23 1 27 3C31 5 32 9 32 13C32 17 31 21 27 25C23 29 19 30 16 30C13 30 9 29 5 25C1 21 0 17 0 13C0 9 1 5 5 3Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default IntertwinedHearts;
