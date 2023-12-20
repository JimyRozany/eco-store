import { useState } from "react";

import {
  Drawer,
  Button,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Checkbox,
  Input,
} from "@material-tailwind/react";

// components
import { CardProduct } from "../../components";
// icons
import { CiBoxList } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

import { IoIosArrowDown } from "react-icons/io";
const AllProducts = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);

  const handleOpenDrawer = () => setOpenDrawer(true);
  const handleCloseDrawer = () => setOpenDrawer(false);
  const openCloseAccordion = (value) =>
    setOpenAccordion(openAccordion === value ? 0 : value);

  return (
    <div className=" mt-6 p-6">
      <Drawer
        open={openDrawer}
        onClose={handleCloseDrawer}
        className="px-4 py-10"
      >
        <div className="mb-6 flex items-center justify-center ">
          <Button className="bg-mainColor normal-case flex items-center gap-2">
            <FaRegTrashAlt />
            <span>Clear All</span>
          </Button>
        </div>
        {/* stock */}
        <Accordion
          open={openAccordion === 1}
          icon={
            <IoIosArrowDown
              className={` duration-500 ${
                openAccordion === 1 ? "rotate-180" : "rotate-0"
              }`}
            />
          }
          className="bg-blue-gray-50 p-2 rounded-md mb-4"
        >
          <AccordionHeader
            className="border-none p-0"
            onClick={() => openCloseAccordion(1)}
          >
            Availability
          </AccordionHeader>
          <AccordionBody>
            <Checkbox
              label="in Stock"
              color="deep-orange"
              labelProps={{ className: "text-xl font-medium" }}
            />
            <Checkbox
              label="out of Stock"
              color="deep-orange"
              labelProps={{ className: "text-xl font-medium" }}
            />
          </AccordionBody>
        </Accordion>
        {/* end stock */}
        {/* price */}
        <Accordion
          open={openAccordion === 2}
          icon={
            <IoIosArrowDown
              className={` duration-500 ${
                openAccordion === 2 ? "rotate-180" : "rotate-0"
              }`}
            />
          }
          className="bg-blue-gray-50 p-2 rounded-md mb-4"
        >
          <AccordionHeader
            className="border-none p-0"
            onClick={() => openCloseAccordion(2)}
          >
            Price
          </AccordionHeader>
          <AccordionBody>
            <div className="flex justify-between items-center ">
              <input
                type="number"
                className=" bg-transparent outline-none border border-gray-400 text-xl px-1 w-20 rounded"
                placeholder="0"
              />
              <span className="font-bold text-xl px-1">—</span>
              <input
                type="number"
                className=" bg-transparent outline-none border border-gray-400 text-xl px-1 w-20 rounded"
                placeholder="9999"
              />
            </div>
          </AccordionBody>
        </Accordion>
        {/* end price */}
        {/* brand */}
        <Accordion
          open={openAccordion === 3}
          icon={
            <IoIosArrowDown
              className={` duration-500 ${
                openAccordion === 3 ? "rotate-180" : "rotate-0"
              }`}
            />
          }
          className="bg-blue-gray-50 p-2 rounded-md mb-4"
        >
          <AccordionHeader
            className="border-none p-0"
            onClick={() => openCloseAccordion(3)}
          >
            Brand
          </AccordionHeader>
          <AccordionBody>
            <Checkbox
              label="brand 1"
              color="deep-orange"
              labelProps={{ className: "text-xl font-medium" }}
            />
            <Checkbox
              label="brand 2"
              color="deep-orange"
              labelProps={{ className: "text-xl font-medium" }}
            />
          </AccordionBody>
        </Accordion>
        {/* end brand */}
      </Drawer>

      <div className="lg:my-6 lg:px-6">
        <Button
          variant="text"
          className="flex justify-between items-center gap-2 normal-case text-md lg:text-xl hover:bg-transparent hover:text-mainColor duration-300"
          onClick={handleOpenDrawer}
        >
          <CiBoxList />
          <span>Filtration</span>
        </Button>
      </div>
      {/* products */}
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 md:gap-1  lg:grid-cols-4 gap-2 md:px-0 px-2">
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
      </div>
      {/* ****** end products ****** */}
    </div>
  );
};

export default AllProducts;
