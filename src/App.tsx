import { useState } from 'react';
import { motion } from 'framer-motion';
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
  const [activeTab, setActiveTab] = useState<string>('account');
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.div
      className="min-h-screen flex flex-col bg-gray-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Top white section */}
      <div className="bg-white shadow-sm rounded-b-1xl pb-2">
        <Header username="Robert" />
        <SavingsCard {...savingsCards[activeIndex]} />

        <div className="flex justify-center gap-2 mt-2">
          {savingsCards.map((_, idx) => (
            <span
              key={idx}
              className={`transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? 'w-4 h-1 bg-warmYellow rounded-sm'
                  : 'w-1.5 h-1.5 bg-gray-400 rounded-full'
              }`}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>

        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <div className="p-4 flex-grow">
        {activeTab === 'account' && <AccountOptions />}
        {activeTab === 'invest' && <InvestOptions />}
        {activeTab === 'transactions' && <TransactionHistory />}
      </div>

      <div className="mt-auto">
        <FooterNote />
      </div>
    </motion.div>
  );
}

export default App;
