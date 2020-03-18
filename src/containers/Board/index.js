import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  withStyles
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import * as Actions from "../../actions/item";
import * as uiActions from "../../actions/ui";
import * as auActions from "../../actions/audio";
import MusicBox from "../../components/MusicBox/index";
import MusicList from "../../components/MusicList";
import SearchBox from "../../components/SearchBox";
import MusicAction from "../MusicAction";
import styles from "./styles";
import EmptyComponent from "../../components/EmptyComponent";
import PropTypes from "prop-types";
class Board extends Component {
  openForm = () => {
    const { modalActions } = this.props;
    const { showModal, changeModalContent, changeModalTitle } = modalActions;
    showModal();
    changeModalTitle("Thêm bài hát");
    changeModalContent(<MusicAction />);
  };
  playMusic = () => {
    const { auActions } = this.props;
    const { playMusic } = auActions;
    playMusic();
  };
  stopMusic = () => {
    const { auActions } = this.props;
    const { stopMusic } = auActions;
    stopMusic();
  };
  changeSong = value => {
    const { auActions } = this.props;
    const { changeSong } = auActions;
    changeSong(value);
  };
  componentDidMount() {
    const { Actions } = this.props;
    const { fetchList } = Actions;
    fetchList();
  }
  handleFilterMusic = e => {
    e.preventDefault();
    const { Actions } = this.props;
    const { filterMusic } = Actions;
    filterMusic(e.target.value);
  };
  renderFilterSong() {
    let xhtml = null;
    xhtml = <SearchBox onFilterMusic={this.handleFilterMusic} />;
    return xhtml;
  }
  onDeleteSong = song => {
    const { modalActions, classes } = this.props;
    const {
      showModal,
      changeModalContent,
      changeModalTitle,
      hideModal
    } = modalActions;
    showModal();
    changeModalTitle("Xóa bài hát");
    changeModalContent(
      <div className={classes.modalDelete}>
        <div className={classes.modalConfirmDelete}>
          Xóa bài hát:
          <span className={classes.modalTextBold}>{song.title}</span>
        </div>
        <Box display="flex" flexDirection="row-reverse" mt={2}>
          <Box ml={1}>
            <Button variant="contained" onClick={hideModal}>
              Hủy bỏ
            </Button>
          </Box>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleDeleteSong(song)}
            >
              Đồng ý
            </Button>
          </Box>
        </Box>
      </div>
    );
  };
  handleDeleteSong = song => {
    const { Actions, auActions } = this.props;
    const { changeSong } = auActions;
    const { deleteMusic } = Actions;
    deleteMusic(song.id);
    changeSong(0);
  };
  showIndex = value => {
    const { isPlay } = this.props;
    this.changeSong(value);
    if (!isPlay) {
      this.playMusic();
    }
  };
  backToList = () => {
    const { Actions } = this.props;
    const { filterMusic } = Actions;
    filterMusic("");
  };
  render() {
    const { classes, audios, isPlay, audioIndex } = this.props;
    return (
      <div>
        <Box textAlign="center" m={3}>
          <Typography className={classes.title} variant="h3">
            MUSIC BOX
          </Typography>
        </Box>

        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item md={7}></Grid>
            <Grid item md={1}>
              <Box mb={2} textAlign="left">
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={this.openForm}
                >
                  <AddIcon />
                </Button>
              </Box>
            </Grid>

            <Grid item md={4}>
              {this.renderFilterSong()}
            </Grid>

            <Grid item md={6} xs={12}>
              {audios.length !== 0 ? (
                <MusicBox
                  audios={audios}
                  playMusic={this.playMusic}
                  stopMusic={this.stopMusic}
                  isPlay={isPlay}
                  audioIndex={audioIndex}
                  onchangeSong={this.changeSong}
                />
              ) : (
                <EmptyComponent onBack={this.backToList} />
              )}
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item md={5} xs={12}>
              <MusicList
                onShowIndex={this.showIndex}
                audios={audios}
                onDeleteSong={this.onDeleteSong}
                isPlay={isPlay}
                audioIndex={audioIndex}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
Board.propTypes = {
  classes: PropTypes.object,
  audios: PropTypes.array,
  isPlay: PropTypes.bool,
  audioIndex: PropTypes.number,
  keyword: PropTypes.string,
  modalActions: PropTypes.shape({
    showModal: PropTypes.func,
    hideModal: PropTypes.func,
    changeModalContent: PropTypes.func,
    changeModalTitle: PropTypes.func
  }),
  Actions: PropTypes.shape({
    fetchList: PropTypes.func,
    filterMusic: PropTypes.func,
    deleteMusic: PropTypes.func
  }),
  auActions: PropTypes.shape({
    playMusic: PropTypes.func,
    stopMusic: PropTypes.func,
    changeSong: PropTypes.func
  })
};
const mapStateToProps = state => {
  return {
    audios: state.item.listMusic,
    keyword: state.item.keyword,
    isPlay: state.audio.isPlay,
    audioIndex: state.audio.audioIndex
  };
};
const mapDispatchToProps = dispatch => {
  return {
    modalActions: bindActionCreators(uiActions, dispatch),
    Actions: bindActionCreators(Actions, dispatch),
    auActions: bindActionCreators(auActions, dispatch)
  };
};
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect, withStyles(styles))(Board);
