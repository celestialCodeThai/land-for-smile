import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: theme.spacing(10),
  },
  gridTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(5),
  },
  card: {
    maxWidth: "100%",
    marginBottom: theme.spacing(2),
  },
  media: {
    height: 220,
  },
}));

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const Content = () => {
  const classes = useStyles();
  return (
    <Container className={classes.gridContainer} maxWidth="lg">
      <Typography variant="h4" className={classes.gridTitle}>
        รายการอสังหาฯ
      </Typography>
      <Grid container spacing={3}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://picsum.photos/400/300"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    ฿1,400,000
                  </Typography>
                  <Typography gutterBottom variant="subtitle1">
                    ห้องชุด SW Condominium (สุรีย์พร คอนโดมิเนียม)
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    30434.78 บาท ราคา/ตร.ม. | 46 ตร.ม. (495 ตารางฟุต) | 1
                    ห้องนอน | 1 ห้องน้ำ
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Content;
