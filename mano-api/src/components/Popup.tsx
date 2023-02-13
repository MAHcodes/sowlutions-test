import { Close } from "@/icons/Close";
import Product from "@/types/Product";
import { useEffect } from "react";

interface PopupProps {
  product: Product;
  setIsOpen: (isOpen: boolean) => void;
}

const Popup = ({ product, setIsOpen }: PopupProps) => {
  useEffect(() => {
    // disable scroll while popup is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <>
      <div className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 flex items-center flex-col gap-12 -translate-y-1/2 bg-white p-8 pt-10 rounded-md">
        <div className="absolute top-2 right-2">
          <button onClick={() => setIsOpen(false)}>
            <Close />
          </button>
        </div>
        <h1 className="text-center">{product.title}</h1>
        <img
          className="w-full max-w-[10rem] mx-auto object-cover"
          src={product?.images[0]?.thumbnail}
          alt=""
        />
        <div className="grid grid-cols-popup-detials gap-4 font-medium">
          <span>Category:</span>
          <span>{product.categories[0].title}</span>
          <span>
            Price:
          </span>
          <span>
            {`$`}
            {product.price}
          </span>
          <span>Quantity: </span>
          <span>{product.quantity} {product.quantity > 1 ? "pcs" : "pc"}</span>
        </div>
      </div>
      <div
        className="z-40 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default Popup;
