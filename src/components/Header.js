import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import teal from "@material-ui/core/colors/teal";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { navigate } from "@reach/router";

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
    backgroundColor: teal[50],
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
    display: ({ sm }) => (sm ? "block" : "none"),
  },
  icon: {
    display: ({ sm }) => (sm ? "none" : "block"),
  },
}));

const Header = (props) => {
  const sm = useMediaQuery("(min-width:480px)");
  const classes = useStyles({ sm });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const backToHome = () => {
    scrollTop();
    navigate("/");
  };
  return (
    <div className="header-container">
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar}>
          <Toolbar className={classes.toolBar}>
            <Typography
              variant="h5"
              color="primary"
              className={classes.logo}
              onClick={() => backToHome()}
            >
              landforsmile
            </Typography>
            <Button
              className={classes.button}
              color="primary"
              variant="outlined"
            >
              About Us
            </Button>
            <IconButton className={classes.icon}>
              <MenuIcon color="primary" fontSize="large" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default Header;
