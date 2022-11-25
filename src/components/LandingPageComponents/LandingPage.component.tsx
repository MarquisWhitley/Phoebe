import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuthToken } from '../../utils/getAuthToken';

const LandingPage = () => {
  const navigation = useNavigate();
  const isAuthenticated = getAuthToken();

  useEffect(() => {
    if (isAuthenticated != null) {
      navigation('/home');
    }
  }, []);

  return <div>Welcome from Landing Pagfdsafdsae!</div>;
};

export default LandingPage;
