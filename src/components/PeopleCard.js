import React from "react";
import { StyleSheet, css } from "aphrodite";
import { Row, Column } from "simple-flexbox";

const PeopleCard = ({ data: { name, gender, height, mass, eye_color } }) => (
  <article className={css(styles.article)}>
    <Column className={css(styles.container)}>
      <h1 className={css(styles.header)}>{name}</h1>
      <Row style={{ width: "100%" }}>
        <div style={{ width: "30%" }}>
          <p>Gender </p>
        </div>
        <div style={{ width: "60%" }}>
          <p>{gender}</p>
        </div>
      </Row>
      <Row style={{ width: "100%" }}>
        <div style={{ width: "30%" }}>
          <p>Height </p>
        </div>
        <div style={{ width: "60%" }}>
          <p>{height}</p>
        </div>
      </Row>
      <Row style={{ width: "100%" }}>
        <div style={{ width: "30%" }}>
          <p>Mass </p>
        </div>
        <div style={{ width: "60%" }}>
          <p>{mass}</p>
        </div>
      </Row>
      <Row style={{ width: "100%" }}>
        <div style={{ width: "30%" }}>
          <p>Eye Color </p>
        </div>
        <div style={{ width: "60%" }}>
          <p>{eye_color}</p>
        </div>
      </Row>
    </Column>
  </article>
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
    height: 200,
    borderRadius: 10,
  },
  article: {
    padding: 10,
    width: "33.33%",
    marginBottom: 20,
    borderRadius: 10,
    "@media (max-width: 960px)": {
      width: "50%",
    },
    "@media (max-width:  600px)": {
      width: "100%",
    },
  },
  header: { margin: 0, marginBottom: 10 },
  detail: {},
});

export default PeopleCard;
