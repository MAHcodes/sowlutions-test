import Product from "./Product";
import ProductType from "@/types/Product";

interface ProductsProp {
  products: ProductType[];
}

const Products = ({ products }: ProductsProp) => (
  <ul className="grid grid-cols-users gap-4">
    {products?.map((product: ProductType) => (
      <Product key={product.id} product={product} />
    ))}
  </ul>
);

export default Products;
