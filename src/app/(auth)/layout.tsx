import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-auto max-w-[90%] xl:max-w-6xl md:flex items-center justify-start gap-12 py-14 mdl:m-0">
      {/* left-side image */}
      <div className="relative hidden mdl:block w-2/3">
        <Image
          src="/shopping-cart.png"
          alt="Shopping cart"
          width={805}
          height={781}
          className="object-contain w-[680px]"
        />
      </div>
      {/* form  */}
      <div className="flex justify-start items-center w-full mdl:w-1/3">
        {children}
      </div>
    </div>
  );
}
