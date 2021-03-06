import { FETCH_ALL, SHOW_QR } from "../constants/actionTypes";
import * as api from "../api/index.js";


// FETCH ALL THE POSTS
export const getItems = () => async (dispatch) => {

  try {
    const { data } = await api.fetchItems();

    dispatch({
      type: FETCH_ALL,
      payload: data
    });

  } catch (error) {
    console.log(error);
  }
};

// LIKE A POST
export const showQr = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));

  try {

    const { data } = await api.showQr(id, user?.token);

    dispatch({
      type: SHOW_QR,
      payload: data
    });

  } catch (error) {
    console.log(error.message);
  }
};

