const styles = () => ({
  title: {
    // color: "white",
    fontWeight: 700,
    backgroundImage: "linear-gradient(to right, #fd8405, #de2558)",
    color: "transparent",
    backfaceVisibility: "hidden",
    WebkitBackgroundClip: "text",
    display: "inline-block",
    transition: "all .2s",
    "&:hover": {
      transform: "skewY(0) skewX(-15deg) scale(1.05)",
      textShadow: ".5rem 1rem 2rem rgba(0, 0, 0, 0.37)"
    }
  },
  button: {
    background: "#fd8405",
    "&:hover": {
      background: "rgba(253, 134, 8, 0.7)"
    }
  },
  modalTextBold: {
    fontWeight: 700,
    marginLeft: 5,
    color : '#fd8405'
  },
  modalDelete: {
    textAlign: "center"
  }
});

export default styles;
