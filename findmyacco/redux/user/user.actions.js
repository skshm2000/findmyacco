import { LOGIN, BUTTONLOADING, ERROR } from "./user.types";
import axios from "axios";

const Loginner = (creds) => async (dispatch) => {
  dispatch({
    type: BUTTONLOADING,
  });
  try {
    let res = await axios.post("", creds);
    let data = await res.data;
    if (data.error) {
      return dispatch({
        type: ERROR,
        payload: data.msg,
      });
    } else {
      return dispatch({
        type: LOGIN,
        payload: data.user,
      });
    }
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: "Something went Wrong",
    });
  }
};

export { Loginner };
