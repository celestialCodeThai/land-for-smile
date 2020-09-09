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
    height: 80,
    display: "flex",
    justifyContent: "center",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    fontWeight: 800,
    cursor: "pointer",
  },
  button: {
    border: "none",
    fontWeight: 500,
    marginRight: theme.spacing(5),
    fontSize: "16px",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const sm = useMediaQuery("(min-width:480px)");
  return (
    <div className="header-container">
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar className={classes.appBar} position="fixed">
          <Toolbar className={classes.toolBar}>
            <Typography
              variant="h6"
              color="primary"
              className={classes.logo}
              onClick={() => console.log(`Back to Home`)}
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
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
};

export default Header;
