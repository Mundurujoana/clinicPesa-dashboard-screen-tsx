// src/components/Header.tsx
import { ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

interface HeaderProps {
  username: string;
}

const Header: React.FC<HeaderProps> = () => {
  const username = "Robert"; // hardcoded for now

  return (
    <div
      className="bg-headerCurve text-white relative px-4 pt-5 pb-12"
      style={{
        clipPath:
  "polygon(0 0, 0 88%, 25% 100%, 50% 93%, 75% 100%, 100% 88%, 100% 0)",
      }}
    >
      {/* Top row: Back and Close */}
      <div className="flex justify-between items-center">
        <ChevronLeftIcon className="h-5 w-5 text-warmYellow cursor-pointer" />
        <h1 className="font-bold text-lg">clinicPesa</h1>
        <XMarkIcon className="h-5 w-5 text-warmYellow cursor-pointer" />
      </div>

      {/* Centered Greeting */}
      <div className="text-center mt-2">
        <p className="text-sm text-white">Good Morning, {username}</p>
      </div>
    </div>
  );
};

export default Header;
