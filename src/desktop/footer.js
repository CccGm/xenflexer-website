import React from "react";
import { Avatar, AvatarGroup, Button } from "@mui/material";
import logo from "../assets/images/lOGO 1.png";

export const Footer = () => {
  return (
    <div>
      <div className="mt-16 grid grid-flow-row text-center justify-center gap-4">
        <AvatarGroup max={3} sx={{ justifyContent: "center" }}>
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

        <text className="text-app-gray900  text-5xl">
          Join the Revolution with XenFlexer
        </text>
        <text className="text-app-gray text-lg ">
          We're kicking off our journey in the IT industry, spearheading a new
          era of freedom,
          <br /> flexibility, and growth for consultants. Ready to redefine your
          career? Even if you're not in <br />
          IT, we want to hear from you! Let us know your industry, and join our
          waiting list. Be the
          <br /> first to experience how XenFlexer can transform your work life.
          Sign up now, and we'll <br />
          reach out as we expand into your field. Don't miss out on being part
          of this
          <br /> groundbreaking movement.
        </text>
        <div>
          <Button
            variant="contained"
            sx={{
              color: "#ffffff",
              fontWeight: 600,
              textTransform: "none",
              bgcolor: "#4F7A21",
            }}>
            Get in touch
          </Button>
        </div>
      </div>
      {/* footer */}
      <footer className="w-full px-28 mt-20 grid grid-flow-col items-center justify-between">
        <img src={logo} alt="logo" />
        <text style={{ color: "#667085" }}>
          © 2024 Xenspire. All rights reserved.
        </text>
      </footer>
    </div>
  );
};
