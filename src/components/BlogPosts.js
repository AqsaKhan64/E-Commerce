import { Container,Paper,Typography,Box,Pagination,Stack,Grid,} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import "../index.css";
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Link } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const blog1 = require("../images/single_blog_1.png.webp");
const blog2 = require("../images/single_blog_2.png.webp");
const blog3 = require("../images/single_blog_3.png.webp");
const blog4 = require("../images/single_blog_4.png.webp");
const blog5 = require("../images/single_blog_5.png.webp");

const BlogPosts = () => {

  
  return (
    <>
      <Grid container spacing={4}>
        <Paper elevation={1} sx={{ p: 2, marginBottom: 5 }} data-aos="fade-up"> 
        <img src={blog1} style={{ width: "100%" }}  />  
          <h2 className="orange-hover">
            Google inks pact for new 35-storey office
          </h2>
          <Typography sx={{ fontSize: 14, color: "gray" }}>
            That dominion stars lights dominion divide years for fourth have
            don't stars is that he earth it first without heaven in place seed
            it second morning saying.
          </Typography>
          <Box component="span">
            <Typography
              className="list-item"
              sx={{ fontSize: 14, display: "inline-block" }}
            >
              <PersonIcon /> Travel,lifestyle
            </Typography>|<Typography
              className="list-item"
              sx={{ fontSize: 14, display: "inline-block" }}
            >
              <QuestionAnswerRoundedIcon /> 03 Comments
            </Typography>
          </Box>
        </Paper>

        <Paper elevation={1} sx={{ p: 2, marginBottom: 5 }}>
          <Box data-aos="fade-up">
            <img src={blog2} style={{ width: "100%" }} />
            <h2 className="orange-hover">
              Google inks pact for new 35-storey office
            </h2>
            <Typography sx={{ fontSize: 14, color: "gray" }}>
              That dominion stars lights dominion divide years for fourth have
              don't stars is that he earth it first without heaven in place seed
              it second morning saying.
            </Typography>
            <Box component="span">
              <Typography
                className="list-item"
                sx={{ fontSize: 14, display: "inline-block" }}
              >
                <PersonIcon /> Travel,lifestyle
              </Typography>{" "}
              |{" "}
              <Typography
                className="list-item"
                sx={{ fontSize: 14, display: "inline-block" }}
              >
                <QuestionAnswerRoundedIcon /> 03 Comments
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Paper elevation={1} sx={{ p: 2, marginBottom: 5 }} >
          <Box data-aos="fade-up">
            <img src={blog3} style={{ width: "100%" }} />
            <h2 className="orange-hover">
              Google inks pact for new 35-storey office
            </h2>
            <Typography sx={{ fontSize: 14, color: "gray" }}>
              That dominion stars lights dominion divide years for fourth have
              don't stars is that he earth it first without heaven in place seed
              it second morning saying.
            </Typography>
            <Box component="span">
              <Typography
                className="list-item"
                sx={{ fontSize: 14, display: "inline-block" }}
              >
                <PersonIcon /> Travel,lifestyle
              </Typography>{" "}
              |{" "}
              <Typography
                className="list-item"
                sx={{ fontSize: 14, display: "inline-block" }}
              >
                <QuestionAnswerRoundedIcon /> 03 Comments
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Paper elevation={1} sx={{ p: 2, marginBottom: 5 }} >
          <Box data-aos="fade-up">
            <img src={blog4} style={{ width: "100%" }} />
            <h2 className="orange-hover">
              Google inks pact for new 35-storey office
            </h2>
            <Typography sx={{ fontSize: 14, color: "gray" }}>
              That dominion stars lights dominion divide years for fourth have
              don't stars is that he earth it first without heaven in place seed
              it second morning saying.
            </Typography>
            <Box component="span">
              <Typography
                className="list-item"
                sx={{ fontSize: 14, display: "inline-block" }}
              >
                <PersonIcon /> Travel,lifestyle
              </Typography>{" "}
              |{" "}
              <Typography
                className="list-item"
                sx={{ fontSize: 14, display: "inline-block" }}
              >
                <QuestionAnswerRoundedIcon /> 03 Comments
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Paper elevation={1} sx={{ p: 2, marginBottom: 5 }}>
          <Box data-aos="fade-up">
            <img src={blog5} style={{ width: "100%" }} />
            <h2 className="orange-hover">
              Google inks pact for new 35-storey office
            </h2>
            <Typography sx={{ fontSize: 14, color: "gray" }}>
              That dominion stars lights dominion divide years for fourth have
              don't stars is that he earth it first without heaven in place seed
              it second morning saying.
            </Typography>
            <Box component="span">
              <Typography
                className="list-item"
                sx={{ fontSize: 14, display: "inline-block" }}
              >
                <PersonIcon /> Travel,lifestyle
              </Typography>{" "}
              |{" "}
              <Typography
                className="list-item"
                sx={{ fontSize: 14, display: "inline-block" }}
              >
                <QuestionAnswerRoundedIcon /> 03 Comments
              </Typography>
            </Box>
          </Box>
        </Paper>
        <Stack
          spacing={2}
          sx={{ display: "flex", alignItems: "center", margin: 10 }}
        >
          <Pagination count={2} variant="outlined" shape="rounded" data-aos="fade-up"/>
        </Stack>
      </Grid>
    </>
  );
};

export default BlogPosts;
