import { withStyles, Box, Typography } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React, { Component } from "react";
import styles from "./styles";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import PlayingIcon from "./../../assets/playing.gif";
import PropTypes from "prop-types";
class MusicList extends Component {
  render() {
    const { classes, audios } = this.props;
    return (
      <div className={classes.root}>
        <Typography className={classes.title}>DANH SÁCH BÀI HÁT</Typography>
        <List component="nav" aria-label="secondary mailbox folders">
          {this.showContent(audios)}
        </List>
      </div>
    );
  }
  showContent = audios => {
    const { classes, onDeleteSong, audioIndex, onShowIndex } = this.props;
    var result = null;
    if (audios.length > 0) {
      result = audios.map((audio, index) => {
        return (
          <NavLink
            to=""
            className={cn(classes.menuLink, {
              [classes.menuLinkActive]: index === audioIndex
            })}
            key={index}
          >
            <ListItem
              button
              onClick={() => onShowIndex(index)}
              className={classes.list}
            >
              <Box display="flex" flexDirection="row">
                <img
                  src={PlayingIcon}
                  alt={PlayingIcon}
                  className={cn(classes.imgHidden, {
                    [classes.imgActive]: index === audioIndex
                  })}
                />
                <ListItemText
                  className={classes.itemText}
                  primary={`${audio.title} - ${audio.artist}`}
                />
              </Box>

              <Box>
                <HighlightOffIcon
                  className={classes.icon}
                  onClick={() => onDeleteSong(audio)}
                />
              </Box>
            </ListItem>
          </NavLink>
        );
      });
    }
    return result;
  };
}
MusicList.propTypes = {
  classes: PropTypes.object,
  onDeleteSong: PropTypes.func,
  audioIndex: PropTypes.number,
  onShowIndex: PropTypes.func
};
export default withStyles(styles)(MusicList);
