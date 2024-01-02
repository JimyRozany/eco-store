import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";

import { useDispatch, useSelector } from "react-redux";
import {
  showHideDialog,
  searchAction,
} from "../../features/search/searchSlice";

export default function SearchDialog() {
  const [searchKey, setSearchKey] = useState("");
  const open = useSelector((state) => state.search.openDialog);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleClose = () => {
    dispatch(showHideDialog());
  };
  // handlers
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchKey !== "") {
      dispatch(searchAction(searchKey));
      handleClose();
      setSearchKey("");
      return navigate("/search-result");
    }
  };
  return (
    <>
      <Dialog open={open} handler={handleClose} className=" absolute top-20">
        <DialogBody className="p-2">
          <form className="w-full" onSubmit={(e) => handleSearch(e)}>
            <Input
              variant="static"
              placeholder="Search our store"
              className="placeholder:text-2xl !text-2xl "
              color="deep-orange"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <Button
              type="submit"
              className="bg-mainColor rounded-full normal-case md:text-lg  mt-2"
              onClick={(e) => handleSearch(e)}
            >
              Search
            </Button>
          </form>
        </DialogBody>
        <DialogFooter className="p-2">
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
