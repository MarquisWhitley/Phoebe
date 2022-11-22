import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import setAxiosAuthToken from "../../utils/setAxiosAuthToken";
import axios from "axios";

interface UserCredentials {
   email: string;
   password: string;
}

interface LoginResponse {
   user: User;
   tokens: Tokens;
}

interface Tokens {
   access: Token;
   refresh: Token;
}

interface Token {
   token: string;
   expires: string;
}

interface User {
   email: string;
   firstName: string;
   lastName: string;
   userName: string;
   id: string;
   isEmailVerified: boolean;
   role: TypeOfRoles;
   userIntersts: [string];
   sex: TypeOfSexes;
}

enum TypeOfRoles {
   CLIENT = "client",
   ADMIN = "admin",
}

enum TypeOfSexes {
   MALE = "male",
   FEMALE = "female",
}

interface ErrorResponse {
   code: number;
   message: string;
}

enum ErrorCodes {
   UNAUTHORIZED = 401,
   NOT_FOUND = 404,
   SERVER_ERROR = 500,
}

const useSignIn = () => {
   const signInInitialValues: UserCredentials = {
      email: "Test",
      password: "Paperplanes1",
   };

   const [signInValues, setSignInValues] = useState(signInInitialValues);
   const [errorMessage, setErrorMessage] = useState("");

   const handleSignInInputChange = (e: React.FormEvent<HTMLInputElement>) => {
      const { name, value } = e.currentTarget;
      setSignInValues({
         ...signInValues,
         [name]: value,
      });
   };

   const errorHandler = (e: ErrorResponse) => {
    setErrorMessage(e.message)
   };

   const accountSignInEndpoint: string = "http://localhost:3000/v1/auth/login";

   //    const { mutate, data, status, isError } = useMutation({
   //     mutationFn: (userCreds: UserCredentials) => {
   //        return axios
   //           .post<LoginResponse>(accountSignInEndpoint, userCreds)
   //           .then((res) => {
   //              console.log(res.data.user.role);
   //              localStorage.setItem('token', res.data.tokens.access.token)
   //              setAxiosAuthToken(res.data.tokens.access.token);
   //              return res.data;
   //           }).catch((e) => {
   //               console.log(e);
   //               errorHandler(e.response.data)
   //               return e;
   //           });
   //     },
   //  });
   const { mutate, data, status, isError } = useMutation({
      mutationFn: (userCreds: UserCredentials) => {
         return axios.post<LoginResponse>(accountSignInEndpoint, userCreds);
      },
      onError: (error: any, variables, context) => {
          errorHandler(error.response.data);
      },
   });

   const signInUser = () => {
      mutate(signInValues);
   };

   return {
      signIn: signInUser,
      signInResponse: data?.data,
      signInStatus: status,
      inputChange: handleSignInInputChange,
      signInVals: signInValues,
      signInError: isError,
      signInErrorMessage: errorMessage
   };
};

const useRegistration = () => {
   const registrationInitialValues = {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      cpassword: "",
   };

   const [registerValues, setRegisterValues] = useState(
      registrationInitialValues,
   );
};

export { useSignIn, useRegistration };
