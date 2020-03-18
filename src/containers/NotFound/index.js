import { withStyles, Button } from "@material-ui/core";
import React, { Component } from "react";
import { compose } from "redux";
import NotFoundIcon from "./../../assets/notfound.gif";
import styles from "./styles";
import {withRouter} from 'react-router'
import PropTypes from "prop-types";
class NotFound extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <img src={NotFoundIcon} className={classes.icon} alt="notfound" />
        <Button onClick={this.onBack} size="small" className={classes.btn}>Quay lại danh sách</Button>
      </div>
    );
  }
  onBack = ()=>{
      console.log(this.props)
      const { history } = this.props
      history.push('/')
  }
}
NotFound.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.func
};
export default compose(withRouter,withStyles(styles))(NotFound);
