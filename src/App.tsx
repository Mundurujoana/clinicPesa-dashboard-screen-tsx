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
    <div className="bg-graySoft min-h-screen flex flex-col">
      <Header username="Robert" />

      <SavingsCard balance={50000} frequency="Monthly" autoSave={1000} />

      <div className="p-4">
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
    </div>
  );
}

export default App;
