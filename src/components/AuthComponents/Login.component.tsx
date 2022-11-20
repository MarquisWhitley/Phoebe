import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Button from "../ButtonComponents/Button.component";
import { ButtonSizes } from "../ButtonComponents/ButtonSizes";
import { ButtonStyles } from "../ButtonComponents/ButtonStyles";
import "./AuthComponentsStyling/Login.scss";

const Login = () => {
   const [disable, setDisable] = useState(false);

   const [results, setResults] = useState({
      email: "",
      firstName: "",
      id: "",
      lastName: "",
      userName: "",
      userInterests: [],
   });

   const loginUser = () =>{
      setDisable(true);
      return axios
         .post("http://localhost:3000/v1/auth/login", {
            email: "Test",
            password: "Paperplanes1",
         })
         .then((response) => {
            setDisable(false)
            return response.data;
         });
      }

   const { data, status, refetch } = useQuery("login", loginUser, {
      refetchOnWindowFocus: false,
      enabled: false,
   });

   if (status == "loading") {
      return <div>Loading!!!</div>;
   }

   return (
      <div className='Login'>
         <h1>Hi Guys!</h1>
         <Button
            btnSize={ButtonSizes.SMALL}
            btnStyle={ButtonStyles.PRIMARY}
            action={refetch}
            disabled={false}
         >
            HELLO GUYS!
         </Button>
         <p>Hi</p>
         <p>{JSON.stringify(data?.user) ?? "Login!"}</p>
         {/* {Object.entries(results).map(([key, val], idx) => {
            return <div key={idx}>{`${key} : ${val}`}</div>;
         })} */}
      </div>
   );
};

export default Login;