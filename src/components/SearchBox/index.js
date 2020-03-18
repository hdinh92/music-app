import React, { Component } from "react";
import { withStyles, TextField } from "@material-ui/core";
import styles from "./styles";
import PropTypes from "prop-types";
import {connect} from 'react-redux'
import {compose} from 'redux'
import cn from 'classnames'

class SearchBox extends Component {
  render() {
    const { classes, onFilterMusic,keyword } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className={classes.textField}
          id="standard-basic"
          label="Tìm kiếm"
          onChange={onFilterMusic}
          autoComplete="off"
          InputProps={{
            className: classes.input,
            classes: {
              focused: classes.focused
            }
          }}
        />
        <div
          className={cn(classes.filter, {
            [classes.hidden]: keyword === ""
          })}
        >
          Bạn đang tìm kiếm: "<strong>{keyword}</strong>"
        </div>
      </form>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object,
  onFilterProduct: PropTypes.func,
  keyword: PropTypes.string
};

const mapStateToProps = state => {
  return {
    keyword: state.item.keyword
  };
};
const mapDispatchToProps = null
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, withStyles(styles))(SearchBox);