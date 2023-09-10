import { Col, Row } from "antd";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red, blue } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
const ProductData = [
  {
    id: 1,
    title: "iPhone 9",
    brand: "Apple",
    price: 894,
    stock: "52",
    rating: 4.3,
    img: "https://i.dummyjson.com/data/products/1/3.jpg",
    description: "An apple mobile which is nothing like apple",
  },
  {
    id: 2,
    title: "iPhone X",
    brand: "Apple",
    price: 899,
    stock: 34,
    rating: 4.3,
    img: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  },
  {
    id: 3,
    title: "Samsung Universe 9",
    brand: "Samsung",
    price: 1249,
    stock: 36,
    rating: 4.09,
    img: "https://i.dummyjson.com/data/products/3/1.jpg",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
  },
  {
    id: 4,
    title: "OPPOF19",
    brand: "OPPO",
    price: 280,
    stock: 123,
    rating: 4.3,
    img: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    description: "OPPO F19 is officially announced on April 2021.",
  },
  {
    id: 5,
    title: "Huawei P30",
    brand: "Huawei",
    price: 499,
    stock: 32,
    rating: 4.09,
    img: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    description:
      "re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
  },
  {
    id: 6,
    title: "MacBook Pro",
    brand: "Apple",
    price: 1749,
    stock: 83,
    rating: 4.57,
    img: "https://i.dummyjson.com/data/products/6/thumbnail.png",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
  },
  {
    id: 7,
    title: "iPhone 9",
    brand: "Apple",
    price: 894,
    stock: "52",
    rating: 4.3,
    img: "https://i.dummyjson.com/data/products/1/3.jpg",
    description: "An apple mobile which is nothing like apple",
  },
  {
    id: 8,
    title: "iPhone X",
    brand: "Apple",
    price: 899,
    stock: 34,
    rating: 4.3,
    img: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
    description:
      "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
  },
  {
    id: 9,
    title: "Samsung Universe 9",
    brand: "Samsung",
    price: 1249,
    stock: 36,
    rating: 4.09,
    img: "https://i.dummyjson.com/data/products/3/1.jpg",
    description:
      "Samsung's new variant which goes beyond Galaxy to the Universe",
  },
  {
    id: 10,
    title: "OPPOF19",
    brand: "OPPO",
    price: 280,
    stock: 123,
    rating: 4.3,
    img: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
    description: "OPPO F19 is officially announced on April 2021.",
  },
  {
    id: 11,
    title: "Huawei P30",
    brand: "Huawei",
    price: 499,
    stock: 32,
    rating: 4.09,
    img: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
    description:
      "re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
  },
  {
    id: 12,
    title: "MacBook Pro",
    brand: "Apple",
    price: 1749,
    stock: 83,
    rating: 4.57,
    img: "https://i.dummyjson.com/data/products/6/thumbnail.png",
    description:
      "MacBook Pro 2021 with mini-LED display may launch between September, November",
  },
];

function CardLayout(item) {
  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: "2px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: blue[500] }} aria-label="recipe">
              {item.id}
            </Avatar>
          }
          title={item.title}
          subheader={item.brand}
        />
        <CardMedia
          component="img"
          height="250"
          image={item.img}
          alt={item.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button variant="text">Stock: 52</Button>
          <Button variant="text" startIcon={<AttachMoneyIcon />}>
            {item.price}
          </Button>

          <Button variant="text" endIcon={<StarIcon />}>
            4.3
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

const Products = () => {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          color: "orange",
          fontSize: "28px",
          padding: "5px",
        }}
      >
        <h1 className="text-4xl text-red-400 text-center">Products</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {ProductData.map(CardLayout)}{" "}
      </div>
    </>
  );
};

export default Products;
