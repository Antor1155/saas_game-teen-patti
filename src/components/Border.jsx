import React from "react";

const styles = {
  top: {
    background: "url('/img/top.png')",
    backgroundSize: "150px",
    height: 20,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  bottom: {
    background: "url('/img/bottom.png')",
    backgroundSize: "150px",
    height: 20,
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  left: {
    background: "url('/img/left.png')",
    backgroundSize: "100%",
    width: 20,
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    zIndex: 100,
  },
  right: {
    background: "url('/img/right.png')",
    backgroundSize: "100%",
    width: 20,
    height: "100vh",
    position: "fixed",
    top: 0,
    bottom: 0,
    right: 0,
    zIndex: 100,
  },
};

const Border = () => {
  return (
    <>
      <div style={styles.left} />

      <div style={styles.right} />

      <div style={styles.bottom} />

      <div style={styles.top} />
    </>
  );
};

export default Border;
