import * as Types from './../constants/item'
const initialState = {
    listMusic : [],
    keyword : ''
}


const reducer = (state=initialState, action) =>{
    switch(action.type){
        case Types.FETCH_LIST_SUCCESS:{
            const {data} = action.payload
            return {
                ...state,
                listMusic: data,
            }
        }
        case Types.ADD_MUSIC_SUCCESS:{
            const { data } = action.payload
            return {
                ...state,
                listMusic: state.listMusic.concat([data])
            }
        }

        case Types.FILTER_MUSIC: {
            const { keyword } = action.payload;
            return {
              ...state,
              keyword
            };
          }
          case Types.FILTER_MUSIC_SUCCESS: {
            const { data } = action.payload;
            return {
              ...state,
              listMusic: data
            };
          }

          case Types.DELETE_MUSIC_SUCCESS:{
            const { data } = action.payload
            return {
              ...state,
              listMusic: state.listMusic.filter(x=>x.id !== data)
            }
          }
        default: return state
    }
}

export default reducer