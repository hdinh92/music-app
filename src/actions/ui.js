import * as Types from "./../constants/index";

export const showModal = () => ({
  type: Types.SHOW_MODAL
});
export const hideModal = () => ({
  type: Types.HIDE_MODAL
});

export const changeModalTitle = title => ({
  type: Types.CHANGE_MODAL_TITLE,
  payload: {
    title
  }
});

export const changeModalContent = component => ({
  type: Types.CHANGE_MODAL_CONTENT,
  payload: {
    component
  }
});

export const showLoading = () => ({
  type: Types.SHOW_LOADING
});
export const hideLoading = () => ({
  type: Types.HIDE_LOADING
});
