import Link from 'next/link';

const AccountBreadcrumb = () => {
  return (
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
            href="/contact"
            className="font-medium text-gray-900 hover:underline"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default AccountBreadcrumb;
