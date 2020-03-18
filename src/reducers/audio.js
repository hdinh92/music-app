import * as Types from "./../constants/audio";
const initialState = {
  isPlay: false,
  audioIndex: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.PLAY_MUSIC: {
      return {
        ...state,
        isPlay: true
      };
    }
    case Types.STOP_MUSIC: {
      return {
        ...state,
        isPlay: false
      };
    }
    case Types.CHANGE_SONG: {
      const { index } = action.payload
      return {
        ...state,
        audioIndex: index
      };
    }
    default:
      return state;
  }
};

export default reducer;
