import React from "react";
import { StyleSheet, css } from "aphrodite";
import COLOR from "../constants/color"; 

const Button = ({ title, color, styleClass, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={css(
        styles.btn,
        color === "primary" && styles.primary,
        color === "warning" && styles.warning,
        styleClass
      )}
    >
      {title}
    </button>
  );
};

const styles = StyleSheet.create({
  btn: {
    display: "inline-block",
    fontWeight: 400,
    color: "white",
    verticalAlign: "middle",
    textAlign: "center",
    border: "1px solid transparent",
    padding: "0.375rem 1rem",
    lineHeight: "1.5",
    fontSize: 16,
    borderRadius: "0.25rem",
    transition: "0.2",
    cursor: "pointer",
    outline: "none",
  },
  warning: {
    backgroundColor: COLOR.orange,
    ":hover": {
      backgroundColor: COLOR.darkOrange,
    },
    ":focus": {
      borderColor: COLOR.darkOrange,
    },
  },
  primary: {
    backgroundColor: COLOR.blue,
    ":hover": {
      backgroundColor: COLOR.darkBlue,
    },
    ":focus": {
      borderColor: COLOR.darkBlue,
    },
  },
});

Button.defaultProps = {
  color: "primary",
};

export default Button;
