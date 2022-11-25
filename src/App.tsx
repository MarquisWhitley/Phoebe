import { Dispatch, SetStateAction, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import Signin from './components/AuthComponents/Sigin.component';
import { QueryClient, QueryClientProvider } from 'react-query';
import { getAuthToken } from './utils/getAuthToken';
import setAxiosAuthToken from './utils/setAxiosAuthToken';
import PrivateRoute from './components/Routing/PrivateRouting';
import Register from './components/AuthComponents/Register.component';
import Navigation from './components/Navbar/Navbar.component';
import AboutSection from './components/AboutComponents/About.component';
import Dashboard from './components/DashboardComponents/Dashboard.component';
import LandingPage from './components/LandingPageComponents/LandingPage.component';

const queryClient = new QueryClient();

const App = () => {
  // SetToken
  const token = getAuthToken();
  setAxiosAuthToken(token);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/signin' element={<Signin />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<LandingPage />} />
          <Route path='/home' element={<PrivateRoute />}>
            <Route path='/home' element={<Dashboard />} />
          </Route>
          <Route path='/about' element={<AboutSection />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
