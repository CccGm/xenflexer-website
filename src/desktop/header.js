import React from "react";
import {
  ClearAllOutlined,
  ClearOutlined,
  KeyboardArrowDownOutlined,
} from "@mui/icons-material";
import {
  Button,
  IconButton,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import logo from "../assets/images/lOGO 1.png";

export const Header = () => {
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = (open) => {
    setDrawer(open);
  };

  const DRAWER = () => {
    return (
      <div>
        <Drawer
          anchor="right"
          open={drawer}
          onClose={() => toggleDrawer(false)}>
          <div className="bg-app-border h-full">
            <div className="px-5">
              <IconButton
                sx={{ color: "white", mt: 3 }}
                onClick={() => toggleDrawer(false)}>
                <ClearOutlined />
              </IconButton>
            </div>
            <List className="w-64 sm:w-80">
              {["Home", "Partners", "Resources", "Contact Us"].map(
                (text, index) => (
                  <ListItem key={index}>
                    <Button
                      fullWidth
                      sx={{
                        borderWidth: 1,
                        bgcolor: "#4F7A21",
                        borderRadius: 3,
                      }}>
                      <ListItemText primary={text} sx={{ color: "#ffffff" }} />
                    </Button>
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List className="w-64 sm:w-80 ">
              {["Flexer", "Client", "Hire", "Register", "Login"].map(
                (text, index) => (
                  <ListItem key={index}>
                    <Button
                      fullWidth
                      sx={{
                        borderWidth: 1,
                        bgcolor: "#4F7A21",
                        borderRadius: 3,
                      }}>
                      <ListItemText primary={text} sx={{ color: "#ffffff" }} />
                    </Button>
                  </ListItem>
                )
              )}
            </List>
          </div>
        </Drawer>
      </div>
    );
  };
  return (
    <nav className="p-3 grid grid-flow-col items-center gap-5 justify-between lg:justify-around px-12">
      <div>
        <img src={logo} alt="logo" />
      </div>

      <ul className="hidden lg:grid grid-flow-col  gap-8 ">
        <li className="text-app-gray font-bold">
          <a href="#home">Home</a>
        </li>
        <li className="text-app-gray font-bold">
          <a href="#partners">
            Partners <KeyboardArrowDownOutlined />
          </a>
        </li>
        <li className="text-app-gray font-bold">
          <a href="#resources">
            Resources <KeyboardArrowDownOutlined />
          </a>
        </li>
        <li className="text-app-gray font-bold">
          <a href="#contactUs">Contact Us</a>
        </li>
      </ul>

      <div className="hidden grid-flow-col lg:grid gap-4 items-center">
        <text className="text-app-gray text-base font-black">Flexer</text>
        <Button
          variant="contained"
          sx={{
            color: "#ffffff",
            fontWeight: 600,
            textTransform: "none",
            bgcolor: "#669F2A",
          }}>
          Register
        </Button>
        <Button
          key="three"
          sx={{
            color: "#344054",
            fontWeight: 600,
            textTransform: "none",
            borderColor: "#D0D5DD",
          }}
          variant="outlined">
          Login
        </Button>
        <text className="text-app-gray text-base font-black">Client</text>
        <Button
          variant="contained"
          sx={{
            color: "#ffffff",
            fontWeight: 600,
            textTransform: "none",
            bgcolor: "#669F2A",
          }}>
          Hire
        </Button>
      </div>

      <div className="lg:hidden">
        {drawer ? (
          <IconButton
            sx={{ color: "black" }}
            onClick={() => toggleDrawer(false)}>
            <ClearOutlined />
          </IconButton>
        ) : (
          <IconButton
            sx={{ color: "black" }}
            onClick={() => toggleDrawer(true)}>
            <ClearAllOutlined />
          </IconButton>
        )}
        <DRAWER />
      </div>
    </nav>
  );
};
