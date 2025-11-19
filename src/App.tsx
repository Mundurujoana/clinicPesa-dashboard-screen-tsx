import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import SavingsCard from './components/SavingsCard';
import AccountOptions from './components/AccountOptions';
import InvestOptions from './components/InvestOptions';
import TransactionHistory from './components/TransactionHistory';
import FooterNote from './components/FooterNote';
import TabNavigation from './components/TabNavigation';

const savingsCards = [
  { balance: 50000, frequency: 'Monthly', autoSave: 1000 },
  { balance: 75000, frequency: 'Weekly', autoSave: 500 },
  { balance: 120000, frequency: 'Monthly', autoSave: 2000 },
];

function App() {
  const [activeTab, setActiveTab] = useState('account');
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % savingsCards.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="min-h-screen flex flex-col bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* TOP WHITE SECTION */}
      <div className="bg-white shadow-sm rounded-b-1xl pb-2">
        <Header username="Robert" />

        {/* FADE-ONLY CARD */}
        <div className="relative h-[130px] bg-white pb-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="absolute w-full flex justify-center"
            >
              <SavingsCard {...savingsCards[activeIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* SMALL DOT INDICATORS (DISPLAY ONLY — NOT CLICKABLE) */}
        <div className="flex justify-center gap-2 mt-4">
          {savingsCards.map((_, idx) => (
            <span
              key={idx}
              className={`transition-all duration-300 ${
                activeIndex === idx
                  ? 'w-4 h-1 bg-warmYellow rounded-sm'
                  : 'w-1.5 h-1.5 bg-gray-400 rounded-full'
              }`}
            />
          ))}
        </div>

        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* CONTENT AREA */}
      <div className="p-4 flex-grow">
        {activeTab === 'account' && <AccountOptions />}
        {activeTab === 'invest' && <InvestOptions />}
        {activeTab === 'transactions' && <TransactionHistory />}
      </div>

      <div className="fixed bottom-2 left-0 right-0">
        <FooterNote />
      </div>
    </motion.div>
  );
}

export default App;
