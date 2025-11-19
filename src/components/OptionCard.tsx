// src/components/OptionCard.tsx

interface OptionCardProps {
  option: {
    id: number;
    icon: React.ElementType | string; // Can be a React component or an image URL
    title: string;
    isImage?: boolean; // Optional flag to indicate if the icon is an image
  };
}

export default function OptionCard({ option }: OptionCardProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow border border-borderGray cursor-pointer">
      {option.isImage ? (
        <img
          src={option.icon as string}
          alt={option.title}
          className="font-bold w-7 h-7 mb-1" // Increased icon size for images
        />
      ) : (
        <option.icon className="w-6 h-6 text-appText mb-1" /> // Default icon for React components
      )}
      <p className="text-[12px] text-center text-grayText">{option.title}</p>
    </div>
  );
}
