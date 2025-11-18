// src/components/TabNavigation.tsx
interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    { id: "account", label: "ACCOUNT OPTIONS" },
    { id: "invest", label: "INVEST" },
    { id: "transactions", label: "TRANSACTIONS" },
  ];

  return (
    <div className="flex flex-col items-center mb-6">
      {/* Tab indicators - smaller size */}
      <div className="flex gap-3 mb-2 items-center">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <span
              key={tab.id}
              className={`
                transition-all duration-300
                ${isActive 
                  ? "w-[12px] h-[4px] bg-warmYellow rounded-sm"  // active yellow rectangle
                  : "w-[4.8px] h-[4.8px] bg-gray-400 rounded-full" // inactive gray circles
                }
              `}
            ></span>
          );
        })}
      </div>

      {/* Tabs */}
<div className="flex gap-4 border-b border-borderGray w-full justify-center">
  {tabs.map((tab) => (
    <button
      key={tab.id}
      onClick={() => onTabChange(tab.id)}
      className={`
        pb-2 px-2 text-xs sm:text-sm font-bold transition-colors relative text-center
        whitespace-nowrap
        ${activeTab === tab.id ? "text-headerCurve" : "text-gray-400 hover:text-gray-700"}
      `}
    >
      {tab.label}
      {activeTab === tab.id && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-warmYellow rounded-full"></div>
      )}
    </button>
  ))}
</div>

    </div>
  );
}
