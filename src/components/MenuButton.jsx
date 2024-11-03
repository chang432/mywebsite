import React, { useState } from 'react';

const HoverText = ({ text }) => {
  const [hoverState, setHoverState] = useState(0);

  return (
    <div
      className="relative w-fit"
      onMouseEnter={() => {
        setHoverState(1)
      }}
      onMouseLeave={() => {
        setHoverState(2)
      }}
    >
      {/* Animated Rectangle */}
      <div
        className={`absolute w-[100%] h-[100%] bg-black transform transition-all duration-500 ease-out ${
            hoverState == 0 && '-translate-x-full translate-y-full rotate-[155deg] opacity-0'
        } ${
            hoverState == 1 && 'rotate-[155deg] opacity-100'
        } ${
            hoverState == 2 && 'translate-x-full -translate-y-full rotate-[155deg] opacity-0'
        }`}
        onTransitionEnd={() => {
            if (hoverState == 2) {
                setHoverState(0);
            }
        }}
      />

      {/* Text Content */}
      <span className="relative text-gray font-bold text-lg">{text}</span>
    </div>
  );
};

export default HoverText;
