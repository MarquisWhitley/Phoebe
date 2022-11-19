import { AuthActionType } from "../action-types/authActionTypes";

export type AuthState = {
   token: string | null;
   isAuthenticated: boolean | null;
   loading: boolean,
   user: any; // Eventually use the User Object from OpenApi
};

interface LoadUserAction {
   type: AuthActionType.USER_LOADED
   payload: AuthState
}

interface RegisterSuccessAction {
   type: AuthActionType.REGISTER_SUCCESS
   payload: AuthState
}

interface RegisterFailAction {
   type: AuthActionType.REGISTER_FAIL
}

interface LoginSuccessAction {
   type: AuthActionType.LOGIN_SUCCESS
   payload: AuthState;
}

interface LoginFailAction {
   type: AuthActionType.LOGIN_FAIL
}

interface AuthErrorAction {
   type: AuthActionType.AUTH_ERROR
}

interface LogoutAction {
   type: AuthActionType.LOGOUT
}

interface DeleteAction {
   type: AuthActionType.DELETE
   payload: AuthState
}

interface UpdateAction {
   type: AuthActionType.UPDATE
   payload: AuthState
}


export type AuthAction =
   | LoadUserAction
   | RegisterSuccessAction
   | RegisterFailAction
   | LoginSuccessAction
   | LoginFailAction
   | AuthErrorAction
   | LogoutAction
   | DeleteAction
   | UpdateAction;
