import { Typography } from "@material-tailwind/react";
import { FaGooglePlay, FaAppStore, FaTwitter, FaGithub } from "react-icons/fa";
const SITEMAP = [
  {
    title: "Contact Us",
    links: [
      "ECO-Store App",
      "No. 25 Palestine Street, Gaza City",
      "Palestin",
      "+20 1020330550",
      "example@email.com",
    ],
  },
  {
    title: "Information",
    links: ["Product Store", "Checkout", "License Policy", "Affiliate"],
  },
  {
    title: "Customer Service",
    links: ["Help Center", "Redeem Voucher", "Contact Us", "Policies & Rules"],
  },
  {
    title: "Download Our App",
    links: [
      "Download our App and get extra 15% Discount on your first Order...!",
      <div className="flex justify-around items-center text-4xl  w-[150px] ">
        <FaAppStore />
        <FaGooglePlay />
      </div>,
    ],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="w-full ">
      <div className="mx-auto w-full max-w-7xl px-8">
        <div className="mx-auto grid w-full grid-cols-1 gap-8 py-12 sm:grid-cols-2 md:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold uppercase opacity-50"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <h1 className="inline-block py-1 pr-2 transition-transform hover:scale-105">
                      {link}
                    </h1>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <h1 className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0">
            &copy; {currentYear} <span>Jimy Rozany</span>. All Rights Reserved.
          </h1>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            <h1 className="opacity-80 hover:cursor-pointer hover:opacity-100 hover:scale-125 transition-all duration-700">
              <FaTwitter />
            </h1>
            <h1 className="opacity-80 hover:cursor-pointer hover:opacity-100 hover:scale-125 transition-all duration-700">
              <FaGithub />
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
