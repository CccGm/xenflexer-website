import React from "react";

export const Feature = () => {
  return (
    <div className="p-10">
      <div className="grid grid-flow-row text-center justify-center gap-4">
        <text className="text-app-gray900 font-semibold text-4xl">
          Features
        </text>
        <text className="text-app-gray text-xl">
          Designed for a transparent, independent partnership, offering a chance
          to join a <br />
          community that promotes broader opportunities & growth.
        </text>
      </div>
      <div className="my-16 grid  grid-cols-3 ">
        <div className="grid grid-flow-row justify-center text-center ">
          <text className="text-app-moss500 font-semibold text-6xl">
            Direct
          </text>
          <text className="text-app-gray900 text-lg font-semibold">
            Client Placement
          </text>
        </div>
        <div className="grid grid-flow-row justify-center text-center ">
          <text className="text-app-moss500 font-semibold text-6xl">MSP</text>
          <text className="text-app-gray900 text-lg font-semibold">
            Partner Placement
          </text>
        </div>
        <div className="grid grid-flow-row justify-center text-center ">
          <text className="text-app-moss500 font-semibold text-6xl">Self</text>
          <text className="text-app-gray900 text-lg font-semibold">
            Sourced Placement
          </text>
        </div>
      </div>
    </div>
  );
};
