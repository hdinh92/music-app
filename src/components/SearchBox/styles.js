const styles = theme => ({
  textField: {
    width: "100%",
    // margin: '10px 0'
    marginTop: -10,
    // backgroundColor: theme.palette.background.paper,
    borderRadius: 10
  },
  hidden: {
    display: "none"
  },
  input: {
    color: "rgba(0, 0, 0, 0.5)",
    fontWeight: 700
  },
  focused: {
    background: "rgba(78, 79, 74, 0.1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    color: '#bf360c'
  }
});

export default styles;
