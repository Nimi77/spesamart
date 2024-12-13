import Recommendation from "./Recommendation";
import Wishlist from "./Wishlist";

const WishlistPage = () => {
  return (
    <div className="m-auto max-w-[90%] xl:max-w-6xl py-14 flex flex-col gap-14">
      <Wishlist />
      <div className="recommendation">
        <Recommendation />
      </div>
    </div>
  );
};
export default WishlistPage;
