interface OptionCardProps {
  option: {
    id: number;
    icon: React.ElementType;
    title: string;
  };
}

export default function OptionCard({ option }: OptionCardProps) {
  const Icon = option.icon;

  return (
    <div className="flex flex-col items-center p-3 bg-white rounded-xl shadow border border-borderGray cursor-pointer">
      <Icon className="w-6 h-6 text-appText mb-2" />
      <p className="text-[12px] text-center text-grayText">
        {option.title}
      </p>
    </div>
  );
}
