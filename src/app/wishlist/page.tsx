import Recommendation from './_components/Recommendation';
import Wishlist from './_components/Wishlist';

const WishlistPage = () => {
  return (
    <div className="m-auto flex max-w-[90%] flex-col gap-14 py-14 xl:max-w-6xl">
      <Wishlist />
      <Recommendation />
    </div>
  );
};
export default WishlistPage;
