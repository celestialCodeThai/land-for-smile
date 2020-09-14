import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import TextField from "@material-ui/core/TextField";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import SearchIcon from "@material-ui/icons/Search";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(images/hero-1.jpg)`,
    height: ({ md, sm }) => (md ? 600 : sm ? 500 : 400),
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // marginTop: theme.spacing(9),
  },
  title: {
    color: "white",
    fontSize: ({ md, sm }) => (md ? "4rem" : sm ? "2rem" : "1.5rem"),
  },
  buttonGroup: {
    marginTop: theme.spacing(2),
    width: ({ md, sm }) => (md ? "50%" : sm ? "70%" : "90%"),
  },
  button: {
    width: "100%",
    height: ({ md, sm }) => (md ? 60 : sm ? 50 : 50),
    fontSize: ({ md, sm }) => (md ? 24 : sm ? 20 : 16),
  },
  textField: {
    width: "100%",
  },
  boxTextField: {
    backgroundColor: "white",
    marginTop: theme.spacing(3),
    display: "flex",
    alignItems: "center",
    width: ({ md, sm }) => (md ? "50%" : sm ? "70%" : "90%"),
  },
}));

const Hero = () => {
  const md = useMediaQuery("(min-width:950px)");
  const sm = useMediaQuery("(min-width:480px)");
  const classes = useStyles({ md, sm });
  const { productTag, setProductTag } = useContext(FilterContext);

  const handleClickButton = (buttonType) => {
    setProductTag(buttonType);
  };

  return (
    <Box className={classes.hero}>
      <Box className={classes.title}>Thailand's Real Estate</Box>
      <ButtonGroup variant="contained" className={classes.buttonGroup}>
        <Button
          className={classes.button}
          color={productTag === "sell" ? "primary" : "secondary"}
          onClick={() => handleClickButton("sell")}
        >
          ซื้อ
        </Button>
        <Button
          className={classes.button}
          color={productTag === "rent" ? "primary" : "secondary"}
          onClick={() => handleClickButton("rent")}
        >
          เช่า
        </Button>
      </ButtonGroup>
      <Box className={classes.boxTextField} borderRadius={4}>
        <TextField
          placeholder="ค้นหาจากชื่อโครงการ"
          className={classes.textField}
          variant="outlined"
          type="search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
