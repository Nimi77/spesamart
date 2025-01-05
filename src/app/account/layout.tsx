'use client';

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
      <div className="flex gap-14">
        <SideNavigation />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
