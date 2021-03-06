import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import GoogleMapReact from "google-map-react";
import NearbyPlaces from "./NearbyPlaces";
import Button from "@material-ui/core/Button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { navigate } from "@reach/router";
import GalleryLightbox from "../lightbox";
import Skeleton from '@material-ui/lab/Skeleton';


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(15),
  },
  card: {
    // borderRadius: 0,
    width: "100",
    height: "100",
  },
  media: {
    height: 415,
  },
  mediaItem: {
    height: 200,
  },
  paper: {
    padding: theme.spacing(2),
    // position: "sticky",
    // top: "10rem",
  },
  lineButton: {
    marginTop: theme.spacing(1),
    width: "100%",
  },
  phoneButton: {
    width: "100%",
  },
}));

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const Product = (props) => {
  const classes = useStyles();
  const { productId } = props;
  const [products, setProducts] = useState(999);
  const [loadedMain, setLoadedMain] = useState(false);
  const [loadedImg1, setLoadedloadedImg1] = useState(false);
  const [loadedImg2, setLoadedloadedImg2] = useState(false);
  const [loadedImg3, setLoadedloadedImg3] = useState(false);
  const [loadedImg4, setLoadedloadedImg4] = useState(false);

  useEffect(() => {
    setProducts(productId);
    scrollTop();
  }, [productId]);

  const phoneNumber = "tel:0910036300";

  const getMapsUrl = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3873.678906978113!2d100.64069031496125!3d13.858302590278551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d639376e9c553%3A0x7f5cc1c8480e0590!2sCelestialcode%20Co.%2CLTD!5e0!3m2!1sth!2sth!4v1600076932536!5m2!1sth!2sth" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>';
  const mapsUrl = getMapsUrl.split('"')[1];

  return (
    <div>
      <Header />
      <Container className={classes.container} maxWidth="lg">
        <div className="image-slide">
                <img
                  width="100%"
                  style={loadedMain ? {} : { display: 'none' }}
                  className={classes.media}
                  src={"https://picsum.photos/400/300"}
                  onLoad={()=>setLoadedMain(true)}
                />
              {!loadedMain &&
                  <Skeleton animation="wave" variant="rect" width="100%" > <CardMedia
                    className={classes.media}
                    title="Contemplative Reptile"
                  /></Skeleton>
               }
          <div className="image-item">
          <img
                  width="100%"
                  style={loadedImg1 ? {} : { display: 'none' }}
                  className={classes.mediaItem}
                  src={"https://picsum.photos/400/500"}
                  onLoad={()=>setLoadedloadedImg1(true)}
                />
              {!loadedImg1 &&
                  <Skeleton animation="wave" variant="rect" width="100%" > <CardMedia
                    className={classes.mediaItem}
                    title="Contemplative Reptile"
                  /></Skeleton>
               }

<img
                  width="100%"
                  style={loadedImg2 ? {} : { display: 'none' }}
                  className={classes.mediaItem}
                  src={"https://picsum.photos/400/100"}
                  onLoad={()=>setLoadedloadedImg2(true)}
                />
              {!loadedImg2 &&
                  <Skeleton animation="wave" variant="rect" width="100%" > <CardMedia
                    className={classes.mediaItem}
                    title="Contemplative Reptile"
                  /></Skeleton>
               }
            <img
                  width="100%"
                  style={loadedImg3 ? {} : { display: 'none' }}
                  className={classes.mediaItem}
                  src={"https://picsum.photos/400/200"}
                  onLoad={()=>setLoadedloadedImg3(true)}
                />
              {!loadedImg3 &&
                  <Skeleton animation="wave" variant="rect" width="100%" > <CardMedia
                    className={classes.mediaItem}
                    title="Contemplative Reptile"
                  /></Skeleton>
               }

<img
                  width="100%"
                  style={loadedImg4 ? {} : { display: 'none' }}
                  className={classes.mediaItem}
                  src={"https://picsum.photos/400/400"}
                  onLoad={()=>setLoadedloadedImg4(true)}
                />
              {!loadedImg4 &&
                  <Skeleton animation="wave" variant="rect" width="100%" > <CardMedia
                    className={classes.mediaItem}
                    title="Contemplative Reptile"
                  /></Skeleton>
               }
           
          </div>
          <GalleryLightbox />
        </div>
        <div className="product-text">
          <div className="product-detail">
            <div className="title">
              ห้องชุด SW Condominium (สุรีย์พร คอนโดมิเนียม)
              ใกล้โรงเรียนนวมินทราชูทิศ
            </div>
            <div className="sub-title">
              <div className="price">14,000 บาท/เดือน</div>
              <div className="attribute">
                ผู้เข้าพัก 4 คน · 1 ห้องนอน · 3 เตียง · ห้องน้ำ 1 ห้อง
              </div>
            </div>
            <div className="detail -first">
              ต้องการขายด่วน ห้องชุด ชั้น 5 อาคาร A เฟอร์ฯ บางส่วน
              ห้องมุมติดวิวด้านลานจอดรถ โครงการมี 2 อาคาร จำนวนห้องเพียง 50
              ยูนิต ชั้นละ 5 ยูนิต มีลิฟท์โดยสาร 1 ตัว ด้านหน้ารับลม
              ไม่มีห่้องตรงข้ามบัง เจ้าของใชประโยขน์น้อยมาก เนื่องจากไกลที่ทำงาน
              พื้นปูปาร์เก้ ห้องน้ำกับห้องครัวแยกอยู่บริเวณระเบียงหลัง ยาว 4.18
              เมตร มีเครื่องปรับอากาศแถม 2 เครื่อง เฟอร์บิวส์อิน
            </div>
            <div className="detail">
              <div className="item">สิ่งอำนวยความสะดวก</div>
              <div className="item">1. ลิฟต์</div>
              <div className="item">2. ตู้กดน้ำหยอดเหรียญ</div>
              <div className="item">3. เครื่องซักผ้าหยอดเหรียญ</div>
              <div className="item">4. ร้านอาหารและเครื่องดื่มใต้ตึก</div>
              <div className="item">5. พื้นที่จอดรถพอสำหรับทุกห้องพัก</div>
            </div>
            <div className="detail -last">
              <div className="item">สถานที่ใกล้เคียง</div>
              <div className="item">1. ห้างแฟชั่นไอแลนด์</div>
              <div className="item">2. โลตัสสุขาภิบาล 1</div>
              <div className="item">3. โรงพยาบาลสินแพทย์</div>
              <div className="item">4. โรงเรียนนวมินทร์กรุงเทพมหานคร</div>
              <div className="item">
                5. อยู่ระหว่างสนามบินดอนเมืองและสุวรรณภูมิ เดินทางไม่ถึง 1
                ชั่วโมงก็ถึง และมีอีกหลายที่เยอะจัดค่ะ
              </div>
            </div>
          </div>
          <div className="contact">
            <Paper elevation={3} className={classes.paper}>
              <div className="director-info">
                <div className="image">
                  <img
                    src="https://picsum.photos/128/128"
                    className="img-avatar"
                  />
                </div>
                <div className="info">
                  <div className="name">จุฑารัตน์ อยู่เรืองเดช</div>
                  <div className="job">Sale Director</div>
                </div>
              </div>
              <div className="company-info">
                <div className="name">J&Y Landforsmile Co.,Ltd.</div>
                <div className="email">md.landforsmile@gmail.com</div>
              </div>
              <div className="contact-action">
                <a className="link-action" href={phoneNumber}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.phoneButton}
                  >
                    call
                  </Button>
                </a>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.lineButton}
                  onClick={() => window.open(`https://line.me/ti/p/j8iKTMu7u3`)}
                >
                  add line
                </Button>
              </div>
            </Paper>
          </div>
        </div>
        <div className="google-maps">
          <div className="title">ตำแหน่งที่ตั้ง</div>
          <div className="map">
            <iframe
              src={mapsUrl}
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
            ></iframe>
          </div>
        </div>
        <div className="nearby-places">
          <div className="title">สถานที่ใกล้เคียง</div>
          <NearbyPlaces />
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Product;
