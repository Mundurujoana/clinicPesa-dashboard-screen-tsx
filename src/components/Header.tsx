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
          paddingTop: '1.25rem',    // pt-5
          paddingBottom: '3rem',     // smaller pb to prevent extra height
          borderBottomLeftRadius: '50% 25%',
          borderBottomRightRadius: '50% 25%',
        }}
      >
        {/* Top Navigation */}
        <div className="flex justify-between items-center px-4">
          <ChevronLeftIcon className="h-5 w-5 text-warmYellow cursor-pointer" />
          <h1 className="font-bold text-lg">clinicPesa</h1>
          <XMarkIcon className="h-5 w-5 text-warmYellow cursor-pointer" />
        </div>

        {/* Greeting */}
        <div className="text-center mt-2 px-4">
          <p className="text-sm">Good Morning, {username}</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
