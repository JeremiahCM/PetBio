import React from "react";
//import { Route, Routes } from "react-router-dom";
import Box from '@mui/material/Box';
import { Grid} from "@mui/material";
import NavBar from '../navbar/NavBar'
import  './MainPage.css';
import {Helmet} from 'react-helmet';
import Paper from "@mui/material/Paper";
import TestChart from "../testchart/TestChart";

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
        <title>Home |  PetBio</title>
        </Helmet>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center">
          <NavBar className="Navbar"/>
        </Grid>
        <Grid className="content"
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"

          sx={{bgcolor: "white", height: "100vh",color: "black"}}
        >
          {children}

        </Grid>
    </Box>
  );
}

export default MainPage;
