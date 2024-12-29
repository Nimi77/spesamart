import Link from 'next/link';

const AboutBreadcrumb = ({ current }: { current: string }) => {
  return (
    <div className="breadcrumb">
      <nav aria-label="Breadcrumb navigation">
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
            <Link href="/about" className="text-gray-900 hover:underline">
              {current}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AboutBreadcrumb;
