import Head from "next/head";
import { createTheme } from "@mui/material/styles";
import {
  AppBar,
  CssBaseline,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
  Container,
  Box,
} from "@mui/material";
import NextLink from "next/link";
import classes from "../utils/classes";

export default function Layout({ title, description, children }) {
  const theme = createTheme({
    components: {
      MuiLink: {
        defaultProps: {
          underlien: "hover",
        },
      },
    },
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      palette: {
        mode: "light",
        primary: {
          main: "#f0c000",
        },
        secondary: {
          main: "#208080",
        },
      },
    },
  });

  return (
    <>
      <Head>
        <title>
          {title ? `${title} - Sanity arildzona` : "Sanity arildzona"}
        </title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="static" sx={classes.appbar}>
          <Toolbar sx={classes.toolbar}>
            <NextLink href="/" passHref>
              <Link>
                <Typography sx={classes.brand}>arildzona</Typography>
              </Link>
            </NextLink>
          </Toolbar>
        </AppBar>
        <Container component="main" sx={classes.main}>
          {children}
        </Container>
        <Box component="footer" sx={classes.footer}>
          <Typography>All rights reserved. Sanity Arildzona</Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}
