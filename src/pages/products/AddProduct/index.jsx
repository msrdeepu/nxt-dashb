import { Grid } from "@mui/material";
import { Card } from "@mui/material";
import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { Input } from "@mui/material";
import { Typography } from "@mui/material";

import "../../../app/globals.css";

//icons
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import SaveIcon from "@mui/icons-material/Save";

const index = () => {
  return (
    <>
      <Card className="p-4">
        <Typography variant="h5" className="text-center">
          Add New Product
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <TextField
            id="standard-basic"
            label="Product Name"
            variant="standard"
            type="text"
          />

          <TextField
            id="standard-basic"
            label="Price"
            variant="standard"
            type="number"
          />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value=""
              onChange=""
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <Input type="file" style={{ display: "none" }} id="fileInput" />
            <label htmlFor="fileInput">
              <Button
                startIcon={<CameraAltIcon />}
                variant="outlined"
                color="primary"
                component="span"
              >
                Upload Image
              </Button>
            </label>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              component="span"
              startIcon={<SaveIcon />}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Card>
    </>
  );
};

export default index;
