import Link from 'next/link';

const SideNavigation = () => {
  return (
    <div className="flex w-1/3 flex-col gap-6">
      <div className="account-route">
        <span className="font-medium">Manage My Account</span>
        <ul className="sn-items ml-2 mt-3 space-y-2 text-sm text-gray-500">
          <li className="active text-orange-red">
            <Link href="/account">My Profile</Link>
          </li>
          <li>
            <Link href="">Address Book</Link>
          </li>
          <li>
            <Link href="">My Payment Options</Link>
          </li>
        </ul>
      </div>
      <div className="profile-route">
        <span className="font-semibold">My Order</span>
        <ul className="sn-items ml-2 mt-3 space-y-2 text-sm text-gray-500">
          <li>
            <Link href="">My Returns</Link>
          </li>
          <li>
            <Link href="">My Cancellations</Link>
          </li>
        </ul>
      </div>
      <span className="font-semibold">
        <Link href="/wishlist">My Wishlist</Link>
      </span>
    </div>
  );
};

export default SideNavigation;
