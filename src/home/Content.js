import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  button: {
    width: 200,
    height: 50,
  },
  textField: {
    width: 350,
  },
}));

const Content = () => {
  const classes = useStyles();

  return (
    <div className="content-container">
      <div className="action-button">
        <ButtonGroup size="large" color="primary">
          <Button className={classes.button}>ซื้อ</Button>
          <Button className={classes.button}>เช่า</Button>
        </ButtonGroup>
      </div>
      <div className="search-box">
        <TextField className={classes.textField} variant="outlined" />
        <div className="search-icon">
          <SearchIcon fontSize="large" style={{ fill: "white" }} />
        </div>
      </div>
    </div>
  );
};

export default Content;
