import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

// icons
import { MdArrowRightAlt } from "react-icons/md";

// redux
import { useDispatch, useSelector } from "react-redux";

import { showHideDialog } from "../../features/search/searchSlice";

const SearchResult = () => {
  const products = useSelector((state) => state.search.result);
  const searchKey = useSelector((state) => state.search.searchKey);
    const dispatch = useDispatch()

  const handleSearch = ()=>{

    dispatch(showHideDialog())
    
  }

  const cardProductJSX = products.map((item) => {
    return (
      <Card
        key={item.id}
        className=" w-72 md:w-[35rem] lg:w-full max-w-[48rem] flex-col md:flex-row border my-4 "
      >
        <CardHeader
          shadow={true}
          floated={false}
          className=" mt-1 md:m-0  self-center md:self-auto w-36 md:w-44 lg:w-2/6 shrink-0 rounded-r-none md:p-2 "
        >
          <img
            src={item.image}
            alt={""}
            className="h-full w-full object-contain hover:scale-90 ease-in-out duration-500"
          />
        </CardHeader>
        <CardBody>
          <Typography
            color="blue-gray"
            className=" mb-2 font-Poppins font-semibold text-lg md:text-2xl"
          >
            {item.title}
          </Typography>
          <p className="mb-4 font-normal font-Poppins line-clamp-2">
            {item.description}
          </p>
          <Typography className="mb-2 font-normal text-xl text-mainColor font-Poppins">
            <span className="text-black">$ </span>
            {item.price}
          </Typography>
          <Link to={`/show-product/${item.id}`} className="inline-block">
            <Button variant="text" className="flex items-center gap-2">
              <span className="normal-case">Show More</span>
              <MdArrowRightAlt className="text-xl " />
            </Button>
          </Link>
        </CardBody>
      </Card>
    );
  });

  return (
    <div className="w-screen">
      {products.length === 0 ? (
        <div className="h-40 lg:h-96">
          <h1 className=" text-xl  lg:text-4xl font-medium font-Poppins text-center mt-20 lg:mt-40 text-mainDarkColor">
            <span>Opps! "</span> {searchKey} <span>" not found.</span>
          </h1>
          <div className="text-center mt-2">
          <Button onClick={handleSearch} className="normal-case bg-mainColor rounded-full">Search</Button>

          </div>
        </div>
      ) : (
        <div className="border  flex flex-col items-center ">
          {/* cards */}
          {cardProductJSX}
          {/* ******* end cards ****** */}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
