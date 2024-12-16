import Link from "next/link";

const Breadcrumb = ({ current }: { current: string }) => {
  return (
    <div>
      {/* breadcrumb */}
      <nav className="text-sm">
        <ul className="flex space-x-2">
          <li>
            <Link href="/account" className="text-gray-500 hover:underline">
              Account
            </Link>
          </li>
          <li>
            <span className="text-gray-500">/</span>
          </li>
          <li>
            <Link href="/account" className="text-gray-500 hover:underline">
              My Account
            </Link>
          </li>
          <li>
            <span className="text-gray-500">/</span>
          </li>
          <li>
            <Link href="/" className="text-gray-500 hover:underline">
              Product
            </Link>
          </li>
          <li>
            <span className="text-gray-500">/</span>
          </li>
          <li>
            <Link href="/cart" className="text-gray-500 hover:underline">
              View Cart
            </Link>
          </li>
          <li>
            <span className="text-gray-500">/</span>
          </li>
          <li>
            <Link href="/checkout" className="text-gray-900 hover:underline">
              {current}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
