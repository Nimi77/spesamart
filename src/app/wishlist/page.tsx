import Wishlist from "./Wishlist";

const WishlistPage = () => {
  return (
    <div className="m-auto max-w-[90%] xl:max-w-6xl py-14 flex items-center justify-between">
      <Wishlist />
      <div className="recommendation">
        <div className="flex items-center justify-between">
          <div className="heading flex items-center justify-start">
            <span className="w-5 h-10 bg-secondary3 rounded-md" />
            <h3 className="text-sm font-semibold pl-5">Just For You</h3>
          </div>
          <button
            className="bg-transparent font-semibold text-custom px-6 py-2 rounded-md border hover:bg-active focus:outline-none transition-colors ease-in-out duration-500 
              focus:ring-2 focus:ring-offset-2"
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};
export default WishlistPage;
