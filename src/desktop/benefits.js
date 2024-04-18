import React from "react";
import icon1 from "../assets/images/Featured icon-1.png";
import icon2 from "../assets/images/Featured icon-2.png";
import icon3 from "../assets/images/Featured icon-3.png";
import icon4 from "../assets/images/Featured icon.png";
import { Chip } from "@mui/material";

export const Benefit = () => {
  return (
    <div className="pb-10">
      <div className=" grid  grid-cols-2 ">
        <div className="grid grid-flow-row justify-center text-center ">
          <div className="flex justify-center">
            <img src={icon4} alt="icon4" />
          </div>
          <text className="text-app-gray900 text-xl font-semibold">
            Simply Contracting Career
          </text>
          <text className="text-app-gray">
            Simplify Your Contracting Career with Our All-In-One Employer of
            Record,
            <br /> Payroll & Other Services – Focus on Your Projects, Not
            Paperwork!
          </text>
        </div>
        <div className="grid grid-flow-row justify-center text-center ">
          <div className="flex justify-center">
            <img src={icon1} alt="icon1" />
          </div>
          <text className="text-app-gray900 text-xl font-semibold">
            Employer of Record (EOR):
          </text>
          <text className="text-app-gray">
            Let us take the reins on compliance, invoicing, and timesheets.
          </text>
          <text className="text-app-gray">
            Benefits Management: Comprehensive coverage from health insurance to{" "}
            <br />
            401K and beyond.
          </text>
        </div>
      </div>
      <div className="mt-10 grid  grid-cols-2 ">
        <div className="grid grid-flow-row justify-center text-center ">
          <div className="flex justify-center">
            <img src={icon2} alt="icon2" />
          </div>
          <text className="text-app-gray900 text-xl font-semibold">
            Support Services
          </text>
          <text className="text-app-gray">
            Access to attorney support, visa sponsorship, and legal plans.
          </text>
        </div>
        <div className="grid grid-flow-row justify-center text-center ">
          <div className="flex justify-center">
            <img src={icon3} alt="icon3" />
          </div>
          <text className="text-app-gray900 text-xl font-semibold">
            Family & Education Perks
          </text>
          <text className="text-app-gray">
            Enhance your life with child and family care options, plus
            educational benefits.
          </text>
        </div>
      </div>
      <div className="mt-16 grid grid-flow-row text-center justify-center gap-4">
        <div>
          <Chip label="Benefits" variant="outlined" sx={{ color: "#3F621A" }} />
        </div>
        <text className="text-app-gray900 font-semibold text-4xl">
          Benefits
        </text>
        <text className="text-app-gray text-xl">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, <br />
          and retain more users. Trusted by over 4,000 startups.
        </text>
      </div>
    </div>
  );
};
