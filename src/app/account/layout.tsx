import SideNavigation from "./components/AccountSideNavigation";
import AccountHeader from "./components/AccountHeader";

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="m-auto max-w-[90%] xl:max-w-6xl py-14 flex flex-col gap-14">
      <AccountHeader />
      <div className="flex flex-col md:flex-row items-start gap-10">
        <SideNavigation />
        <div className="account-info-details flex-1">{children}</div>
      </div>
    </div>
  );
}
