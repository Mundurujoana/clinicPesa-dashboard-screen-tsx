interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    { id: 'account', label: 'ACCOUNT OPTIONS' },
    { id: 'invest', label: 'INVEST' },
    { id: 'transactions', label: 'TRANSACTIONS' },
  ];

  return (
    <div className="flex flex-col items-center mt-2 w-full">
      <div className="flex gap-4 w-full justify-center relative">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              pb-2 px-2 text-xs sm:text-sm font-bold transition-colors relative text-center
              whitespace-nowrap
              ${activeTab === tab.id ? 'text-appText' : 'text-tabgrayText hover:text-appText'}
            `}
          >
            {tab.label}

            {/* Smooth underline */}
            <div
              className={`
                absolute bottom-0 left-0 right-0 h-1 bg-warmYellow 
                rounded-tl-full rounded-tr-full
                transition-all duration-300 ease-in-out
                ${activeTab === tab.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}
                origin-left
              `}
            ></div>
          </button>
        ))}
      </div>
    </div>
  );
}
