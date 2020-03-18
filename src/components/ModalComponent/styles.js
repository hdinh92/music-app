const styles = theme => ({
  paper: {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    position: "absolute",
    width: 650,
    backgroundColor: theme.palette.background.paper,
    outline: "none",
    borderRadius: 45,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  TextField: {
    width: "100%"
  },
  header: {
    backgroundImage: 'linear-gradient(90deg, #de2558, #fd8405)',
    padding: theme.spacing(2),
    color: "white",
    textAlign: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 45
  },
  title: { textTransform: "uppercase", fontWeight: 700 },
  content: {
    padding: theme.spacing(2)
  },
  selectField: {
    display: "flex",
    flexWrap: "wrap"
  }
});

export default styles;
