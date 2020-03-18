const styles = theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    boxShadow:
      " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  root2: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    border: "solid 1px black",
    borderRadius: 5
  },
 
});

export default styles;
