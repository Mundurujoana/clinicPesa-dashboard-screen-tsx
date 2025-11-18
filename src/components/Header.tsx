// src/components/Header/Header.tsx
import { ChevronLeftIcon, XMarkIcon } from '@heroicons/react/24/solid';

interface HeaderProps {
  username?: string; // optional prop for flexibility
}

const Header: React.FC<HeaderProps> = ({ username = 'Robert' }) => {
  return (
    <header
      className="relative px-4 pt-5 pb-12 text-white"
      style={{
        backgroundColor: '#004464',
        clipPath: 'polygon(0 0, 0 88%, 25% 100%, 50% 93%, 75% 100%, 100% 88%, 100% 0)',
      }}
    >
      {/* Top Navigation */}
      <div className="flex justify-between items-center">
        <ChevronLeftIcon className="h-5 w-5 text-warmYellow cursor-pointer" />
        <h1 className="font-bold text-lg">clinicPesa</h1>
        <XMarkIcon className="h-5 w-5 text-warmYellow cursor-pointer" />
      </div>

      {/* Greeting */}
      <div className="text-center mt-2">
        <p className="text-sm">Good Morning, {username}</p>
      </div>
    </header>
  );
};

export default Header;
