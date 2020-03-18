import * as Types from "../constants/audio";

export const playMusic = () => ({
  type: Types.PLAY_MUSIC
});
export const stopMusic = () => ({
  type: Types.STOP_MUSIC
});
export const changeSong = (index) => ({
  type: Types.CHANGE_SONG,
  payload : {
    index
  }
});
