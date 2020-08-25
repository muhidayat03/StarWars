import React from "react";
import { StyleSheet, css } from "aphrodite";

const Input = ({ title, type, color, ...restProps }) => {
  return <input {...restProps} className={css(styles.input)} />;
};

const styles = StyleSheet.create({
  input: {
    color: "#111111",
    padding: 10,
    borderRadius: 4,
    zIndex: 30,
    borderWidth: 1,
    borderColor: "#EFF0F2",
    borderStyle: "solid",
    boxShadow: "none",
    display: "inline-block",
    boxSizing: "border-box",
    width: "100%",
    outline: "none",
    fontSize: "14px",
  },
});

export default Input;
