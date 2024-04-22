import React from "react";
import { Avatar, AvatarGroup, Button } from "@mui/material";
import logo from "../assets/images/lOGO 1.png";

export const ContactUp = () => {
  const [fname, setFName] = React.useState("");
  const [lname, setLName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [msg, setMsg] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("fname", fname);
    console.log("lname", lname);
    console.log("email", email);
    console.log("msg", msg);
  };

  return (
    <div className="grid grid-flow-col">
      <div className="p-10">
        <div className="grid justify-center">
          <img src={logo} alt="logo" />
          <AvatarGroup max={3} sx={{ justifyContent: "center", marginTop: 3 }}>
            <Avatar
              alt="Remy Sharp"
              src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            />
            <Avatar
              alt="Travis Howard"
              src="https://eu.ui-avatars.com/api/?name=Ghelani+Mihir&size=250"
            />
            <Avatar
              alt="Cindy Baker"
              src="https://avatar.iran.liara.run/public/boy?username=Ash"
            />
          </AvatarGroup>
        </div>
        <div className="grid justify-center text-center px-10">
          <text className="text-app-gray900 text-3xl font-semibold mt-5">
            Unlock More Value with
            <br /> Freedom and Transparency
          </text>
          <text className="text-balance text-xl font-normal mt-5">
            Experience the power of choice and clarity with <br /> every
            opportunity, only at XenFlexer. Powered
            <br /> by XenHire's precision matching, we offer an
            <br /> unrivaled blend of freedom and security. Dive
            <br /> into the best of both worlds with XenFlexer,
            <br /> where your contracting career meets <br />
            unparalleled opportunities and benefits!
          </text>
        </div>
      </div>
      <div className="p-10">
        <div className="grid gap-2">
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
          <div className="grid mt-8">
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
          <div className="grid mt-5">
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
          <div className="grid mt-5">
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
          <div className="grid mt-5">
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
        </form>
      </div>
    </div>
  );
};
