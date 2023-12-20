import { Card, CardHeader, CardBody } from "@material-tailwind/react";
// images

import iphone from "../../images/iphone.png";
import miniSpeakers from "../../images/mini-speakers.png";
import macbook from "../../images/macbook.png";
import headphone from "../../images/headphone.png";
import airpods from "../../images/airpods.png";
import ipad from "../../images/ipad.png";

const TrendingCategories = () => {
  const categories = [
    {
      id: 47,
      title: "iPhone",
      image: iphone,
    },
    {
      id: 21,
      title: "Mini speakers",
      image: miniSpeakers,
    },
    {
      id: 59,
      title: "Tablets",
      image: ipad,
    },
    {
      id: 96,
      title: "Headphones",
      image: headphone,
    },
    {
      id: 87,
      title: "laptop",
      image: macbook,
    },
    {
      id: 33,
      title: "Accessories",
      image: airpods,
    },
  ];
  // all categories jsx card
  const categoriesJSX = categories.map(({ title, image, id }) => (
    <Card key={id} className=" lg:w-40 w-32 shadow-lg ">
      <CardHeader floated={false} className="shadow-none  w-28 h-28 sm:w-36 sm:h-36 m-0 self-center">
        <img
          className="hover:scale-125 transition duration-[900ms] cursor-pointer w-full h-full"
          src={image}
          alt=""
        />
      </CardHeader>
      <CardBody className="flex justify-center items-center p-0 mt-2 ">
        <h1 className="mb-2 text-mainDarkColor text-md sm:text-xl font-Poppins font-medium hover:text-mainColor duration-300 cursor-pointer">
          {title}
        </h1>
      </CardBody>
    </Card>
  ));
  return (
    // trending section
    <div className="font-Poppins my-6">
      <h1 className=" text-lg sm:text-2xl font-semibold text-mainDarkColor px-2 md:px-10">
        Trending Categories
      </h1>
      <div className="flex justify-center mt-5 w-screen">
        <div className="grid gap-1 lg:gap-5 grid-cols-2 grid-rows-3 lg:grid-cols-6 lg:grid-rows-1 md:grid-cols-3 md:grid-rows-2 flex-wrap">
          {categoriesJSX}
        </div>
      </div>
    </div>
  );
};

export default TrendingCategories;
