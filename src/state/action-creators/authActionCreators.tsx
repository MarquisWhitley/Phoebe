import axios from "axios";
import { AuthAction } from "../actions/authActions";
import { AuthActionType } from "../action-types/authActionTypes";
import { Dispatch } from "redux";
import setAuthToken from "../../utils/setAuthToken";

export const loadUser = () => async (dispatch: Dispatch<AuthAction>) => {
   if (localStorage.token) {
      setAuthToken(localStorage.token);
   }

   try {
      const res = await axios.get("");

      dispatch({
         type: AuthActionType.USER_LOADED,
         payload: res.data,
      });
   } catch (err) {
      dispatch({
         type: AuthActionType.AUTH_ERROR,
      });
   }
};

export const login =
   (emailOrUserName: string, password: string) =>
   async (dispatch: Dispatch<AuthAction>) => {
      const config = {
         headers: {
            "Content-Type": "application/json",
         },
      };
      const body = JSON.stringify({ emailOrUserName, password });
      try {
         const res = await axios.post(
            "http://localhost:3000/v1/auth/login",
            body,
            config,
         );

         dispatch({
            type: AuthActionType.LOGIN_SUCCESS,
            payload: res.data,
         });
      } catch (error) {
         dispatch({
            type: AuthActionType.LOGIN_FAIL,
         });
      }
   };
