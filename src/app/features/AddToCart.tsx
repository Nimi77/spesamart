import Swal from "sweetalert2";
import useCartStore from "@/stores/cartStore";

interface AddToCartProps {
  productName: string;
  productImage: string;
  altText: string;
  salesPrice?: number;
  originalPrice?: number;
  price?: number;
  className?: string;
  buttonText?: string;
  icon?: JSX.Element;
}

const AddToCart: React.FC<AddToCartProps> = ({
  productName,
  productImage,
  altText,
  price,
  salesPrice,
  originalPrice,
  className,
  buttonText = "Add To Cart",
  icon,
}) => {
  const incrementCartCount = useCartStore((state) => state.incrementCartCount);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    // the item object with the necessary properties
    const item = {
      productName,
      productImage,
      altText,
      price,
      salesPrice,
      originalPrice,
    };

    incrementCartCount();
    //  passing the constructed item
    addToCart(item);

    Swal.fire({
      position: "top",
      icon: "success",
      title: `${productName} added to Cart!`,
      showConfirmButton: false,
      timer: 1500,
      toast: true,
    });
  };

  return (
    <button type="button" className={className} onClick={handleAddToCart}>
      {icon}
      {buttonText}
    </button>
  );
};

export default AddToCart;
