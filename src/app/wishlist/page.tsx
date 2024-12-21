import Recommendation from './components/Recommendation';
import Wishlist from './components/Wishlist';

const WishlistPage = () => {
  return (
    <div className="m-auto flex max-w-[90%] flex-col gap-14 py-14 xl:max-w-6xl">
      <Wishlist />
      <div className="recommendation">
        <Recommendation />
      </div>
    </div>
  );
};
export default WishlistPage;
