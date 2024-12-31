import { showNotification } from '@/utilis/showNotification';
import useCartStore from '@/hooks/cartStore';

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
  buttonText = 'Add To Cart',
  icon,
}) => {
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

    showNotification({
      icon: 'success',
      title: `${productName} added to Cart!`,
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
