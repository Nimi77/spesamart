import Link from 'next/link';
import UserAccount from './UserAccount';

const AccountBreadcrumb = () => {
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
      <UserAccount />
    </div>
  );
};

export default AccountBreadcrumb;
