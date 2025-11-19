// src/components/Header.tsx

import { ChevronLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface HeaderProps {
  username?: string;
}

const Header: React.FC<HeaderProps> = ({ username = 'Robert' }) => {
  return (
    <header className="relative text-white">
      <div
        className="bg-[#004464] w-full overflow-hidden"
        style={{
          paddingTop: '1.25rem',
          paddingBottom: '3rem',
          borderBottomLeftRadius: '50% 25%',
          borderBottomRightRadius: '50% 25%',
        }}
      >
        {/* Top Navigation */}
        <div className="flex justify-between items-center px-4">
          <ChevronLeftIcon className="h-5 w-5 text-warmYellow cursor-pointer" />
          <h1 className="font-bold text-[18px]">clinicPesa</h1>
          <XMarkIcon className="h-5 w-5 text-warmYellow cursor-pointer" />
        </div>

        {/* Greeting */}
        <div className="text-center mt-4 px-4">
          <p className="text-[12px]">Good Morning, {username}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
