import React from "react";
import { Divider } from "@mui/material";
import Compension from "../assets/images/Featured icon.png";
import operation from "../assets/images/Featured icon-1.png";
import benmifits from "../assets/images/Featured icon-4.png";
import collo from "../assets/images/Featured icon-5.png";
import community from "../assets/images/Featured icon-6.png";
import checkBox from "../assets/images/Check icon.png";

export const Difference = () => {
  return (
    <div className="mx-40">
      <div className="mt-16 grid grid-flow-row justify-start gap-4">
        <text className="text-app-moss700 text-lg font-semibold">
          Differences
        </text>
        <text className="text-app-gray900 text-4xl font-semibold">
          Unleash the Power of Your Contracting <br /> Potential
        </text>
        <text className="text-app-gray text-lg">
          Earn more and manage freely with XenFlexer: Outshine the industry with
          tailored benefits,
          <br /> boundless growth, and a community that learns and prospers
          together.
        </text>
      </div>
      <div className="py-10 grid grid-flow-col gap-16">
        <div className="grid grid-flow-row gap-8">
          <div className="grid grid-flow-col justify-start ">
            <div>
              <img src={Compension} />
            </div>
            <div className="grid grid-flow-row ml-4 gap-2 pt-2">
              <text className="text-app-gray900 text-xl font-semibold">
                Compensation
              </text>
              <text className="text-app-gray text-base ">
                Value-based Pricing to bring complete Transparency
              </text>
            </div>
          </div>
          <div className="grid grid-flow-col justify-start">
            <div>
              <img src={operation} />
            </div>
            <div className="grid grid-flow-row ml-4 gap-2 pt-2">
              <text className="text-app-gray900 text-xl font-semibold">
                Operations
              </text>
              <text className="text-app-gray text-base ">
                Transparency & Autonomy with defined SLAs to respect time
              </text>
            </div>
          </div>
          <div className="grid grid-flow-col justify-start">
            <div>
              <img src={benmifits} />
            </div>
            <div className="grid grid-flow-row ml-4 gap-2 pt-2">
              <text className="text-app-gray900 text-xl font-semibold">
                Benefits
              </text>
              <text className="text-app-gray text-base ">
                Flexibility to choose
              </text>
            </div>
          </div>
          <div className="grid grid-flow-col justify-start">
            <div>
              <img src={collo} />
            </div>
            <div className="grid grid-flow-row ml-4 gap-2 pt-2">
              <text className="text-app-gray900 text-xl font-semibold">
                COLLOBORATION
              </text>
              <text className="text-app-gray text-base ">
                Clear Expectations & Transparent Operations since Employer has{" "}
                <br /> lot to lose
              </text>
            </div>
          </div>
          <div className="grid grid-flow-col justify-start">
            <div>
              <img src={community} />
            </div>
            <div className="grid grid-flow-row ml-4 gap-2 pt-2">
              <text className="text-app-gray900 text-xl font-semibold">
                COMMUNITY
              </text>
              <text className="text-app-gray text-base ">
                Consultants can grow and improve during their Career.
                <br /> Opportunity to join Direct Client/Permanent Placement
              </text>
            </div>
          </div>
        </div>
        <div className="border border-app-border rounded-3xl">
          <div className="flex items-center justify-center py-5 text-center">
            <text className="text-app-gray900 text-2xl font-semibold ">
              We compare with Others in the Industry?
            </text>
          </div>
          <Divider />
          <div className="p-6">
            <text className="text-app-gray900 text-base font-semibold ">
              Xenspire & Other Industries
            </text>
            <div className="grid grid-cols-2  gap-x-10 gap-y-5 mt-1">
              <div className="grid grid-flow-col gap-3 justify-start">
                <img src={checkBox} alt="checkbox" />
                <text className="text-app-gray text-base">
                  Structured tiered fixed-fee <br /> program to define our share
                </text>
              </div>
              <div className="grid grid-flow-col gap-3 justify-start">
                <img src={checkBox} alt="checkbox" />
                <text className="text-app-gray text-base">% of Bill Rate</text>
              </div>
              <div className="grid grid-flow-col gap-3 justify-start">
                <img src={checkBox} alt="checkbox" />
                <text className="text-app-gray text-base">
                  Platform Driven
                  <br /> Communication
                </text>
              </div>
              <div className="grid grid-flow-col gap-3 justify-start">
                <img src={checkBox} alt="checkbox" />
                <text className="text-app-gray text-base">
                  Back & Forth Phone/Email
                </text>
              </div>
              <div className="grid grid-flow-col gap-3 justify-start">
                <img src={checkBox} alt="checkbox" />
                <text className="text-app-gray text-base">
                  Ala Carte Services for
                  <br /> Various Insurance types, <br />
                  401K, Immigration, HSA etc.
                </text>
              </div>
              <div className="grid grid-flow-col gap-3 justify-start">
                <img src={checkBox} alt="checkbox" />
                <text className="text-app-gray text-base">
                  Non-standard, but <br />
                  predominantly based on a <br />
                  tiered percentage cut
                </text>
              </div>
              <div className="grid grid-flow-col gap-3 justify-start">
                <img src={checkBox} alt="checkbox" />
                <text className="text-app-gray text-base">
                  Open Forum Structure to
                  <br /> communicate with other
                  <br /> Consultants. All Metrics are <br />
                  displayed openly across
                  <br /> network.
                </text>
              </div>
              <div className="grid grid-flow-col gap-3 justify-start">
                <img src={checkBox} alt="checkbox" />
                <text className="text-app-gray text-base">
                  Audit log and notes
                </text>
              </div>
              <div className="grid grid-flow-col gap-3 justify-start">
                <img src={checkBox} alt="checkbox" />
                <text className="text-app-gray text-base">
                  All Consultants are part of
                  <br /> larger Xenspire Community
                  <br />
                  program/network to yield all
                  <br /> the benefits of being
                  <br /> together.
                </text>
              </div>
              <div className="grid grid-flow-col gap-3 justify-start">
                <img src={checkBox} alt="checkbox" />
                <text className="text-app-gray text-base">NO COMMUNITY</text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
