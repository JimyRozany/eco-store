import { Carousel, Button } from "@material-tailwind/react";
// icons
import { FaArrowRight } from "react-icons/fa";
// images
import appleWatch from "../../images/apple-watch.png";
import iphoneAccessories from '../../images/iphone-accessories.png'
const Hero = () => {
  return (
    <Carousel
      className="rounded-xl font-Poppins"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-mainColor" : "w-4 bg-mainDarkColor"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      nextArrow={() => null}
      prevArrow={() => null}
    >
      {/* slide one */}
      <div className="flex justify-around items-center px-10 w-screen h-screen bg-gray-100">
        {/* info sale */}
        <div className="px-2 sm:px-5">
          <div className="uppercase text-mainColor text-3xl mb-2 animate-[hero_0.5s]">
            sale up to 30% of
          </div>
          <div className="text-5xl font-semibold text-mainDarkColor mb-2 animate-[hero_1s]">
            Apple Watch Series
          </div>
          <div className="text-mainDarkColor text-lg font-medium mb-2 animate-[hero_1.5s]">
            Feature packed at a better value than ever Powerful sensors to
            monitor your fitness
          </div>
          <div className=" animate-[hero_2s]">
            <Button className=" bg-mainColor hover:bg-mainDarkColor duration-150 font-Poppins text-lg rounded-full flex justify-around items-center gap-2">
              Shop Now
              <FaArrowRight />
            </Button>
          </div>
        </div>
        {/* ***** End info sale ****  */}
        {/* image */}
        <div className="w-[50%]  hidden sm:block">
          <img src={appleWatch} alt="apple-watch" className="w-[100%]" />
        </div>
        {/*  ******* end image ******** */}
      </div>
      {/* ******* end slide one ********* */}

      {/* slide two */}
      <div className="flex justify-around items-center px-10 w-screen h-screen bg-gray-100">
        {/* info sale */}
        <div className="px-2 sm:px-5">
          <div className="uppercase text-mainColor text-3xl mb-2 animate-[hero_0.5s]">
            New Arrivals Collection
          </div>
          <div className="text-5xl font-semibold text-mainDarkColor mb-2 animate-[hero_1s]">
            iPhone Accessories
          </div>
          <div className="text-mainDarkColor text-lg font-medium mb-2 animate-[hero_1.5s]">
            Snap on a case, wallet, wireless change battery pack all accessories you're looking
          </div>
          <div className=" animate-[hero_2s]">
            <Button className="bg-mainColor hover:bg-mainDarkColor duration-150 font-Poppins text-lg rounded-full flex justify-around items-center gap-2">
              Shop Now
              <FaArrowRight />
            </Button>
          </div>
        </div>
        {/* ***** End info sale ****  */}
        {/* image */}
        <div className="w-[50%] hidden sm:block">
          <img src={iphoneAccessories} alt="iphone-accessories" className="w-[100%] mt-10" />
        </div>
        {/*  ******* end image ******** */}
      </div>
      {/* ******* end slide two ********* */}
    </Carousel>
  );
};

export default Hero;
