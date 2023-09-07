import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";
import { Box } from "@mui/material";

import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Collapse from "@mui/material/Collapse";

const Deposits = () => {
  return (
    <>
      <Card sx={{ maxWidth: "100%", height: "100%" }}>
        <CardMedia
          component="img"
          height="194"
          image="https://img.freepik.com/premium-photo/digital-design-businessman-show-increase-market-graphic_35761-546.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="h4" color={"text.primary"}>
            Marketing Analysis
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests.
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Deposits;
