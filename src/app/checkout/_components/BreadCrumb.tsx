import Link from 'next/link';

const CheckoutBreadcrumb = ({ current }: { current: string }) => {
  return (
    <div>
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
            <Link href="/" className="text-gray-500 hover:underline">
              Product
            </Link>
          </li>
          <li>
            <span className="text-gray-500">/</span>
          </li>
          <li>
            <Link href="/cart" className="text-gray-500 hover:underline">
              Cart
            </Link>
          </li>
          <li>
            <span className="text-gray-500">/</span>
          </li>
          <li>
            <Link
              href="/checkout"
              className="font-medium text-gray-900 hover:underline"
            >
              {current}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CheckoutBreadcrumb;
