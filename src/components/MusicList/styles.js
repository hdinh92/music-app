const styles = theme => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    border: "solid 1px black",
    borderRadius: 5
  },
  menuLink: {
    textDecoration: "none",
    color: "black"
  },
  menuLinkActive: {
    "&>div": {
      backgroundColor: "rgba(0,0,0,0.15)",
      color: "#fd8405",
      fontWeight: 700
    }
  },

  imgHidden: {
    display: "none"
  },
  imgActive: {
    width: "10%",
    display: "block",
    marginRight: 20
  },
  
  list: {
    "&:last-child": {
      borderBottom: "solid 1px rgba(0,0,0,0.15)"
    },
    display: 'flex',
    alignItem : 'center',
    justifyContent : 'space-between'
  },
  icon:{
    color : 'black',
    curson : 'pointer',
    '&:hover':{
      color : 'red'
    }
  },
  itemText: {
    marginTop: 15
  },
  title:{
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
    },
    margin: '15px 0px 5px 15px'
  }
});

export default styles;
