// src/components/OptionCard.tsx
interface OptionCardProps {
  option: {
    id: number;
    icon: string;
    title: string;
  };
}

export default function OptionCard({ option }: OptionCardProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow">
      <div className="text-2xl mb-2">{option.icon}</div>
      <p className="font-semibold text-center">{option.title}</p>
    </div>
  );
}
