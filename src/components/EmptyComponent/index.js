import React, { Component } from "react";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import styles from "./styles";
import PropTypes from "prop-types";
class EmptyComponent extends Component {
  render() {
    const { classes, onBack } = this.props;
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.pos} color="textSecondary">
            Không tìm thấy bài hát
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={onBack} size="small">
            Quay lại danh sách
          </Button>
        </CardActions>
      </Card>
    );
  }
}
EmptyComponent.propTypes = {
  classes: PropTypes.object,
  onBack: PropTypes.func
};
export default withStyles(styles)(EmptyComponent);
