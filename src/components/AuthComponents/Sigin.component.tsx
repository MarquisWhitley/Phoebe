import React, { useEffect, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import setAxiosAuthToken from '../../utils/setAxiosAuthToken';
import Button, { ButtonProps } from '../ButtonComponents/Button.component';
import { ButtonSizes } from '../ButtonComponents/ButtonSizes';
import { ButtonStyles } from '../ButtonComponents/ButtonStyles';
import './AuthComponentsStyling/Signin.scss';
import { useSignIn, useRegistration } from './AuthHooks';
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from 'react-router-dom';
import InputField from '../InputFieldComponents/Inputfield.component';

const Signin = () => {
  const {
    signIn,
    signInResponse,
    signInStatus,
    signInVals,
    inputChange,
    signInError,
    signInErrorMessage,
  } = useSignIn();

  const signInBtn: ButtonProps = {
    btnSize: ButtonSizes.SMALL,
    btnStyle: ButtonStyles.PRIMARY,
    disabled: false,
    action: () => signIn(),
    children: 'Sign In',
  };

  let navigate = useNavigate();
  const continueBtn: ButtonProps = {
    btnSize: ButtonSizes.SMALL,
    btnStyle: ButtonStyles.PRIMARY,
    disabled: false,
    action: () => {
      console.log('Navigating');
      navigate('/');
    },
    children: 'Continue',
  };

  useEffect(() => {
    console.log(signInVals);
  }, [signInVals]);

  return (
    <div className='Login'>
      <>
        <h1>Hi Guys!</h1>
        {signInError ? (
          <>
            <span className='error'>{signInErrorMessage}</span>
            <br />
          </>
        ) : null}

        <InputField
          type={'text'}
          inputChange={inputChange}
          inputName={'email'}
          val={signInVals.email}
        >
          Username or Email
        </InputField>
        <br />
        <InputField
          type={'password'}
          inputChange={inputChange}
          inputName={'password'}
          val={signInVals.password}
        >
          Password
        </InputField>

        <br />
        <Button {...signInBtn} />
        <br />
        <p>Hi</p>
        <br />
        {/* <p>{JSON.stringify(signInResponse?.tokens) ?? "Login!"}</p> */}
        {signInStatus == 'loading' ? <Spinner animation='grow' /> : <span></span>}
      </>
    </div>
  );
};

export default Signin;
