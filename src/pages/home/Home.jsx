import { useEffect } from "react";
import {
  Hero,
  TrendingCategories,
  LatestProducts,
  PopularProducts,
  BigDiscount,
} from "../../sections/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsThunk } from "../../features/fetchProducts/fetchProductsSlice";
import { Spinner } from "@material-tailwind/react";

const Home = () => {
  const isLoading = useSelector((state) => state.fetchProducts.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, []);

  

  return (
    <>
      <Hero />
      {isLoading ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner className="h-10 w-10" />
        </div>
      ) : (
        <>
          <TrendingCategories />

          <LatestProducts />

          <PopularProducts />
          <BigDiscount />
        </>
      )}
    </>
  );
};

export default Home;
