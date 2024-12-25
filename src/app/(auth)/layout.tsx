import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-auto max-w-[90%] items-center justify-start gap-12 py-14 md:flex mdl:m-0 xl:max-w-6xl">
      {/* left-side image */}
      <div className="relative hidden w-2/3 mdl:block">
        <Image
          src="/shopping-cart.png"
          alt="Shopping cart"
          width={805}
          height={781}
          className="w-[680px] object-contain"
        />
      </div>
      {/* form  */}
      <div className="flex w-full items-center justify-start mdl:w-1/3">
        {children}
      </div>
    </div>
  );
}
