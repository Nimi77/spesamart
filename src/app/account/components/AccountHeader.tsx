import Link from "next/link";

const AccountHeader = () => {
  return (
    <div className="heading text-sm flex items-center justify-between">
      {/* breadcrumb */}
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
            <Link href="/account" className="text-gray-900 hover:underline">
              My Account
            </Link>
          </li>
        </ul>
      </nav>
      <h2>
        Welcome! <span className="text-orange-red">user</span>
      </h2>
    </div>
  );
};

export default AccountHeader;
