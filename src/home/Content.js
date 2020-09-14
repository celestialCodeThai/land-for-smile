import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import FilterContext from "../context/FilterContext";
import { products } from "./testDatas";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: theme.spacing(10),
  },
  gridTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(5),
  },
  card: {
    maxWidth: "100",
    marginBottom: theme.spacing(2),
  },
  media: {
    height: ({ sm }) => (sm ? 220 : 180),
  },
  name: {
    minHeight: 150,
  },
}));

const Content = () => {
  const sm = useMediaQuery("(min-width:480px)");
  const classes = useStyles({ sm });

  const { productTag, setProductTag } = useContext(FilterContext);
  const tag = productTag === "sell" ? "ซื้อ" : "เช่า";
  return (
    <Container className={classes.gridContainer} maxWidth="lg">
      <Typography variant="h4" className={classes.gridTitle}>
        {`รายการอสังหาสำหรับ${tag}`}
      </Typography>
      <Grid container spacing={3}>
        {products
          .filter((product) => product.tag === productTag)
          .map((product, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                <a
                  href={`http://localhost:3000/product/${product.id}`}
                  className="link-action"
                >
                  <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia
                        className={classes.media}
                        image="https://picsum.photos/400/300"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h6">
                          {`฿${product.price}`}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="subtitle1"
                          className={classes.name}
                        >
                          {product.name}
                        </Typography>
                        <Typography
                          gutterBottom
                          variant="caption"
                          className={classes.name}
                        >
                          {product.district + " " + product.city}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </a>
              </Grid>
            );
          })}
      </Grid>
    </Container>
  );
};

export default Content;
