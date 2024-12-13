import useCartStore from "@/stores/cartStore";
import Swal from "sweetalert2";

interface AddToCartProps {
  productName: string;
  productImage: string;
  altText: string;
  price?: number;
  salesPrice?: number;
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
  className,
  buttonText = "Add To Cart",
  icon,
}) => {
  const incrementCartCount = useCartStore((state) => state.incrementCartCount);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    addToCart({
      productName,
      productImage,
      altText,
      price,
      salesPrice,
      quantity: 1,
    });
    incrementCartCount();

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
