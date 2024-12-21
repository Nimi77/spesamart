import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mdl:m-0 m-auto max-w-[90%] items-center justify-start gap-12 py-14 md:flex xl:max-w-6xl">
      {/* left-side image */}
      <div className="mdl:block relative hidden w-2/3">
        <Image
          src="/shopping-cart.png"
          alt="Shopping cart"
          width={805}
          height={781}
          className="w-[680px] object-contain"
        />
      </div>
      {/* form  */}
      <div className="mdl:w-1/3 flex w-full items-center justify-start">
        {children}
      </div>
    </div>
  );
}
