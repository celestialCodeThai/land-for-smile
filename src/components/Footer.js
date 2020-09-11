import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import teal from "@material-ui/core/colors/teal";

const Footer = () => {
  return (
    <div className="footer-container">
      <CssBaseline />
      <Typography style={{ backgroundColor: teal[50], height: 300 }} />
    </div>
  );
};

export default Footer;
