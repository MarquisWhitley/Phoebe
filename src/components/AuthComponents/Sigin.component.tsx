import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "react-query";
import setAxiosAuthToken from "../../utils/setAxiosAuthToken";
import Button, { ButtonProps } from "../ButtonComponents/Button.component";
import { ButtonSizes } from "../ButtonComponents/ButtonSizes";
import { ButtonStyles } from "../ButtonComponents/ButtonStyles";
import "./AuthComponentsStyling/Signin.scss";
import {useSignIn, useRegistration} from "./AuthHooks";
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";

const Signin = () => {
   const { signIn, signInResponse, signInStatus, signInVals, inputChange, signInError, signInErrorMessage } =
      useSignIn();
   // const { data, mutate, isLoading } = signInQuery;

   // const query = useQuery("community", {
   //    queryFn: (body) => {
   //       console.log(axios.defaults);
   //       return axios
   //          .get("http://localhost:3000/v1/community", body)
   //          .then((res) => {
   //             console.log(res);
   //             return res.data;
   //          });
   //    },
   //    refetchOnWindowFocus: false,
   //    enabled: false,
   // });

   const signInBtn: ButtonProps = {
      btnSize: ButtonSizes.SMALL,
      btnStyle: ButtonStyles.PRIMARY,
      disabled: false,
      action: () => signIn(),
      children: "Sign In",
   };

   let navigate = useNavigate();
   const continueBtn: ButtonProps = {
      btnSize: ButtonSizes.SMALL,
      btnStyle: ButtonStyles.PRIMARY,
      disabled: false,
      action: () => {
         console.log("Navigating");
        navigate("/");
      },
      children: "Continue"
   }
   useEffect(() => {
      console.log(signInVals);
   },[signInVals])

   return (
      <div className='Login'>
      {signInStatus == "success" ? <>
      <div>
         <span>Welcome, {signInResponse?.user.firstName}</span>
         <Button {...continueBtn} />
      </div>
      </> : <>
               <h1>Hi Guys!</h1>
             {signInError ? 
                  <>
                  <span className="error">{signInErrorMessage}</span>
                  <br />
                  </> : null}

               <label htmlFor="email">
                  <span>Email / UserName</span>
                  <br />
               <input type="text" id="email" value={signInVals.email} onChange={inputChange} name="email"/>
               </label>
               <br/>
               <label htmlFor="password">
                  <span>Password</span>
                  <br />
                 
               <input type="password" value={signInVals.password} onChange={inputChange} name="password"/>
               </label>
               <br/>
               <Button {...signInBtn} />
               <p>Hi</p>
               {/* <p>{JSON.stringify(signInResponse?.tokens) ?? "Login!"}</p> */}
               {signInStatus == "loading" ? <Spinner animation="grow"/> : <span></span>}
            </>}

            
      </div>
   );
};

export default Signin;
