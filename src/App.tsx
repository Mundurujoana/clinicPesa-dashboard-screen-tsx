import { useState } from 'react';
import Header from './components/Header';
import SavingsCard from './components/SavingsCard';
import AccountOptions from './components/AccountOptions';
import InvestOptions from './components/InvestOptions';
import TransactionHistory from './components/TransactionHistory';
import FooterNote from './components/FooterNote';
import TabNavigation from './components/TabNavigation';

function App() {
  const [activeTab, setActiveTab] = useState<string>('account');

  return (
    <div className="min-h-screen flex flex-col bg-gray-100"> 
      {/* 🔥 First 3 sections wrapped in white card */}
      <div className="bg-white shadow-sm rounded-b-1xl pb-2">
        <Header username="Robert" />

        <SavingsCard balance={50000} frequency="Monthly" autoSave={1000} />

          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* 🔥 Content area (not white) */}
      <div className="p-4 flex-grow">
        {activeTab === 'account' && <AccountOptions />}
        {activeTab === 'invest' && <InvestOptions />}
        {activeTab === 'transactions' && <TransactionHistory />}
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <FooterNote />
      </div>
    </div>
  );
}

export default App;
