import React, { useState } from 'react';
import SavingsCard from './SavingsCard';

interface CardData {
  balance: number;
  frequency: string;
  autoSave: number;
}

interface SavingsCarouselProps {
  cards: CardData[];
}

const SavingsCarousel: React.FC<SavingsCarouselProps> = ({ cards }) => {
  const [activeCard, setActiveCard] = useState(0);

  const nextCard = () => setActiveCard((prev) => (prev + 1) % cards.length);
  const prevCard = () => setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className="relative flex flex-col items-center w-full -mt-8">
      {/* Carousel */}
      <div className="relative w-full max-w-xl flex items-center justify-center overflow-hidden">
        <div className="flex transition-transform duration-500"
             style={{ transform: `translateX(-${activeCard * 280}px)` }}>
          {cards.map((card, idx) => (
            <div key={idx} className={`mx-2 ${activeCard === idx ? 'scale-100' : 'scale-90'} transition-transform duration-500`}>
              <SavingsCard
                balance={card.balance}
                frequency={card.frequency}
                autoSave={card.autoSave}
              />
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button onClick={prevCard} className="absolute left-0 text-gray-800 text-3xl font-bold px-2">‹</button>
        <button onClick={nextCard} className="absolute right-0 text-gray-800 text-3xl font-bold px-2">›</button>
      </div>

      {/* Slide indicators */}
      <div className="flex gap-3 mt-4">
        {cards.map((_, idx) => (
          <span key={idx}
            className={`transition-all duration-300 ${activeCard === idx ? 'w-8 h-1 bg-yellow-400 rounded-sm' : 'w-3 h-3 bg-gray-400 rounded-full'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SavingsCarousel;
