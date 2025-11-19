import { useState } from 'react';

interface CarouselIndicatorsProps {
  total: number;
  activeIndex: number;
  onClick?: (index: number) => void; // optional, allow clicking indicators to change card
}

export const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({
  total,
  activeIndex,
  onClick,
}) => {
  return (
    <div className="flex justify-center gap-2 mt-2">
      {Array.from({ length: total }).map((_, idx) => (
        <span
          key={idx}
          onClick={() => onClick && onClick(idx)}
          className={`transition-all duration-300 cursor-pointer ${
            activeIndex === idx
              ? 'w-8 h-1 bg-warmYellow rounded-sm' // active indicator
              : 'w-3 h-3 bg-gray-400 rounded-full' // inactive
          }`}
        />
      ))}
    </div>
  );
};
