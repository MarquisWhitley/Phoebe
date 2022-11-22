import { Dispatch, SetStateAction, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Signin from "./components/AuthComponents/Sigin.component";
import { QueryClient, QueryClientProvider } from "react-query";
import { getAuthToken } from "./utils/getAuthToken";
import setAxiosAuthToken from "./utils/setAxiosAuthToken";

const queryClient = new QueryClient();

const App = () => {
  // SetToken
  const token = getAuthToken();
  setAxiosAuthToken(token);


   return (
      <QueryClientProvider client={queryClient}>
         <Router>
            <Routes>
               <Route path='/' element={<Signin />} />
            </Routes>
         </Router>
      </QueryClientProvider>
   );
};

export default App;
