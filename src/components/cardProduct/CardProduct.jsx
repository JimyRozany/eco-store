import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import RateStar from "../rate/RateStar";

const CardProduct = () => {
  return (
    <div className="w-[300px]">
      <Card className="w-full font-Poppins cursor-pointer shadow-md ">
        <CardHeader floated={false} className="">
          <img
            className="hover:scale-125 duration-700 cursor-pointer"
            src="https://docs.material-tailwind.com/img/team-3.jpg"
            alt=""
          />
        </CardHeader>
        <CardBody className="text-center">
          {/* rate */}
          <div className="flex justify-center items-center">
            <RateStar rate={3.5} />
          </div>
          {/* ********** end rate ********** */}
          {/* product name */}
          <h1 className="text-2xl font-medium mt-2">iPhone 11</h1>
          {/* ********** end product name ********** */}
          {/* Price */}
          <h1 className="flex justify-center items-center gap-2 font-medium  text-2xl">
            <span className=" text-mainColor font-semibold">$35</span>
            <span className="text-xl line-through decoration-red-300 decoration-2">
              45
            </span>
          </h1>
          {/* ********** end product name ********** */}
        </CardBody>
      </Card>
    </div>
  );
};

export default CardProduct;
