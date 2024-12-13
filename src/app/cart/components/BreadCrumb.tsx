const Breadcrumb = ({ current }: { current: string }) => {
  return (
    <div className="m-auto max-w-[90%] xl:max-w-6xl py-14 flex flex-col gap-14">
      {/* breadcrumb */}
      <nav className="text-sm">
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
