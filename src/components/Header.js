import React from "react";
import { StyleSheet, css } from "aphrodite";
import bannerImage from "../assets/image/bg.jpg";
import bannerLogo from "../assets/image/starLogo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => (
  <header className={css(styles.header)}>
    <div className={css(styles.banner)}>
      <img src={bannerImage} className={css(styles.bannerImage)} alt="" />
      <section className={css(styles.bannerSection)}>
        <img
          src={bannerLogo}
          className={css(styles.bannerSectionImage)}
          alt=""
        />
      </section>
    </div>
    <nav className={css(styles.navbar)}>
      <div className={css(styles.maxContainer)}>
        <ul>
          <li className={css(styles.menu)}>
            <NavLink to="/" exact className={css(styles.link)}>
              Film
            </NavLink>
          </li>
          <li className={css(styles.menu)}>
            <NavLink to="/people" exact className={css(styles.link)}>
              People
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

const styles = StyleSheet.create({
  header: {
    display: "inline",
  },
  banner: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
    height: 300,
    background: "black",
    overflow: "hidden",
    position: "relative",
  },
  bannerSection: {
    position: "absolute",
    top: "50%;",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  bannerSectionImage: {
    width: 200,
  },
  bannerImage: {
    width: "100%",
    minHeight: "100%",
    opacity: 0.4,
  },
  navbar: {
    backgroundColor: "#FFC107",
    padding: 5,
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  menu: {
    display: "inline",
    listStyleType: "none",
    marginRight: 20,
  },
  link: {
    fontSize: 18,
    fontWeight: 600,
    textDecoration: "none",
    color: "black",
  },
  maxContainer: {
    maxWidth: 1366,
    margin: "auto",
  },
});

export default Header;
