import { useEffect, useState, useRef } from 'react';
import { accountMenuItems } from './MenuItems';
import { LuUser } from 'react-icons/lu';
import Link from 'next/link';

const UserMenu = () => {
  const [openUserDropdown, setOpenUserDropdown] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenUserDropdown(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenUserDropdown(false);
        setShowLogoutModal(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  const handleLogout = () => {
    console.log('User logged out');
    setShowLogoutModal(false);
  };

  return (
    <div className="dropdown relative p-1" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpenUserDropdown(!openUserDropdown)}
        className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary3"
        aria-label="User menu"
        aria-expanded={openUserDropdown}
        aria-haspopup="true"
      >
        <LuUser size={20} color="white" aria-hidden="true" />
      </button>
      {openUserDropdown && (
        <div
          className="absolute right-1 z-50 mt-4 w-max rounded-md bg-[rgba(0,0,0,0.5)] backdrop-blur-md"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
        >
          <ul className="flex flex-col items-start justify-center space-y-4 p-4">
            {accountMenuItems.map((item) => (
              <li key={item.title} role="none">
                {item.title === 'Logout' ? (
                  <button
                    onClick={() => setShowLogoutModal(true)}
                    className="flex items-start justify-center gap-4 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    role="menuitem"
                    tabIndex={0}
                  >
                    {item.icon}
                    {item.title}
                  </button>
                ) : (
                  <Link
                    href={item.path}
                    className="flex items-start justify-center gap-4 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
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
      )}

      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="rounded-md bg-white p-6 shadow-lg">
            <p className="mb-4 text-black">Are you sure you want to log out?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="rounded bg-gray-200 px-4 py-2 text-black hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
