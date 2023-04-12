import { Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import Container from "@mui/material/Container";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "../index.css";
import React from "react";
import Form from "../components/Form";
// linking images
const heroimg = require("../images/single_blog_1.png.webp");
const next = require("../images/next.png.webp");
const preview = require("../images/preview.png.webp");
const author = require("../images/author.png.webp");
const comment1 = require("../images/comment_1.png.webp");
const comment2 = require("../images/comment_2.png.webp");
const comment3 = require("../images/comment_3.png.webp");

const BlogDleft = () => {
  return (
    <Container>
      <Box>
        <img src={heroimg} style={{ width: "100%" }} />
        <h2>
          Second divided from form fish beast made every of seas all gathered us
          saying he our
        </h2>
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
        <Typography className="blog-detail">
          MCSE boot camps have its supporters and its detractors. Some people do
          not understand why you should have to spend money on boot camp when
          you can get the MCSE study materials yourself at a fraction of the
          camp price. However, who has the willpower
        </Typography>

        <Typography className="blog-detail" sx={{ paddingTop: 5 }}>
          {" "}
          MCSE boot camps have its supporters and its detractors. Some people do
          not understand why you should have to spend money on boot camp when
          you can get the MCSE study materials yourself at a fraction of the
          camp price. However, who has the willpower to actually sit through a
          self-imposed MCSE training. who has the willpower to actually
        </Typography>

        <Box className="blog-detail qoute">
          MCSE boot camps have its supporters and its detractors. Some people do
          not understand why you should have to spend money on boot camp when
          you can get the MCSE study materials yourself at a fraction of the
          camp price. However, who has the willpower to actually sit through a
          self-imposed MCSE training.
        </Box>
        <Typography className="blog-detail">
          MCSE boot camps have its supporters and its detractors. Some people do
          not understand why you should have to spend money on boot camp when
          you can get the MCSE study materials yourself at a fraction of the
          camp price. However, who has the willpower
        </Typography>

        <Typography
          className="blog-detail"
          sx={{ paddingTop: 5, marginBottom: 3 }}
        >
          {" "}
          MCSE boot camps have its supporters and its detractors. Some people do
          not understand why you should have to spend money on boot camp when
          you can get the MCSE study materials yourself at a fraction of the
          camp price. However, who has the willpower to actually sit through a
          self-imposed MCSE training. who has the willpower to actually
        </Typography>
      </Box>
      <Divider />
      <Box
        component="span"
        sx={{
          marginBlock: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>
          {" "}
          <FavoriteIcon /> Lily and 4 people like this
        </Typography>
        <Typography> </Typography>{" "}
      </Box>
      <Box
        component="div"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: 5,
        }}
      >
        <Box component="span" sx={{ lineHeight: 1, display: "flex" }}>
          <img src={preview} />
          <Box component="span" sx={{ paddingLeft: 2, lineHeight: 0 }}>
            <Typography
              sx={{ fontSize: 14, color: "gray", lineHeight: 0, paddingTop: 2 }}
            >
              Prev Post
            </Typography>
            <h3 className="list-item post-title">Space The Final Frontier</h3>
          </Box>
        </Box>
        <Box component="span" sx={{ lineHeight: 1, display: "flex" }}>
          <Box
            component="span"
            sx={{ textAlign: "right", paddingRight: 2, lineHeight: 0 }}
          >
            <Typography
              sx={{ fontSize: 14, color: "gray", lineHeight: 0, paddingTop: 1 }}
            >
              Next Post
            </Typography>
            <h3 className="list-item post-title">Telescopes 101</h3>
          </Box>
          <img src={next} />
        </Box>
      </Box>
      <Divider />
      <Box component="div" className="side_pane" sx={{ marginTop: 5 }}>
        <Box component="span" sx={{ lineHeight: 1, display: "flex" }}>
          <img src={author} />
          <Box component="span" sx={{ paddingLeft: 4, lineHeight: 1.5 }}>
            <Typography className="list-item post-title">
              Harvard milan
            </Typography>
            <Typography sx={{ fontSize: 15, color: "gray", lineHeight: 1.5 }}>
              Second divided from form fish beast made. Every of seas all
              gathered use saying you're, he our dominion twon Second divided
              from
            </Typography>
          </Box>
        </Box>
      </Box>
      <hr />
      {/* comments */}
          <Box component="div">
          <h5>05 Comments</h5>
            <Box
              component="span"
              sx={{ lineHeight: 1, display: "flex", marginBottom: 5 }}
            >
              <img src={comment1} />
              <Box component="span" sx={{ paddingLeft: 2 }}>
                <Typography
                  sx={{ fontSize: 15, color: "gray", lineHeight: 1.3 }}
                >
                  {" "}
                  Multiply sea night grass fourth day sea lesser rule open
                  subdue female fill which them Blessed, give fill lesser
                  bearing multiply sea night grass fourth day sea lesser
                </Typography>
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: 2,
                  }}
                >
                  <span className="comment-opt">
                    <h6 className="orange-hover">Emilly Blunt</h6>
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "gray",
                        lineHeight: 1.3,
                        paddingLeft: 3,
                      }}
                    >
                      {" "}
                      December 4, 2017 at 3:12 pm
                    </Typography>
                  </span>
                  <span>
                    <Typography
                      className="orange-hover"
                      sx={{ fontSize: 14, color: "gray" }}
                    >
                      Reply
                    </Typography>
                  </span>
                </Box>
              </Box>
            </Box>
            <Box
              component="span"
              sx={{ lineHeight: 1, display: "flex", marginBottom: 5 }}
            >
              <img src={comment2} />
              <Box component="span" sx={{ paddingLeft: 2 }}>
                <Typography
                  sx={{ fontSize: 15, color: "gray", lineHeight: 1.3 }}
                >
                  {" "}
                  Multiply sea night grass fourth day sea lesser rule open
                  subdue female fill which them Blessed, give fill lesser
                  bearing multiply sea night grass fourth day sea lesser
                </Typography>
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: 2,
                  }}
                >
                  <span className="comment-opt">
                    <h6 className="orange-hover">Emilly Blunt</h6>
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "gray",
                        lineHeight: 1.3,
                        paddingLeft: 3,
                      }}
                    >
                      {" "}
                      December 4, 2017 at 3:12 pm
                    </Typography>
                  </span>
                  <span>
                    <Typography
                      className="orange-hover"
                      sx={{ fontSize: 14, color: "gray" }}
                    >
                      Reply
                    </Typography>
                  </span>
                </Box>
              </Box>
            </Box>
            <Box
              component="span"
              sx={{ lineHeight: 1, display: "flex", marginBottom: 8 }}
            >
              <img src={comment3} />
              <Box component="span" sx={{ paddingLeft: 2 }}>
                <Typography
                  sx={{ fontSize: 15, color: "gray", lineHeight: 1.3 }}
                >
                  {" "}
                  Multiply sea night grass fourth day sea lesser rule open
                  subdue female fill which them Blessed, give fill lesser
                  bearing multiply sea night grass fourth day sea lesser
                </Typography>
                <Box
                  component="span"
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    paddingTop: 2,
                  }}
                >
                  <span className="comment-opt">
                    <h6 className="orange-hover">Emilly Blunt</h6>
                    <Typography
                      sx={{
                        fontSize: 14,
                        color: "gray",
                        lineHeight: 1.3,
                        paddingLeft: 3,
                      }}
                    >
                      {" "}
                      December 4, 2017 at 3:12 pm
                    </Typography>
                  </span>
                  <span>
                    <Typography
                      className="orange-hover"
                      sx={{ fontSize: 14, color: "gray" }}
                    >
                      Reply
                    </Typography>
                  </span>
                </Box>
              </Box>
            </Box>
          </Box>
      <Divider />
      <Box>
        <h5> Leave a Reply</h5>
        <Form />
      </Box>
    </Container>
  );
};

export default BlogDleft;
