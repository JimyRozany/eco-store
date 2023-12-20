import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";

import { useDispatch, useSelector } from "react-redux";
import { showHideDialog } from "../../features/search/searchSlice";

export function SearchDialog() {
  const open = useSelector((state) => state.search.openDialog);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(showHideDialog());
  };

  return (
    <>
      <Dialog open={open} handler={handleClose}>
        <DialogBody>
          <form className="w-full">
            <Input
              variant="static"
              placeholder="Search our store"
              className="placeholder:text-4xl !text-2xl "
              color="deep-orange"
            />
            <Button
              type="submit"
              className="bg-mainColor rounded-full normal-case text-md px-10 mt-2"
            >
              Search
            </Button>
          </form>
        </DialogBody>
        <DialogFooter>
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
