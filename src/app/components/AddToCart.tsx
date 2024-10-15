import useCartStore from "@/stores/cartStore";

interface AddToCartProps {
  productName: string;
  productImage: string;
  price: number | string;
}

const AddToCart: React.FC<AddToCartProps> = ({
  productName,
  productImage,
  price,
}) => {
  const incrementCartCount = useCartStore((state) => state.incrementCartCount);
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <button
      className="absolute w-full bottom-0 left-0 right-0 h-8 bg-black text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      onClick={() => {
        incrementCartCount();
        addToCart(productName, productImage, price);
        alert(`${productName} added to Cart!`);
      }}
    >
      Add to Cart
    </button>
  );
};

export default AddToCart;