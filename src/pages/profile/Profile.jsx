import React, { useEffect } from "react";

// material tailwind components
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
// redux
import { useDispatch } from "react-redux";
import { logout, getUserInfoThunk } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const [open, setOpen] = React.useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    dispatch(getUserInfoThunk());
  }, []);

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray">
          Sidebar
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          //   icon={
          //     <ChevronDownIcon
          //       strokeWidth={2.5}
          //       className={`mx-auto h-4 w-4 transition-transform ${
          //         open === 1 ? "rotate-180" : ""
          //       }`}
          //     />
          //   }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  {/* <ChevronRightIcon strokeWidth={3} className="h-3 w-5" /> */}
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  {/* <ChevronRightIcon strokeWidth={3} className="h-3 w-5" /> */}
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  {/* <ChevronRightIcon strokeWidth={3} className="h-3 w-5" /> */}
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          //   icon={
          //     <ChevronDownIcon
          //       strokeWidth={2.5}
          //       className={`mx-auto h-4 w-4 transition-transform ${
          //         open === 2 ? "rotate-180" : ""
          //       }`}
          //     />
          //   }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix></ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                E-Commerce
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  {/* <ChevronRightIcon strokeWidth={3} className="h-3 w-5" /> */}
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  {/* <ChevronRightIcon strokeWidth={3} className="h-3 w-5" /> */}
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <ListItem>
          <ListItemPrefix></ListItemPrefix>
          Inbox
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix></ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix></ListItemPrefix>
          Settings
        </ListItem>
        <ListItem onClick={handleLogout}>
          <ListItemPrefix>{/*TODO:Icon*/}</ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
};

export default Profile;

///--------------
