import { useEffect, useState } from "react";
import {Header,Footer} from './components/index.js'
import { useDispatch } from "react-redux";
import  authService  from "./Service/appwrite/auth";
import { login, logout } from "./features/authentication/authSlice";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    
        .then((userData) => {
          if (userData) {
            dispatch(login({ userData }));
          } else {
            dispatch(logout());
          }
        })
        .finally(() => setloading(false));
    
  }, []);

  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  ) : <>Loading ...</>
}

export default App;
