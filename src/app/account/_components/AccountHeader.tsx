'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';

const AccountHeader = () => {
  const { data: session } = useSession();
  const userName = session?.user?.name || 'User';

  return (
    <div className="flex items-center justify-between">
      <nav>
        <ul className="flex space-x-2">
          <li>
            <Link href="/" className="text-gray-500 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <span className="text-gray-500">/</span>
          </li>
          <li>
            <Link
              href="/account"
              className="font-medium text-gray-800 hover:underline"
            >
              My Account
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <h2 className="font-semibold">
          Welcome!{' '}
          <span className="text-orangeRed">
            {userName ? userName : 'Loading...'}
          </span>
        </h2>
      </div>
    </div>
  );
};

export default AccountHeader;
