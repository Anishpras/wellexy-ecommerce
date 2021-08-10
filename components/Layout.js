import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import useStyles from "../utils/styles";
export default function Layout({ children }) {
  const classes = useStyles();
  return (
    <div>
      {" "}
      <Head>
        <title>Wellexy</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Wellexy</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved. Wellexy PVT LTD </Typography>
      </footer>
    </div>
  );
}
