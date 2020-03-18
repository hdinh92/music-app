import { Box, withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import React, { Component } from "react";
import TimeSlider from "react-input-slider";
import { compose } from "redux";
import styles from "./styles";
import PropTypes from "prop-types";
class MusicBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: 0,
      currentTime: 0
    };
    this.audioRef = React.createRef();
  }
  componentDidMount() {
    this.props.playMusic();
  }

  handleLoadedData = () => {
    this.setState({
      duration: this.audioRef.current.duration
    });
    const { isPlay } = this.props;
    if (isPlay) {
      this.audioRef.current.play();
    }
  };
  handlePausePlayClick = () => {
    const { isPlay, playMusic, stopMusic } = this.props;
    if (isPlay) {
      this.audioRef.current.pause();
      stopMusic();
    } else {
      this.audioRef.current.play();
      playMusic();
    }
  };
  handleTimeSliderChange = ({ x }) => {
    this.audioRef.current.currentTime = x;
    this.setState({
      currentTime: x
    });
    const { isPlay, playMusic } = this.props;
    if (!isPlay) {
      playMusic();
      this.audioRef.current.play();
    }
  };

  renderData = audios => {
    const { duration, currentTime } = this.state;
    const { audioIndex, isPlay, classes, onchangeSong } = this.props;

    let xhtml = null;
    xhtml = audios.map((audio, index) => {
      if (index === audioIndex) {
        return (
          <div className={classes.musicBox} key={index}>
            <Card className={classes.root}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {audio.title}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {audio.artist}
                  </Typography>
                </CardContent>
                <div className={classes.controls}>
                  <IconButton
                    disabled={audioIndex === 0}
                    aria-label="previous"
                    onClick={() =>
                      onchangeSong((audioIndex - 1) % audios.length)
                    }
                  >
                    <SkipPreviousIcon />
                  </IconButton>
                  <IconButton
                    aria-label="play/pause"
                    onClick={this.handlePausePlayClick}
                  >
                    {isPlay ? (
                      <PauseCircleFilledIcon className={classes.playIcon} />
                    ) : (
                      <PlayArrowIcon className={classes.playIcon} />
                    )}
                  </IconButton>
                  <IconButton
                    aria-label="next"
                    onClick={() =>
                      onchangeSong((audioIndex + 1) % audios.length)
                    }
                  >
                    <SkipNextIcon />
                  </IconButton>
                </div>
                <Box m={3}>
                  <TimeSlider
                    axis="x"
                    xmax={duration}
                    x={currentTime}
                    onChange={this.handleTimeSliderChange}
                    className={classes.slider}
                    styles={{
                      track: {
                        backgroundColor: "#e3e3e3",
                        height: "2px"
                      },
                      active: {
                        backgroundColor: "#333",
                        height: "2px"
                      },
                      thumb: {
                        marginTop: "-3px",
                        width: "8px",
                        height: "8px",
                        backgroundColor: "#333",
                        borderRadius: 0
                      }
                    }}
                  />
                  <audio
                    controlsList="download"
                    ref={this.audioRef}
                    src={audio.src}
                    onLoadedData={this.handleLoadedData}
                    onTimeUpdate={() =>
                      this.setState({
                        currentTime: this.audioRef.current.currentTime
                      })
                    }
                    onEnded={() =>
                      onchangeSong((audioIndex + 1) % audios.length)
                    }
                  />
                </Box>
              </div>
              <CardMedia className={classes.cover} image={audio.image} />
            </Card>
          </div>
        );
      }
      return "";
    });
    return xhtml;
  };
  render() {
    const { audios } = this.props;

    return <div>{this.renderData(audios)}</div>;
  }
}
MusicBox.propTypes = {
  isPlay: PropTypes.bool,
  playMusic: PropTypes.func,
  stopMusic: PropTypes.func,
  audioIndex: PropTypes.number,
  classes: PropTypes.object,
  onchangeSong: PropTypes.func
};
export default compose(withStyles(styles))(MusicBox);
