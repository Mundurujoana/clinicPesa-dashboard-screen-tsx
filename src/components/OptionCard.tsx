interface OptionCardProps {
  option: {
    id: number;
    icon: React.ElementType | string;
    title: string;
    isImage?: boolean;
  };
}

export default function OptionCard({ option }: OptionCardProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow border border-borderGray cursor-pointer">
      {option.isImage ? (
        <img src={option.icon as string} alt={option.title} className=" font-bold w-7 h-7 mb-1" /> // increased size
      ) : (
        <option.icon className="w-6 h-6 text-appText mb-1" />
      )}
      <p className="text-[12px] text-center text-grayText ">{option.title}</p>
    </div>
  );
}
