import React, { Component } from "react";
import * as uiActions from "../../actions/ui";
import * as itemActions from "../../actions/item";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import styles from "./styles";
import { withStyles, Grid, Box, Button } from "@material-ui/core";
import renderTextField from "../../components/FormHelpers/TextField";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import PropTypes from "prop-types";
class MusicAction extends Component {
  change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(
      /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
      " "
    );
    str = str.replace(/ + /g, " ");
    str = str.trim();
    return str;
  }
  handleSubmitForm = data => {
    const { itemActions } = this.props;
    const { addMusic } = itemActions;
    const { title, artist, src, image } = data;
    let filname = title.toLowerCase();
    filname = this.change_alias(filname);
    const item = {
      title,
      artist,
      src,
      image,
      filname
    };
    addMusic(item);
  };
  render() {
    const {
      classes,
      handleSubmit,
      invalid,
      submitting,
      modalActions
    } = this.props;
    const { hideModal } = modalActions;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item md={12}>
            <Field
              id="title"
              label="Tên bài hát"
              className={classes.TextField}
              name="title"
              component={renderTextField}
            />
          </Grid>
          <Grid item md={12}>
            <Box mt={2}>
              <Field
                id="artist"
                label="Ca sĩ"
                className={classes.TextField}
                name="artist"
                component={renderTextField}
              />
            </Box>
          </Grid>
          <Grid item md={12}>
            <Box mt={2}>
              <Field
                id="src"
                label="Đường dẫn nhạc .mp3"
                className={classes.TextField}
                name="src"
                component={renderTextField}
              />
            </Box>
          </Grid>
          <Grid item md={12}>
            <Box mt={2}>
              <Field
                id="image"
                label="Đường dẫn hình"
                className={classes.TextField}
                name="image"
                component={renderTextField}
              />
            </Box>
          </Grid>

          <Grid item md={12}>
            <Box flexDirection="row-reverse" display="flex" mt={3}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                disabled={invalid || submitting}
              >
                Lưu lại
              </Button>
              <Box mr={1}>
                <Button variant="contained" color="default" onClick={hideModal}>
                  Hủy bỏ
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    );
  }
}
MusicAction.propTypes = {
  classes: PropTypes.object,
  invalid: PropTypes.bool,
  submitting: PropTypes.bool,
  handleSubmit: PropTypes.func,
  modalActions: PropTypes.shape({
    hideModal: PropTypes.func,
  })
};
const FORM_NAME = "MUSIC_MANAGEMENT";
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate
});

const mapStateToProps = null;
const mapDispatchToProps = dispatch => {
  return {
    modalActions: bindActionCreators(uiActions, dispatch),
    itemActions: bindActionCreators(itemActions, dispatch)
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(
  withConnect,
  withReduxForm,
  withStyles(styles)
)(MusicAction);
