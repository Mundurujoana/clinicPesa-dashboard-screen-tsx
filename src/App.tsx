import { useState } from "react";
import Header from "./components/Header";
import SavingsCard from "./components/SavingsCard";
import AccountOptions from "./components/AccountOptions";
import InvestOptions from "./components/InvestOptions";
import TransactionHistory from "./components/TransactionHistory";
import FooterNote from "./components/FooterNote";
import TabNavigation from "./components/TabNavigation";

function App() {
  const [activeTab, setActiveTab] = useState<string>("account");

  return (
    <div className="bg-graySoft min-h-screen">
   <Header username="Robert" />
      <SavingsCard balance={50000} frequency="Monthly" autoSave={1000} />
      
      {/* Tab navigation */}
      <div className="p-4">
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      {/* Conditional rendering */}
      <div className="p-4">
        {activeTab === "account" && <AccountOptions />}
        {activeTab === "invest" && <InvestOptions />}
        {activeTab === "transactions" && <TransactionHistory />}
      </div>

      <FooterNote />
    </div>
  );
}

export default App;
