import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const HideOnScroll = (props) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func,
};

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#ffffff",
    display: "flex",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-around",
  },
  logo: {
    fontWeight: 800,
    cursor: "pointer",
  },
  button: {
    border: "none",
  },
  icon: {
    display: ({ sm }) => (sm ? "none" : "block"),
  },
}));

const Header = (props) => {
  const sm = useMediaQuery("(min-width:480px)");
  const classes = useStyles({ sm });
  return (
    <div className="header-container">
      <CssBaseline />
      {/* <HideOnScroll {...props}> */}
      <AppBar className={classes.appBar} >
        <Toolbar className={classes.toolBar}>
          <a href="http://localhost:3000/" className="link-action">
              <img src="/icon/logo.jpg" width={200} height={25} mode='fill'/>
          </a>

          <Button className={classes.button} color="primary" variant="outlined">
            About Us
          </Button>
          <Button className={classes.button} color="primary" variant="outlined">
            Contact Us
          </Button>

          <Button className={classes.button} color="primary" variant="outlined">
             Sale Your Property
          </Button>

          <Button className={classes.button} color="primary" variant="outlined">
            Career
          </Button>
       
     
          <IconButton className={classes.icon}>
            <MenuIcon color="primary" fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* </HideOnScroll> */}
    </div>
  );
};

export default Header;
