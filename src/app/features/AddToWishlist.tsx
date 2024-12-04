import useWishlistStore from "@/stores/wishlistStore";
import { CiHeart } from "react-icons/ci";
import { BsHeartFill } from "react-icons/bs";

interface AddToWishlistProps {
  productName: string;
  imageSrc: string;
  altText: string;
  salesPrice?: string | number;
  originalPrice?: string | number;
  price?: number;
  discount?: number;
}

const AddToWishlist: React.FC<AddToWishlistProps> = ({
  productName,
  imageSrc,
  altText,
  salesPrice,
  originalPrice,
  price,
  discount,
}) => {
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist
  );
  const isInWishlist = useWishlistStore((state) => state.isInWishlist);

  const handleToggleWishlist = () => {
    if (isInWishlist(productName)) {
      removeFromWishlist(productName);
    } else {
      addToWishlist({
        productName,
        imageSrc,
        altText,
        salesPrice,
        originalPrice,
        price,
        discount,
      });
    }
  };

  const loved = isInWishlist(productName);

  return (
    <button
      type="button"
      className={`bg-white p-1 rounded-full shadow-md hover:bg-secondary3 hover:text-white focus:outline-none focus:ring-2 focus:ring-active transition-colors duration-300 ease-in-out ${
        loved ? "bg-red-500 text-white" : ""
      }`}
      aria-label={loved ? "Remove from Wishlist" : "Add to Wishlist"}
      tabIndex={0}
      onClick={handleToggleWishlist}
    >
      {loved ? (
        <BsHeartFill className="w-5 h-5" />
      ) : (
        <CiHeart className="w-5 h-5" />
      )}
    </button>
  );
};

export default AddToWishlist;
