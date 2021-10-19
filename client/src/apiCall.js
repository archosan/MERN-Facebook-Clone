import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      userCredentials
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "LOGIN_FAIL", error: error });
  }
};
