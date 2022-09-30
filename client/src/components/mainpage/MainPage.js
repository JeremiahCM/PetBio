import React from "react";
//import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import NavBar from "../navbar/NavBar";
import Paper from "@mui/material/Paper";
import "./MainPage.css";
import TestChart from "../testchart/TestChart";
import BackgroundImage from "../backgrounds/Background";
import BackgroundImage2 from "../backgrounds/Background-2";

const tfStyle = {
  "& .MuiOutlinedInput-root": {
    color: "#47bfaf",
    fontFamily: "Montserrat",
    "&.Mui-focused fieldset": {
      borderColor: "#47bfaf",
    },
    "&:hover fieldset": {
      borderColor: "#47bfaf",
    },
  },
};

function MainPage({ children }) {
  return (
    <Box className="App">
      <Helmet>
        <title>Home | PetBio</title>
      </Helmet>
      <BackgroundImage />
      <BackgroundImage2 />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <NavBar className="Navbar" />
      </Grid>
      <Grid
        className="content"
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ bgcolor: "white", height: "100vh", color: "black" }}
      >
        <Box sx={{ zIndex: 1 }}>{children}</Box>
      </Grid>
    </Box>
  );
}

export default MainPage;
