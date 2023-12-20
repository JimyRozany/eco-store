import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import RateStar from "../rate/RateStar";

const CardProduct = ({ name, price, image, desc, rate, discount = null }) => {
  return (
    // <div className="w-[300px]">
    //   <Card className=" w-32 h-56 md:w-48 p-2 lg:w-60 border-2 border-red-700 font-Poppins cursor-pointer shadow-md shadow-[rgba(0,0,0,0.3)] ">
    //     <CardHeader
    //       floated={false}
    //       className="shadow-none w-full flex justify-center items-start"
    //     >
    //       <div className=" border-2 border-red-400 ">
    //         <img
    //           className="hover:scale-125 duration-700 cursor-pointer"
    //           src={image}
    //           alt=""
    //         />
    //       </div>
    //     </CardHeader>
    //     <CardBody className="text-center m-0 p-0">
    //       {/* rate */}
    //       <div className="flex justify-center items-center">
    //         <RateStar rate={3.5} />
    //       </div>
    //       {/* ********** end rate ********** */}
    //       {/* product name */}
    //       <h1 className=" text-lg md:text-xl lg:text-2xl font-medium mt-2 ">
    //         {name}
    //       </h1>
    //       {/* ********** end product name ********** */}
    //       {/* Price */}
    //       <h1 className="flex justify-center items-center gap-2 font-medium text-md md:text-xl  lg:text-2xl">
    //         <span className=" text-mainColor font-semibold">${price}</span>
    //         <span className="text-sm md:text-lg lg:text-xl line-through decoration-red-300 decoration-2">
    //           45
    //         </span>
    //       </h1>
    //       {/* ********** end product name ********** */}
    //     </CardBody>
    //   </Card>
    // </div>
    <>
      {/* card  */}
      <div className=" w-40 h-64  md:w-56 md:h-80 p-1 md:p-2 flex flex-col rounded-md shadow-lg ">
        {/* card image  */}
        <div className="flex justify-center w-36 h-36 md:w-46 md:h-46 rounded-md overflow-hidden self-center ">
          <img
            src={image}
            alt=""
            className="w-full h-full hover:scale-125 duration-300 cursor-pointer "
          />
        </div>
        {/* ------ card image ------  */}
        {/* card content */}
        <div className=" mt-2">
          {/* rate */}
          <div className="flex justify-center items-center text-md md:text-lg py-2">
            <RateStar rate={rate} />
          </div>
          {/* ------ rate ------ */}
          <h1 className=" text-md md:text-lg font-medium truncate">{name}</h1>
          <p className=" line-clamp-2 text-sm w-48 mb-2">{desc}</p>
          <p className="text-md md:text-lg font-medium text-center text-mainColor">
            ${price}
            {discount ? (
              <span className="text-lg md:text-xl line-through text-mainDarkColor decoration-mainColor px-2 font-medium">
                ${discount}
              </span>
            ) : (
              <></>
            )}
          </p>
        </div>
        {/* ------ card content ------ */}
      </div>
      {/* ------- card ------ */}
    </>
  );
};

export default CardProduct;
