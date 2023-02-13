import Product from "@/types/Product";
import { useState } from "react";
import Button from "./Button";
import Popup from "./Popup";

interface ProductProps {
  product: Product;
}

const Product = ({ product }: ProductProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <li className="rounded-md shadow-md hover:shadow-lg">
      <Button variant="transparent" className="gap-4 p-4 flex items-center flex-col w-full" onClick={() => setIsPopupOpen(true)}>
        <img
          className="w-24 h-24 mx-auto object-cover"
          src={product?.images[0]?.thumbnail}
          alt=""
        />
        <h1 className="text-center mt-4">{product.title}</h1>
        <span>${product.price}</span>
      </Button>
      {isPopupOpen ? <Popup setIsOpen={setIsPopupOpen} product={product} /> : null}
    </li>
  );
};

export default Product;
