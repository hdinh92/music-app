import * as Types from "../constants/item";

export const fetchList = (params = {}) => {
  return {
    type: Types.FETCH_LIST,
    payload: {
      params
    }
  };
};
export const fetchListSuccess = data => {
  return {
    type: Types.FETCH_LIST_SUCCESS,
    payload: {
      data
    }
  };
};
export const fetchListFailed = error => {
  return {
    type: Types.FETCH_LIST_FAILED,
    payload: {
      error
    }
  };
};


export const addMusic = song =>({
  type: Types.ADD_MUSIC,
  payload:{
    song
  }
})
export const addMusicSuccess = data =>({
  type: Types.ADD_MUSIC_SUCCESS,
  payload:{
    data
  }
})
export const addMusicFailed = error =>({
  type: Types.ADD_MUSIC,
  payload:{
    error
  }
})


export const filterMusic = keyword => {
  return {
    type: Types.FILTER_MUSIC,
    payload: {
      keyword
    }
  };
};

export const filterMusicSuccess = data => {
  return {
    type: Types.FILTER_MUSIC_SUCCESS,
    payload: {
      data
    }
  };
};

export const deleteMusic = id =>({
  type: Types.DELETE_MUSIC,
  payload:{
    id
  }
})
export const deleteMusicSuccess = data =>({
  type: Types.DELETE_MUSIC_SUCCESS,
  payload:{
    data
  }
})
export const deleteMusicFailed = error =>({
  type: Types.DELETE_MUSIC,
  payload:{
    error
  }
})
