const Breadcrumb = ({ current }: { current: string }) => {
  return (
    <div className="breadcrumb">
      {/* breadcrumb */}
      <nav aria-label="Breadcrumb navigation" className="text-sm">
        <ul className="flex space-x-2">
          <li>
            <a href="/" className="text-gray-500 hover:underline">
              Home
            </a>
          </li>
          <li>
            <span className="text-gray-500">/</span>
          </li>
          <li>
            <a href="/" className="text-gray-900 hover:underline">
              {current}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Breadcrumb;
