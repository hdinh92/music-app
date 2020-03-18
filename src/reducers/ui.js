import * as Types from "./../constants/index";
const initialState = {
  showLoading: false,
  showModal: false,
  component: null,
  title: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.SHOW_MODAL: {
      return {
        ...state,
        showModal: true
      };
    }
    case Types.HIDE_MODAL: {
      return {
        ...state,
        showModal: false
      };
    }
    case Types.CHANGE_MODAL_TITLE: {
      const { title } = action.payload;
      return {
        ...state,
        title
      };
    }
    case Types.CHANGE_MODAL_CONTENT: {
      const { component } = action.payload;
      return {
        ...state,
        component
      };
    }
    case Types.SHOW_LOADING: {
      return {
        ...state,
        showLoading: true
      };
    }
    case Types.HIDE_LOADING: {
      return {
        ...state,
        showLoading: false
      };
    }
    default:
      return state;
  }
};

export default reducer;
