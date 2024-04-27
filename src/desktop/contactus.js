import React from "react";
import { Button } from "@mui/material";
import axios from "axios";
import { Header } from "./header";
import sales from "../assets/images/sales.png";
import { Footer } from "./footer";

export const ContactUs = () => {
  const [fname, setFName] = React.useState("");
  const [lname, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("fname", fname);
    console.log("lname", lname);
    console.log("email", email);
    console.log("msg", msg);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/contactus/",
        {
          fname,
          lname,
          email,
          msg,
        }
      );

      if (response.status === 200) {
        console.log("contact  succesfully");
      } else {
        console.log("contact not save");
      }
    } catch (error) {
      console.log("contact not save", error);
    }
  };

  return (
    <>
      <Header />
      <div className="grid grid-flow-col bg-app-backGround">
        <div className="p-10 hidden sm:grid">
          <div className="grid justify-center text-center px-10">
            <text className="text-app-gray900 text-2xl font-semibold mt-5">
              Unlock More Value with Freedom and Transparency
            </text>
            <text className="text-black text-xs font-normal mt-5">
              Experience the power of choice and clarity with every opportunity,
              only at
              <br /> XenFlexer. Powered by XenHire's precision matching, we
              offer an unrivaled blend
              <br /> of freedom and security. Dive into the best of both worlds
              with XenFlexer, where
              <br /> your contracting career meets unparalleled opportunities
              and benefits!
            </text>
          </div>
          <div className="justify-center items-center flex px-10">
            <img src={sales} alt="sales" />
          </div>
        </div>
        <div className="py-10 px-5 sm:pr-20">
          <div className="border-4 rounded-3xl border-app-moss500 p-3">
            <div className="grid gap-2 mt-3 justify-center">
              <text className="text-app-gray900 font-semibold text-3xl">
                Contact Sales
              </text>
              <text className="text-app-gray font-normal text-base">
                Lets Gets the conversation started. Tell us a bit <br /> about
                yourself, and we will get in touch as soon as
                <br /> we can.
              </text>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-2 mt-8 justify-center">
                <label className="text-app-gray700 text-sm font-medium">
                  First Name*
                </label>
                <input
                  required
                  value={fname}
                  onChange={(e) => setFName(e.target.value)}
                  placeholder="Enter your first name"
                  className="border p-2 border-app-border rounded-md w-80"
                />
              </div>
              <div className="grid gap-2 mt-5 justify-center">
                <label className="text-app-gray700 text-sm font-medium">
                  Last Name*
                </label>
                <input
                  required
                  value={lname}
                  onChange={(e) => setLName(e.target.value)}
                  placeholder="Enter your last name"
                  className="border p-2 border-app-border rounded-md w-80"
                />
              </div>
              <div className="grid gap-2 mt-5 justify-center">
                <label className="text-app-gray700 text-sm font-medium">
                  Work Email*
                </label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  className="border p-2 border-app-border rounded-md w-80"
                />
              </div>
              <div className="grid gap-2 mt-5 justify-center">
                <label className="text-app-gray700 text-sm font-medium">
                  Message*
                </label>
                <textarea
                  required
                  rows={3}
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder="Enter your message"
                  className="border p-2 border-app-border rounded-md w-80"
                />
              </div>
              <div className="flex justify-center pb-8">
                <Button
                  variant="contained"
                  sx={{
                    color: "#ffffff",
                    fontWeight: 600,
                    textTransform: "none",
                    bgcolor: "#4F7A21",
                    marginTop: 3,
                    width: 320,
                  }}
                  type="submit">
                  Get Started
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
