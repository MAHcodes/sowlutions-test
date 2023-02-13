interface Category {
  title: string;
}

interface Image {
  id: number;
  thumbnail: string;
  large: string;
}

interface Product {
  id: number;
  title: string;
  quantity: number;
  price: number;
  images: Image[];
  categories: Category[];
}

export default Product;
