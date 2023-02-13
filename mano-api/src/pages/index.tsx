import { useSearchParams } from "next/navigation";
import useAxios from "@/hooks/useAxios";
import { useEffect, useState } from "react";
import Paginate from "@/components/Paginate";
import Products from "@/components/Products";
import Loading from "@/components/Loading";
import Error from "@/components/Error";

export default function Home() {
  // get page from url
  const page = useSearchParams().get("page");
  const currentPage = page ? parseInt(page) : 0;

  // fetch products
  const ENDPOINT = `https://api.manoapp.com/api/v1/users/products/whats_new`;
  const { data, error, loading } = useAxios(ENDPOINT);
  const [products, setProducts] = useState([]);

  //pagination settings
  const productsCountPerPage = 10;
  const pagesCount = products?.length / productsCountPerPage || 1;

  const allProducts = data?.data?.items;

  useEffect(() => {
    // filter products based on current page
    const filteredProducts = allProducts?.slice(
      currentPage * productsCountPerPage,
      currentPage * productsCountPerPage + productsCountPerPage
    );
    setProducts(filteredProducts);
  }, [currentPage, allProducts]);

  if (error) return <Error message={error} />;
  if (loading) return <Loading />;

  return (
    <main className="container">
      <div className="font-bold text-lg py-4">
        {products ? <Products products={products} /> : null}
        <Paginate pagesCount={pagesCount} currentPage={currentPage} />
      </div>
    </main>
  );
}
