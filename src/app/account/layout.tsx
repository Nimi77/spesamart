import SideNavigation from './components/AccountSideNavigation';
import AccountBreadcrumb from './components/BreadCrumb';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-auto flex max-w-[90%] flex-col gap-14 py-14 xl:max-w-6xl">
      <AccountBreadcrumb />
      <div className="flex items-start gap-14">
        <SideNavigation />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
