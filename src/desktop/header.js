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
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/lOGO 1.png";

export const Header = () => {
  const navigation = useNavigate();
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
            {/* main list */}
            <List className="w-64 sm:w-80">
              <ListItem>
                <Button
                  fullWidth
                  sx={{
                    borderWidth: 1,
                    bgcolor: "#4F7A21",
                    borderRadius: 3,
                  }}
                  onClick={() => navigation("/")}>
                  <ListItemText primary={"Home"} sx={{ color: "#ffffff" }} />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  sx={{
                    borderWidth: 1,
                    bgcolor: "#4F7A21",
                    borderRadius: 3,
                  }}
                  disabled>
                  <ListItemText
                    primary={"Partners"}
                    sx={{ color: "#475467" }}
                  />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  sx={{
                    borderWidth: 1,
                    bgcolor: "#4F7A21",
                    borderRadius: 3,
                  }}
                  disabled>
                  <ListItemText
                    primary={"Resources"}
                    sx={{ color: "#475467" }}
                  />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  sx={{
                    borderWidth: 1,
                    bgcolor: "#4F7A21",
                    borderRadius: 3,
                  }}
                  onClick={() => navigation("/contactus")}>
                  <ListItemText
                    primary={"Contact Us"}
                    sx={{ color: "#ffffff" }}
                  />
                </Button>
              </ListItem>
            </List>
            <Divider />
            {/* flexer list */}
            <List className="w-64 sm:w-80 ">
              <ListItem>
                <ListItemText
                  primary={"Flexer"}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    color: "#344054",
                    fontSize: 16,
                  }}
                />
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  sx={{
                    borderWidth: 1,
                    bgcolor: "#4F7A21",
                    borderRadius: 3,
                  }}
                  onClick={() => navigation("/register")}>
                  <ListItemText
                    primary={"Register"}
                    sx={{ color: "#ffffff" }}
                  />
                </Button>
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  sx={{
                    borderWidth: 1,
                    bgcolor: "#4F7A21",
                    borderRadius: 3,
                  }}
                  disabled>
                  <ListItemText primary={"Login"} sx={{ color: "#475467" }} />
                </Button>
              </ListItem>
            </List>
            <Divider />
            {/* client list */}
            <List className="w-64 sm:w-80 ">
              <ListItem>
                <ListItemText
                  primary={"Client"}
                  primaryTypographyProps={{
                    fontWeight: 600,
                    color: "#344054",
                    fontSize: 16,
                  }}
                />
              </ListItem>
              <ListItem>
                <Button
                  fullWidth
                  sx={{
                    borderWidth: 1,
                    bgcolor: "#4F7A21",
                    borderRadius: 3,
                  }}>
                  <ListItemText primary={"Hire"} sx={{ color: "#ffffff" }} />
                </Button>
              </ListItem>
            </List>
            <Divider />
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
        <li className="text-app-gray font-bold cursor-pointer">
          <a onClick={() => navigation("/")}>Home</a>
        </li>
        <li className="text-app-border font-bold">
          <a>
            Partners <KeyboardArrowDownOutlined />
          </a>
        </li>
        <li className="text-app-border font-bold">
          <a>
            Resources <KeyboardArrowDownOutlined />
          </a>
        </li>
        <li className="text-app-gray font-bold cursor-pointer">
          <a onClick={() => navigation("/contactus")}>Contact Us</a>
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
          }}
          onClick={() => navigation("/register")}>
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
          disabled
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
