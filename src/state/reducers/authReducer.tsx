import { AuthState, AuthAction } from "../actions/authActions";
import { AuthActionType } from "../action-types/authActionTypes";

const initialState: AuthState = {
   token: localStorage.getItem("token"),
   isAuthenticated: null,
   loading: true,
   user: null,
};

const reducer = (state: AuthState = initialState, action: AuthAction) => {
   switch (action.type) {
      case AuthActionType.USER_LOADED:
         return {
            ...state,
            isAuthenticated: true,
            loading: false,
            user: action.payload,
         };
      case AuthActionType.LOGIN_SUCCESS:
      case AuthActionType.REGISTER_SUCCESS:
         return {
            ...state,
            ...action.payload,
            isAuthenticated: true,
            loading: false,
         };
      case AuthActionType.REGISTER_FAIL:
      case AuthActionType.LOGIN_FAIL:
      case AuthActionType.LOGOUT:
      case AuthActionType.AUTH_ERROR:
         localStorage.removeItem("token");
         return {
            ...state,
            token: null,
            isAuthenticated: false,
            loading: false,
         };
   }
};

export default reducer;
