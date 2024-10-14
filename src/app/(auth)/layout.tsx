import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="auth-container flex xl:max-w-6xl max-w-[90%] py-14">
        {/* Left-side Image Section */}
        <div className="flex-1 mx-auto relative">
          <Image
            src="/shopping-cart.png"
            alt="Shopping cart"
            layout="fill"
          />
        </div>
        {/* Form Section */}
        <div className="flex justify-center items-center ml-36">{children}</div>
      </div>
    </div>
  );
}
