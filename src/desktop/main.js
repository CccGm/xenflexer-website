import React from "react";
import { Box, Button } from "@mui/material";
import line from "../assets/images/Line pattern.png";
// import profile from "../assets/images/Untitled design (5) 1.png";
import image_6 from "../assets/images/Frame 6.png";
import { Header } from "./header";
import { useNavigate } from "react-router-dom";

export const Main = () => {
  const navigation = useNavigate();
  const [email, setEmail] = React.useState("");
  return (
    <div>
      <Header />

      {/* box */}
      <div>
        <Box className="pb-24 mx-5 sm:mx-10 lg:mx-32 px-28 bg-app-moss rounded-3xl">
          <div className="pt-20 grid grid-flow-row gap-5 justify-center text-center">
            <text className="text-white font-bold text-4xl sm:text-5xl">
              Revolutionizing Contract Work
              <br /> with Corporate Perks
            </text>
            <text className="text-app-moss200 text-base sm:text-xl mt-4">
              We're pioneering the crowdstaffing revolution, providing a unique
              platform where <br /> contractors can embrace the flexibility of
              contract work without sacrificing the
              <br /> perks of corporate life.
            </text>
          </div>
          <div className="flex justify-center mt-10">
            <div className="grid grid-flow-row">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-white mr-7 rounded-lg p-2 min-w-36"
              />
              <text className="text-app-moss200 text-sm mt-2">
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
              }}
              onClick={() => navigation("/register", { state: email })}>
              Get Started
            </Button>
          </div>
        </Box>

        <div className="flex mx-14 lg:mx-32 justify-center -mt-20">
          <Box className="shadow-2xl bg-white rounded-3xl px-10">
            <div className="flex justify-center text-center mt-7">
              <text className="text-app-gray900 text-lg font-semibold">
                Introducing XenFlexer across multiple industry verticals
              </text>
            </div>
            <div className="flex justify-center ">
              <img src={image_6} alt="people" style={{ width: 700 }} />
            </div>
            <div className="grid grid-flow-col text-center mt-3 sm:pl-10 pb-5">
              <text className="text-app-gray900 text-2xl font-semibold">
                IT
              </text>
              <text className="text-app-gray900 text-2xl font-semibold">
                Healthcare
              </text>
            </div>
          </Box>
        </div>
      </div>

      {/* images line */}
      <img
        src={line}
        alt="line1"
        className="absolute -bottom-80 left-0 hidden lg:flex"
      />
      <img
        src={line}
        alt="line1"
        className="absolute -bottom-80 right-0 hidden lg:flex"
      />
    </div>
  );
};
