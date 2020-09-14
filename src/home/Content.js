import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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

  return (
    <Container className={classes.gridContainer} maxWidth="lg">
      <Typography variant="h4" className={classes.gridTitle}>
        รายการอสังหาสำหรับซื้อ
      </Typography>
      <Grid container spacing={3}>
        {products.map((product, index) => (
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
                      ฿1,400,000
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      className={classes.name}
                    >
                      {product.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </a>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Content;
