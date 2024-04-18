import React from "react";
import { Chip } from "@mui/material";
import closeloop from "../assets/images/uil_technology.png";
import challenge from "../assets/images/streamline_ai-technology-spark.png";
import integrity from "../assets/images/uil_adjust-half.png";
import quality from "../assets/images/carbon_development.png";
import community from "../assets/images/uil_server-network-alt.png";

export const Values = () => {
  return (
    <div className="p-10">
      <div className="grid grid-flow-row text-center justify-center gap-4">
        <div>
          <Chip
            label="Integrations"
            variant="outlined"
            sx={{ color: "#3F621A" }}
          />
        </div>
        <text className="text-app-gray900 font-semibold text-4xl">
          Unlock More Value with Freedom and <br /> Transparency
        </text>
        <text className="text-app-gray text-xl">
          Experience the power of choice and clarity with every opportunity,
          only at <br />
          XenFlexer. Powered by XenHire's precision matching, we offer an
          unrivaled blend <br />
          of freedom and security. Dive into the best of both worlds with
          XenFlexer, where
          <br /> your contracting career meets unparalleled opportunities and
          benefits!
        </text>
        <text className="my-12 text-app-gray900 font-semibold text-4xl">
          Our Values
        </text>
      </div>
      <div className="mt-3 grid  grid-cols-3 ">
        <div className="grid grid-flow-row justify-center text-center ">
          <div className="flex justify-center">
            <img src={closeloop} alt="closeloop" />
          </div>
          <text className="text-app-gray900 text-xl font-semibold">
            Closed Loop
          </text>
          <text className="text-app-gray">
            Work faster and smarter by integrating directly <br /> with Notion,
            right in the app.
          </text>
        </div>
        <div className="grid grid-flow-row justify-center text-center ">
          <div className="flex justify-center">
            <img src={challenge} alt="challenge" />
          </div>
          <text className="text-app-gray900 text-xl font-semibold">
            Challenge the tradition
          </text>
          <text className="text-app-gray">
            Work faster and smarter by integrating directly <br /> with Notion,
            right in the app.
          </text>
        </div>
        <div className="grid grid-flow-row justify-center text-center ">
          <div className="flex justify-center">
            <img src={integrity} alt="integrity" />
          </div>
          <text className="text-app-gray900 text-xl font-semibold">
            Integrity
          </text>
          <text className="text-app-gray">
            Work faster and smarter by integrating directly <br /> with Notion,
            right in the app.
          </text>
        </div>
      </div>
      <div className="mt-10 grid  grid-cols-2 ">
        <div className="grid grid-flow-row justify-center text-center ">
          <div className="flex justify-center">
            <img src={quality} alt="Quality" />
          </div>
          <text className="text-app-gray900 text-xl font-semibold">
            Quality
          </text>
          <text className="text-app-gray">
            Work faster and smarter by integrating directly with Notion, right
            in the app.
          </text>
        </div>
        <div className="grid grid-flow-row justify-center text-center ">
          <div className="flex justify-center">
            <img src={community} alt="Community Development" />
          </div>
          <text className="text-app-gray900 text-xl font-semibold">
            Community Development
          </text>
          <text className="text-app-gray">
            Work faster and smarter by integrating directly with Notion, right
            in the app.
          </text>
        </div>
      </div>
    </div>
  );
};
