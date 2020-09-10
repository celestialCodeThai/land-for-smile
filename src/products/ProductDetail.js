import React from "react";
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
    position: "sticky",
    top: "10rem",
  },
}));

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ProductDetail = () => {
  const classes = useStyles();

  const center = {
    lat: 13.85,
    lng: 100.64,
  };

  const zoom = 11;

  return (
    <Container className={classes.container} maxWidth="lg">
      <div className="image-slide">
        <Card
          className={classes.card}
          style={{
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://picsum.photos/400/300"
              title="Contemplative Reptile"
            />
          </CardActionArea>
        </Card>
        <div className="image-item">
          <Card
            className={classes.card}
            style={{
              borderRadius: 0,
            }}
          >
            <CardActionArea>
              <CardMedia
                className={classes.mediaItem}
                image="https://picsum.photos/400/300"
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
          <Card
            className={classes.card}
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: 8,
              borderBottomRightRadius: 0,
            }}
          >
            <CardActionArea>
              <CardMedia
                className={classes.mediaItem}
                image="https://picsum.photos/400/300"
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
          <Card
            className={classes.card}
            style={{
              borderRadius: 0,
            }}
          >
            <CardActionArea>
              <CardMedia
                className={classes.mediaItem}
                image="https://picsum.photos/400/300"
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
          <Card
            className={classes.card}
            style={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomRightRadius: 8,
            }}
          >
            <CardActionArea>
              <CardMedia
                className={classes.mediaItem}
                image="https://picsum.photos/400/300"
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
        </div>
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
            ห้องมุมติดวิวด้านลานจอดรถ โครงการมี 2 อาคาร จำนวนห้องเพียง 50 ยูนิต
            ชั้นละ 5 ยูนิต มีลิฟท์โดยสาร 1 ตัว ด้านหน้ารับลม
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
                <div className="first-name">จุฑารัตน์</div>
                <div className="last-name">อยู่เรืองเดช</div>
              </div>
            </div>
            <div>Sale Director</div>
            <div>J&Y Landforsmile Co.,Ltd.</div>
            <div>md.landforsmile@gmail.com</div>
          </Paper>
        </div>
      </div>
      <div className="google-maps">
        <div className="title">ตำแหน่งที่ตั้ง</div>
        <div className="map">
          <GoogleMapReact
            //bootstrapURLKeys={{ key: "YOUR KEY HERE" }}
            defaultCenter={center}
            defaultZoom={zoom}
          >
            <AnyReactComponent
              lat={13.858264}
              lng={100.642936}
              text="My Marker"
            />
          </GoogleMapReact>
        </div>
      </div>
      <div className="nearby-places">
        <div className="title">สถานที่ใกล้เคียง</div>
        <NearbyPlaces />
      </div>
    </Container>
  );
};

export default ProductDetail;
