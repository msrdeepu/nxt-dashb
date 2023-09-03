import * as React from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { orange, red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import StarIcon from "@mui/icons-material/Star";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

//hooks
import { useState, useEffect } from "react";
import { data } from "autoprefixer";

function CardLayoutModel() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [stock, setStock] = useState("");

  async function getProducts() {
    for (let i = 0; i <= 29; i++) {
      // return i;
    }

    let i = 7;
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data.products);
    setId(data.products[i].id);
    setTitle(data.products[i].title);
    setCategory(data.products[i].category);
    setImage(data.products[i].images[0]);
    setDescription(data.products[i].description);
    setPrice(data.products[i].price);
    setRating(data.products[i].rating);
    setStock(data.products[i].stock);
  }

  useEffect(function () {
    getProducts();
  }, []);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: orange[500] }} aria-label="recipe">
            {id}
          </Avatar>
        }
        title={title}
        subheader={`Category: ${category}`}
      />
      <CardMedia component="img" height="300" image={image} alt={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button startIcon={<AttachMoneyIcon />}>{price}</Button>
        <Button>Stock:{stock}</Button>
        <Button startIcon={<StarIcon />}>{rating}</Button>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default function ProductsList() {
  return <CardLayoutModel />;
}
