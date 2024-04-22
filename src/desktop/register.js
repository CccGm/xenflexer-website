import React from "react";
import {
  Avatar,
  AvatarGroup,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import logo from "../assets/images/lOGO 1.png";
import { Header } from "./header";

export const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [no, setNo] = React.useState("");
  const [typeJob, setTypeJob] = React.useState("");
  const [interestedJob, setInterestedJob] = React.useState("");
  const [joinTeam, setJoinTeam] = React.useState("");

  const job = [
    "Join with a new contract found by XenFlexer",
    "Join XenFlexer with a new contract I secure independently",
    "Join XenFlexer with my current ongoing project",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name", name);
    console.log("email", email);
    console.log("no", no);
    console.log("typejob", typeJob);
    console.log("interestedJob", interestedJob);
    console.log("joinTeam", joinTeam);
  };

  const handleAccesCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setJoinTeam([...joinTeam, value]); // Add
    } else {
      setJoinTeam(joinTeam.filter((data) => data !== value)); // Remove
    }
  };

  return (
    <>
      <Header />
      <div className="grid grid-flow-col">
        <div className="p-10 bg-app-backGround">
          <div className="grid justify-center">
            <img src={logo} alt="logo" />
            <AvatarGroup
              max={3}
              sx={{ justifyContent: "center", marginTop: 3 }}>
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
              Disrupting the Enterprise Contracting
              <br /> Landscape
            </text>
            <text className="text-app-gray text-lg italic font-medium mt-5">
              Welcome to the XenFlexer Interest Signup, where <br /> we're
              reshaping the future of enterprise contracting.
              <br /> XenFlexer is at the forefront of revolutionizing the
              <br />
              contracting industry by offering unparalleled
              <br /> flexibility, transparency, and opportunities for
              <br /> consultants and clients alike. Whether you're a <br />
              seasoned professional looking for entry-level or
              <br /> advanced opportunities, or seeking the right blend of
              <br /> permanent and contract positions, XenFlexer is your
              <br /> gateway to a world where your skills are valued and <br />
              your career aspirations are met. Sign up today to be
              <br /> part of a community that's set on disrupting the
              <br /> enterprise contracting landscape, ensuring a more
              <br /> equitable, efficient, and empowering environment for
              <br /> everyone involved.
            </text>
          </div>
        </div>
        <div className="p-10 ">
          <div>
            <text className="text-app-gray900 font-semibold text-3xl">
              XenFlexer Interest Signup
            </text>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid mt-8">
              <label className="text-app-gray700 text-sm font-medium">
                Full Name*
              </label>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="border p-2 border-app-border rounded-md w-80"
              />
            </div>
            <div className="grid mt-3">
              <label className="text-app-gray700 text-sm font-medium">
                Email*
              </label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="border p-2 border-app-border rounded-md w-80"
              />
            </div>
            <div className="grid mt-3">
              <label className="text-app-gray700 text-sm font-medium">
                Phone number*
              </label>
              <input
                required
                type="tel"
                value={no}
                onChange={(e) => setNo(e.target.value)}
                placeholder="Enter your phone number"
                className="border p-2 border-app-border rounded-md w-80"
              />
            </div>
            <div className="grid mt-3">
              <label className="text-app-gray700 text-sm font-medium pb-1">
                What type of job opportunities are you most interested in?*
              </label>
              <RadioGroup
                row
                value={typeJob}
                onChange={(e) => setTypeJob(e.target.value)}>
                <FormControlLabel
                  name="non-entry"
                  value={"non-entry"}
                  control={<Radio />}
                  label="Non-Entry-Level Positions"
                />
                <FormControlLabel
                  name="entry"
                  value={"entry"}
                  control={<Radio />}
                  label="Entry-Level Positions"
                />
              </RadioGroup>
            </div>
            <div className="grid mt-2">
              <label className="text-app-gray700 text-sm font-medium pb-1">
                Are you interested in permanent or contract job opportunities?*
              </label>
              <RadioGroup
                row
                value={interestedJob}
                onChange={(e) => setInterestedJob(e.target.value)}>
                <FormControlLabel
                  name="permanent"
                  value={"permanent"}
                  control={<Radio />}
                  label="Permanent Positions"
                />
                <FormControlLabel
                  name="contract"
                  value={"contract"}
                  control={<Radio />}
                  label="Contract Positions"
                />
              </RadioGroup>
            </div>
            <div className="grid mt-2">
              <label className="text-app-gray700 text-sm font-medium pb-1">
                How would you prefer to join our team? (Applicable only if you
                <br />
                selected "Contract Positions" above.)*
              </label>
              {job.map((options) => (
                <FormControlLabel
                  key={options}
                  control={
                    <Checkbox
                      value={options}
                      checked={joinTeam.includes(options)}
                      onChange={handleAccesCheckboxChange}
                    />
                  }
                  label={options}
                />
              ))}
            </div>
            <Button
              variant="contained"
              sx={{
                color: "#ffffff",
                fontWeight: 600,
                textTransform: "none",
                bgcolor: "#4F7A21",
                marginTop: 3,
              }}
              type="submit">
              Get Start
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
