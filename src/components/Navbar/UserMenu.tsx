import { accountMenuItems } from './MenuItems';
import { useRouter } from 'next/navigation';
import { LuUser } from 'react-icons/lu';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

const UserMenu = () => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/auth/login');
  };

  return (
    <div className="dropdown group relative p-1">
      <button
        type="button"
        className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary3"
        aria-label="User menu"
        aria-haspopup="true"
      >
        <LuUser size={20} color="white" aria-hidden="true" />
      </button>

      {/* dropdown menu */}
      <div
        className="absolute right-1 z-50 mt-4 hidden w-max rounded-md bg-[rgba(0,0,0,0.5)] backdrop-blur-md group-hover:block"
        role="menu"
        aria-orientation="vertical"
      >
        <ul className="flex flex-col items-start justify-center space-y-4 p-4">
          {accountMenuItems.map((item) => (
            <li key={item.title} role="none">
              {item.title === 'Logout' ? (
                <button
                  onClick={handleLogout}
                  className="flex items-start justify-center gap-4 text-white hover:text-gray-300 focus:border-none focus:outline-none"
                  role="menuitem"
                  tabIndex={0}
                >
                  {item.icon}
                  {item.title}
                </button>
              ) : (
                <Link
                  href={item.path}
                  className="flex items-start justify-center gap-4 text-white hover:text-gray-300 focus:outline-none"
                  role="menuitem"
                  tabIndex={0}
                >
                  {item.icon}
                  {item.title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
