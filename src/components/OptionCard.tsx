// src/components/OptionCard.tsx
interface Option {
  id: number;
  icon: string; // emoji or icon string
  title: string;
  description: string;
}

interface OptionCardProps {
  option: Option;
}

const OptionCard: React.FC<OptionCardProps> = ({ option }) => {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center text-center">
      <div className="bg-headerCurve/20 rounded-full p-4 mb-2 text-2xl">
        {option.icon}
      </div>
      <h3 className="font-semibold text-gray-800">{option.title}</h3>
      <p className="text-xs text-gray-500">{option.description}</p>
    </div>
  );
};

export default OptionCard;
