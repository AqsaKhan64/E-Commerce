import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@emotion/react";
import { createTheme, Grid } from "@mui/material";
const formTheme = createTheme({
  shape: {
    borderRadius: 0,
  },
});
const styles = {
  root: {
    backgroundColor: "White",
    width: "30%",
    marginBlock: 1,
    border: "1px solid #FD8F5F",
    color: "#FD8F5F",
    paddingBlock: 2,
    "&:hover": {
      border: "1px solid #FD8F5F",
      color: "white",
      backgroundColor: "#FD8F5F",
      cursor: "pointer",
    },
  },
};
export default function Form() {
  return (
    <ThemeProvider theme={formTheme}>
      <Box component="form">
        <Grid>
          <Grid item xs={12}>
          <TextField
          label="Enter Message"
          multiline
          maxRows={10}
          variant="outlined"
          sx={{ width: "100%", height: "100%", marginBottom: 3 }}
        />
          </Grid>
        </Grid>
        <br />
        <TextField
          label="Enter Name"
          variant="outlined"
          sx={{ width: "48%", height: "100%", marginBottom: 3, marginRight: 1 }}
        />
        <TextField
          label="Email"
          variant="outlined"
          sx={{ width: "50%", height: "100%", marginBottom: 3 }}
        />{" "}
        <br />
        <TextField
          label="Subject"
          variant="outlined"
          sx={{ width: "100%", height: "100%", marginBottom: 3 }}
        />
        <br />

          <Button variant="outlined" sx={styles.root}>
          Post Comment
        </Button>
      </Box>
    </ThemeProvider>
  );
}
