import axios from "axios";
import { toast } from "react-toastify";

export const registerAction = (authData) => async (dispatch) => {
  try {
    const data = await axios.post("http://192.168.1.134:3000/register", authData);

    dispatch({ type: "REGISTER", payload: data });

    window.location = "/";

  } catch (error) {
    var message;
    if(error.response){
      message = error.response.data.msg
      toast(message, {
        position: "top right",
        autoClose: 5000,
      });
    }else{
      message = error.message
      console.log(message);
    }
  }
};

export const loginAction = (authData) => async (dispatch) => {
  try {
    const data = await axios.post("http://192.168.1.134:3000/login", authData);

    dispatch({ type: "LOGIN", payload: data });

    window.location = "/";

  } catch (error) {
    var message;
    if(error.response){
      message = error.response.data.msg
      toast(message, {
        position: "top right",
        autoClose: 5000,
      });
    }else{
      message = error.message
      console.log(message);
    }
  }
};
