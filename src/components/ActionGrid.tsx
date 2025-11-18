// src/components/ActionGrid.tsx
interface ActionGridProps {
  actions: { name: string; icon?: React.ReactNode }[];
}

const ActionGrid: React.FC<ActionGridProps> = ({ actions }) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {actions.map(action => (
        <div key={action.name} className="bg-white rounded-2xl shadow p-4 flex flex-col items-center">
          <div className="bg-tealPrimary/20 rounded-full p-4 mb-2">
            {action.icon || <span className="text-tealPrimary font-bold">💊</span>}
          </div>
          <p className="text-sm font-semibold text-gray-700 text-center">{action.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ActionGrid;
