import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavDrawer.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";

export default function NavDrawer() {
  const [dogNames, setDogNames] = useState(null);
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  useEffect(() => {
    const fetchDogNames = async () => {
      const response = await fetch("http://localhost:5000/pets/view-all");
      const json = await response.json();

      if (response.ok) {
        setDogNames(json);
      }
    };

    fetchDogNames();
  }, []);

  const list = (anchor) => (
    <Box
      className="drawerBox"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 225,
        /*bgcolor: "#031e45",*/
        color: "#47bfaf",
        fontWeight: "750",
        backgroundColor: "transparent",
        right: "0",
        marginTop: "7rem",
        textDecoration: "none",
      }}
    >
      <List
        sx={{
          bgcolor: "transparent",
          fontSize: "1.5rem",
          textDecoration: "none",
        }}
      >
        <ListItem sx={{ fontSize: "1.5rem" }} button>
          <ListItemText
            sx={{ fontSize: "1.5rem" }}
            disableTypography
            primary="Logout"
          />
        </ListItem>
        <ListItem sx={{ fontSize: "1.5rem" }} button>
          <Link sx={{ fontSize: "1.5rem" }} to="/account">
            Account
          </Link>
        </ListItem>
      </List>

      <List>
        <ListItem sx={{ fontSize: "1.5rem" }} button>
          <InputLabel sx={{ fontSize: "1.5rem" }}>Select Pet</InputLabel>
          <Select
            sx={{ fontSize: "1.5rem", textDecoration: "none" }}
            disableTypography
            primary="Select Pet"
          >
            {dogNames &&
              dogNames.map((dogName) => (
                <MenuItem key={dogNames._id}>
                  <Link
                    sx={{ fontSize: "1.5rem" }}
                    to="/view-pet"
                    
                  >
                    {dogName.name}
                  </Link>
                </MenuItem>
              ))}
          </Select>
        </ListItem>
        <ListItem sx={{ fontSize: "1.5rem", textDecoration: "none" }} button>
          <Link sx={{ fontSize: "1.5rem" }} to="/view-pet">
            View Pet
          </Link>
        </ListItem>
      </List>
      <List>
        <ListItem sx={{ fontSize: "1.5rem", textDecoration: "none" }} button>
          <ListItemText
            sx={{ fontSize: "1.2rem" }}
            disableTypography
            primary="Feeding Tracker"
          />
        </ListItem>
        <ListItem sx={{ fontSize: "1.5rem", textDecoration: "none" }} button>
          <ListItemText
            sx={{ fontSize: "1.2rem" }}
            disableTypography
            primary="Weight Tracker"
          />
        </ListItem>
        <ListItem sx={{ fontSize: "1.5rem", textDecoration: "none" }} button>
          <ListItemText
            sx={{ fontSize: "1.2rem" }}
            disableTypography
            primary="Add a Tracker"
          />
        </ListItem>
        <ListItem
          sx={{ fontSize: "1.5rem", textDecoration: "none" }}
          button
        ></ListItem>
      </List>
    </Box>
  );

  return (
    <div className="burger">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon
            sx={{ color: "white", height: "10vh", width: "10vh" }}
            onClick={toggleDrawer(anchor, true)}
            fontSize="large"
          >
            {anchor}
          </MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{
              elevation: 0,
              bgcolor: "transparent",
              top: "4rem",
              boxShadow: 0,
              margin: 0,
              fontweight: 500,
              lineheight: "1.5",
              fontSize: "1.2rem",
              display: "block",
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
