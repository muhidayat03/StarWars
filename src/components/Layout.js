import React from "react";
import { StyleSheet, css } from "aphrodite";
import bannerImage from "../assets/image/bg.jpg";
import bannerLogo from "../assets/image/starLogo.png";
import { NavLink } from "react-router-dom";
import { Row, Column } from "simple-flexbox";

const Layout = (props) => (
  <main>
    <Row className={css(styles.maxContainer)} horizontal="space-between" wrap>
      {props.children}
    </Row>
  </main>
);

const styles = StyleSheet.create({
  maxContainer: {
    maxWidth: 1366,
    margin: "auto",
    backgroundColor: "#eee",
    padding: 40,
    width: "100%",
  },
});

export default Layout;
