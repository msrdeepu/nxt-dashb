import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const AlertData = [
  {
    id: 2,
    type: "warning",
    message: "Please Monitor the Share Market!...",
  },
  {
    id: 3,
    type: "info",
    message: "Client from UK expressed Positive Opinion on latest Progress",
  },
  {
    id: 4,
    type: "success",
    message: "USA Project Delivered Succesfully...",
  },
  {
    id: 1,
    type: "error",
    message: "Project encountered an error please check immediately",
  },
  {
    id: 5,
    type: "success",
    message: "Dashboard Project Completed Succesfully...",
  },
  {
    id: 6,
    type: "info",
    message: "We are going to IPO in Soon...",
  },
];
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Notifies = () => {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <h1>Alerts & Notifies</h1>
      {AlertData.map((item) => {
        return (
          <Alert severity={item.type} key={item.id}>
            {item.message}
          </Alert>
        );
      })}
      {/* {" "}
      <Alert severity="error">This is an error message!</Alert>
      <Alert severity="warning">This is a warning message!</Alert>
      <Alert severity="info">This is an information message!</Alert>
      <Alert severity="success">This is a success message!</Alert> */}
    </Stack>
  );
};

export default Notifies;
