import axiosService from "./../commons/axiosService";
import { API_ENDPOINT } from "./../constants/index";
import qs from "query-string";
const url = "music";

export const getList = (params = {}) => {
  let queryParams = "";
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};


export const addMusic = song =>{
  return axiosService.post(`${API_ENDPOINT}/${url}`, song);
}

export const deleteMusic = songID => {
  return axiosService.delete(`${API_ENDPOINT}/${url}/${songID}`)
}
