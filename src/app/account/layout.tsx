import SideNavigation from './_components/AccountSideNavigation';
import AccountHeader from './_components/AccountHeader';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-auto flex max-w-[90%] flex-col gap-14 py-14 xl:max-w-6xl">
      <AccountHeader />
      <div className="flex justify-between gap-6">
        <SideNavigation />
        <div className="max-w-4xl flex-1">{children}</div>
      </div>
    </div>
  );
}
