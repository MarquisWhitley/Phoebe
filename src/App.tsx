import { Dispatch, SetStateAction, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RocketAnimation from "./assets/rocketship";
import "./App.scss";
import Login from "./components/AuthComponents/Login.component";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = () => {
   const [count, setCount]: [number, Dispatch<SetStateAction<number>>] =
      useState(0);
   const name: string = "Brange";

   return (
      <QueryClientProvider client={queryClient}>
         <Router>
            <Routes>
               <Route path='/' element={<Login />} />
            </Routes>
         </Router>
      </QueryClientProvider>
   );
};

export default App;
