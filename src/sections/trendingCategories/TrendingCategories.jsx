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
      title: "iPhone",
      image: iphone,
    },
    {
      title: "Mini speakers",
      image: miniSpeakers,
    },
    {
      title: "Tablets",
      image: ipad,
    },
    {
      title: "Headphones",
      image: headphone,
    },
    {
      title: "laptop",
      image: macbook,
    },
    {
      title: "Accessories",
      image: airpods,
    },
  ];
  // all categories jsx card 
  const categoriesJSX = categories.map(({ title, image }) => (
    <Card className="w-96 sm:w-40  shadow-none">
      <CardHeader floated={false} className="shadow-none">
        <img
          className="hover:scale-125 transition duration-[900ms] cursor-pointer"
          src={image}
          alt=""
        />
      </CardHeader>
      <CardBody className="text-center">
        <h1 className="mb-2 text-mainDarkColor text-xl font-Poppins font-medium hover:text-mainColor duration-300 cursor-pointer">
          {title}
        </h1>
      </CardBody>
    </Card>
  ));
  return (
    // trending section
    <div className="font-Poppins">
      <h1 className="text-2xl font-semibold text-mainDarkColor px-10">
        Trending Categories
      </h1>
      <div className="flex justify-center mt-5">
        <div className="grid gap-10 grid-cols-1 grid-rows-6 lg:grid-cols-6 lg:grid-rows-1 md:grid-cols-3 md:grid-rows-2 sm:grid-cols-2 sm:grid-rows-3 flex-wrap">
          {categoriesJSX}
        </div>
      </div>
    </div>
  );
};

export default TrendingCategories;
