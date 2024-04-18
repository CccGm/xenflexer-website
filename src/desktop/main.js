import React from "react";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { Box, Button, ButtonGroup, TextField } from "@mui/material";
import logo from "../assets/images/lOGO 1.png";
import line from "../assets/images/Line pattern.png";
import profile from "../assets/images/Untitled design (5) 1.png";

export const Main = () => {
  const buttons1 = [
    <Button
      key="one"
      variant="contained"
      sx={{
        color: "#ffffff",
        fontWeight: 600,
        textTransform: "none",
        bgcolor: "#4F7A21",
      }}>
      Flexer
    </Button>,
    <Button
      key="two"
      sx={{ color: "#344054", fontWeight: 600, textTransform: "none" }}>
      Register
    </Button>,
    <Button
      key="three"
      sx={{ color: "#344054", fontWeight: 600, textTransform: "none" }}>
      Login
    </Button>,
  ];
  const buttons2 = [
    <Button
      key="one"
      variant="contained"
      sx={{
        color: "#ffffff",
        fontWeight: 600,
        textTransform: "none",
        bgcolor: "#4F7A21",
      }}>
      Client
    </Button>,
    <Button
      key="two"
      sx={{ color: "#344054", fontWeight: 600, textTransform: "none" }}>
      Hire
    </Button>,
  ];
  return (
    <div>
      {/* nav bar */}
      <nav className="w-full p-3 grid grid-flow-col items-center justify-between px-12">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <ul className="grid grid-flow-col gap-8">
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
          <li className="text-app-gray font-bold">
            <a href="#client">Client</a>
          </li>
        </ul>

        <div className="grid grid-flow-col gap-4">
          <ButtonGroup color="success" aria-label="Medium-sized button group">
            <Button
              key="one"
              variant="contained"
              sx={{
                color: "#ffffff",
                fontWeight: 600,
                textTransform: "none",
                bgcolor: "#4F7A21",
              }}>
              Hire
            </Button>
          </ButtonGroup>
          <ButtonGroup color="success" aria-label="Medium-sized button group">
            {buttons1}
          </ButtonGroup>
          <ButtonGroup color="success" aria-label="Medium-sized button group">
            {buttons2}
          </ButtonGroup>
        </div>
      </nav>
      {/* box */}
      <div>
        <Box
          sx={{
            height: 430,
            width: "auto",
            backgroundColor: "#4F7A21",
            borderRadius: "24px",
            mx: 12,
          }}>
          <div className="pt-10 grid grid-flow-row gap-5 justify-center text-center">
            <text className="text-white font-bold text-5xl">
              Introducing XenFlexer Across <br />
              Multiple Industry Verticals
            </text>
            <text className="text-app-moss200 text-xl">
              We're pioneering the crowdstaffing revolution, providing a unique
              platform where <br /> contractors can embrace the flexibility of
              contract work without sacrificing the
              <br /> perks of corporate life.
            </text>
          </div>
          <div className="flex justify-center mt-5">
            <div className="grid grid-flow-row">
              <TextField
                placeholder="Enter your email"
                size="small"
                sx={{ backgroundColor: "#ffffff", marginRight: 3, width: 335 }}
              />
              <text className="text-app-moss200 text-sm">
                We care about your data in our{" "}
                <a
                  style={{ textDecorationLine: "underline" }}
                  href="#privacypolicy">
                  privacy policy.
                </a>
              </text>
            </div>

            <Button
              variant="contained"
              sx={{
                color: "#ffffff",
                fontWeight: 600,
                textTransform: "none",
                bgcolor: "#669F2A",
                height: 42,
              }}>
              Get Started
            </Button>
          </div>
        </Box>

        <div className="flex justify-center -mt-20">
          <Box className="shadow-2xl bg-white rounded-3xl px-3">
            <div className="flex justify-center  mt-3 ">
              <img src={profile} alt="people" style={{ width: 600 }} />
            </div>
            <text className="mb-2 flex justify-center text-lg font-semibold text-app-gray900">
              IT & Medical Services
            </text>
          </Box>
        </div>
      </div>
      {/* images line */}
      <img src={line} alt="line1" className="absolute  top-56 left-0" />
      <img src={line} alt="line1" className="absolute bottom-0 right-0" />
    </div>
  );
};
