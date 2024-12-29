import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NotFoundPage() {
  const router = useRouter();

  const goToHome = () => {
    router.push('/home');
  };

  return (
    <div className="m-auto flex max-w-[90%] flex-col gap-14 py-14 xl:max-w-6xl">
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
                404 Error
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-medium">404 Not Found</h1>
        <p className="pb-8 pt-2">
          Your visited page is not found. You may go back to home page.
        </p>
        <button
          onClick={goToHome}
          className="mx-auto rounded border-none bg-secondary3 px-6 py-2.5 text-custom font-semibold text-white transition-all duration-300 ease-in-out hover:bg-active focus:outline-none"
        >
          Back to home page
        </button>
      </div>
    </div>
  );
}
