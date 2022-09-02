import React from "react";
import Style from "./home.module.scss";
import me from "../../img/self.png";
import partner1 from "../../img/Partner1.png"
import { Box } from "@mui/material";


let colors = ["rgb(0, 128, 128)", "rgb(224, 81, 171)"];

const info = {
    firstName: "Brian",
    lastName: "Lalli",
    selfPortrait: "self", // don't change this unless you want to name your self-portrait in the "img" folder something else!
    partner1: "partner1",
    // partner2: "partner2",
    // partner3: "partner3",
    // partner3: "partner3",
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
  };

  
  export default function Home() {
    return (
      <Box
        component={"main"}
        display={"flex"}
        flexDirection={{ xs: "column", md: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        minHeight={"calc(100vh - 175px)"}
      >
        <Box
          alt={"image of user"}
          style={{ background: info.gradient }}
          component={"img"}
          src={me}
          width={{ xs: "35vh", md: "40vh" }}
          height={{ xs: "35vh", md: "40vh" }}
          borderRadius={"50%"}
          p={"0.75rem"}
          mb={{ xs: "1rem", sm: 0 }}
          mr={{ xs: 0, md: "2rem" }}
        />
        <Box
          display={"flex"}
          gap={"1.5rem"}
          justifyContent={"center"}
          alt={"image of partner"}
          style={{ background: info.gradient }}
          component={"img"}
          src={partner1}
          width={{ xs: "35vh", md: "40vh" }}
          height={{ xs: "35vh", md: "40vh" }}
          borderRadius={"50%"}
          p={"0.75rem"}
          mb={{ xs: "1rem", sm: 0 }}
          mr={{ xs: 0, md: "2rem" }}
        >
        </Box>
      </Box>
      );
    }

