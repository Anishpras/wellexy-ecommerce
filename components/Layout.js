import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      {" "}
      <Head>
        <title>Wellexy</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Wellexy</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
      <footer>
        <Typography>All rights reserved. Wellexy PVT LTD </Typography>
      </footer>
    </div>
  );
}
