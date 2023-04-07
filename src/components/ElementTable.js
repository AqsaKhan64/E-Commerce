import { createTheme, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, ThemeProvider, Typography } from '@mui/material'
import {paper} from '@mui/material'
import { Box, display, Stack } from '@mui/system'
import React from 'react'
// linking images
const f1 = require('../images/elements/f1.jpg.webp');
const f2 = require('../images/elements/f2.jpg.webp');
const f3 = require('../images/elements/f3.jpg.webp');
const f4 = require('../images/elements/f4.jpg.webp');
const f5 = require('../images/elements/f5.jpg.webp');
const f6 = require('../images/elements/f6.jpg.webp');
const f7 = require('../images/elements/f7.jpg.webp');
const f8 = require('../images/elements/f8.jpg.webp');
// style
const th={
  color: "#415094",
  textTransform: 'uppercase',
  fontFamily: 'poppins',
}
const tr={
  padding:'10px',
  fontFamily: 'poppins'
}
// custom theme
const progcolor= createTheme({
  palette:{
    color1:{main: '#6382E6'},
    color2:{main: '#E66686'},
    color3:{main: '#F09359'},
    color4:{main: '#73FBAF'},
    color5:{main: '#73FBAF'},
    color6:{main: '#6382E6'},
    color7:{main: '#A367E7'},
    color8:{main: '#E66686'},
  }
});
const ElementTable = () => {
  return (
    <ThemeProvider theme={progcolor}>
      <Typography sx={{fontSize:17, fontFamily:'poppins', marginBlock:3}}>Table</Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell style={th}> # </TableCell>
              <TableCell style={th}>COUNTRIES </TableCell>
              <TableCell style={th}> VISITS </TableCell>
              <TableCell style={th}> PERCENTAGES </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* 01 */}
            <TableRow >
              <TableCell  style={tr}> 01</TableCell>
              <TableCell  style={tr}>
                <Stack direction="row">
                  <img src={f1} />
                  <Typography sx={{ paddingLeft: 2 }}>Canada</Typography>
                </Stack>
              </TableCell>
              <TableCell  style={tr}>645032</TableCell>
              <TableCell  style={tr}>
                <LinearProgress
                  variant="buffer"
                  sx={{ width: "80%" }}
                  color="color1"
                />
              </TableCell>
            </TableRow>
            {/* 02 */}
            <TableRow >
              <TableCell style={tr}> 02</TableCell>
              <TableCell style={tr}>
                <Stack direction="row">
                  <img src={f2} />
                  <Typography sx={{ paddingLeft: 2 }}>Canada</Typography>
                </Stack>
              </TableCell>
              <TableCell style={tr}>645032</TableCell>
              <TableCell style={tr}>
                <LinearProgress
                  variant="buffer"
                  sx={{ width: "30%" }}
                  color="color2"
                />
              </TableCell>
            </TableRow>
            {/* 03 */}
            <TableRow >
              <TableCell  style={tr} > 03</TableCell>
              <TableCell  style={tr}>
                <Stack direction="row">
                  <img src={f3} />
                  <Typography sx={{ paddingLeft: 2 }}>Canada</Typography>
                </Stack>
              </TableCell>
              <TableCell  style={tr}>645032</TableCell>
              <TableCell  style={tr}>
                <LinearProgress
                  variant="buffer"
                  sx={{ width: "55%" }}
                  color="color3"
                />
              </TableCell>
            </TableRow>
            {/* 04 */}
            <TableRow>
              <TableCell style={tr}> 04</TableCell>
              <TableCell style={tr}>
                <Stack direction="row">
                  <img src={f4} />
                  <Typography sx={{ paddingLeft: 2 }}>Canada</Typography>
                </Stack>
              </TableCell>
              <TableCell style={tr}>645032</TableCell>
              <TableCell style={tr}>
                <LinearProgress
                  variant="buffer"
                  sx={{ width: "60%" }}
                  color="color4"
                />
              </TableCell>
            </TableRow>
            {/* 05 */}
            <TableRow>
              <TableCell style={tr}> 05</TableCell>
              <TableCell style={tr}>
                <Stack direction="row">
                  <img src={f5} />
                  <Typography sx={{ paddingLeft: 2 }}>Canada</Typography>
                </Stack>
              </TableCell>
              <TableCell style={tr}>645032</TableCell>
              <TableCell style={tr}>
                <LinearProgress
                  variant="buffer"
                  sx={{ width: "40%" }}
                  color="color5"
                />
              </TableCell>
            </TableRow>
            {/* 06 */}
            <TableRow>
              <TableCell style={tr}> 06</TableCell>
              <TableCell  style={tr}>
                <Stack direction="row">
                  <img src={f6} />
                  <Typography sx={{ paddingLeft: 2 }}>Canada</Typography>
                </Stack>
              </TableCell>
              <TableCell style={tr}>645032</TableCell>
              <TableCell style={tr}>
                <LinearProgress
                  variant="buffer"
                  sx={{ width: "70%" }}
                  color="color6"
                />
              </TableCell>
            </TableRow>
            {/* 07 */}
            <TableRow>
              <TableCell style={tr}> 07</TableCell>
              <TableCell style={tr}>
                <Stack direction="row">
                  <img src={f7} />
                  <Typography sx={{ paddingLeft: 2 }}>Canada</Typography>
                </Stack>
              </TableCell>
              <TableCell style={tr}>645032</TableCell>
              <TableCell style={tr}>
                <LinearProgress
                  variant="buffer"
                  sx={{ width: "30%" }}
                  color="color7"
                />
              </TableCell>
            </TableRow>
            {/* 08 */}
            <TableRow>
              <TableCell style={tr}> 08</TableCell>
              <TableCell style={tr}>
                <Stack direction="row">
                  <img src={f8} />
                  <Typography sx={{ paddingLeft: 2 }}>Canada</Typography>
                </Stack>
              </TableCell>
              <TableCell style={tr}>645032</TableCell>
              <TableCell style={tr}>
                <LinearProgress
                  variant="buffer"
                  sx={{ width: "60%" }}
                  color="color8"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}

export default ElementTable
