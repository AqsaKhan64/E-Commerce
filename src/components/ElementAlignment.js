import { Grid } from "@mui/material";
import { Divider, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
const img = require("../images/elements/d.jpg.webp");

const ElementAlignment = () => {
  return (
    <Box sx={{ marginBlock: 5 }}>
      <Typography sx={{ textAlign: "left", fontSize: 17,fontWeight:600 , marginBlock:2 }}>left Aligned</Typography>
        <Stack direction="row" sx={{ alignItems: "left", marginBlock: 5 }}>
            <Grid container>
              <Grid item xs={12} sm={4} md={3} lg={3}>
                <img src={img} sx={{Width:'100%'}}/>
                </Grid>
                <Grid item xs={12} sm={8} md={9} lg={9}>
                <Typography sx={{ paddingLeft: 4 , fontWeight:14,  color:'#646d77'}}>
                  Recently, the US Federal government banned online casinos from
                  operating in America by making it illegal to transfer money to them
                  through any US bank or payment system. As a result of this law, most
                  of the popular online casino networks such as Party Gaming and
                  PlayTech left the United States. Overnight, online casino players
                  found themselves being chased by the Federal government. But, after a
                  fortnight, the online casino industry came up with a solution and new
                  online casinos started taking root. These began to operate under a
                  different business umbrella, and by doing that, rendered the transfer
                  of money to and from them legal. A major part of this was enlisting
                  electronic banking systems that would accept this new clarification
                  and start doing business with me. Listed in this article are the
                  electronic banking systems that accept players from the United States
                  that wish to play in online casinos.
                </Typography>
              </Grid>
          </Grid>
       </Stack>
      <Divider />
      <Typography sx={{ textAlign: "right" , fontSize: 17,fontWeight:600 , marginBlock:2}}>Right Aligned</Typography>
      <Stack direction="row" sx={{ alignItems: "right", marginBlock: 5 }}>
        <Grid container>
            <Grid item xs={12} sm={9} md={9} lg={9}>
                <Typography sx={{ paddingRight: 5, textAlign: "right", fontWeight:14,  color:'#646d77'}}>
                Recently, the US Federal government banned online casinos from
                operating in America by making it illegal to transfer money to them
                through any US bank or payment system. As a result of this law, most
                of the popular online casino networks such as Party Gaming and
                PlayTech left the United States. Overnight, online casino players
                found themselves being chased by the Federal government. But, after a
                fortnight, the online casino industry came up with a solution and new
                online casinos started taking root. These began to operate under a
                different business umbrella, and by doing that, rendered the transfer
                of money to and from them legal. A major part of this was enlisting
                electronic banking systems that would accept this new clarification
                and start doing business with me. Listed in this article are the
                electronic banking systems that accept players from the United States
                that wish to play in online casinos.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3} md={3} lg={3}>
            <img src={img} sx={{Width:'100%'}} />
            </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default ElementAlignment;
