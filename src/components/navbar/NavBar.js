import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person"; // import logo from "../../assets/commerce.png";
import useStyles from "./styles";
import { Link } from "react-router-dom";

const Navbar = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <AppBar position="fixed" classname={classes.appBar} color="inherit">
          <Toolbar>
            <Typography
              style={{ cursor: "pointer" }}
              variant="h6"
              className={classes.title}
              color="inherit"
            >
              <a
                style={{
                  alignItems: "center",
                  display: "flex",
                  textDecoration: "none",
                  color:"black"
                }}
                href="/"
              >
                Movie Place
              </a>
            </Typography>

            <Typography
              href="/favorites"
              style={{ cursor: "pointer", fontWeight: 600 }}
              variant="p"
              className={classes.title}
              color="inherit"
            >
              <a
                style={{
                 
                  alignItems: "center",
                  display: "flex",
                  textDecoration: "none",
                  color:"black"
                }}
                href="/favorites"
              >
                Favorites
              </a>
            </Typography>
            <Typography
              style={{ cursor: "pointer", fontWeight: 600 }}
              variant="p"
              className={classes.title}
              color="inherit"
            >
              New Releases
            </Typography>
            <Typography
              style={{ cursor: "pointer", fontWeight: 600 }}
              variant="p"
              className={classes.title}
              color="inherit"
            >
              Soon
            </Typography>
            <div className={classes.grow} />
            <div className={classes.button}>
              <IconButton aria-label="Show cart items" color="inherit">
                <Badge badgeContent={0} color="secondary">
                  <PersonIcon />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Navbar;
