import React from "react";
import ResponsiveAppBar from '../component/ResponsiveAppBar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import Blog from "./Blog";
import Copyright from "../component/Copyright";

const Home = () => {

  const [user] = useAuthState(auth);

  return (
    <>    
      <ResponsiveAppBar />
      <Blog/>
    </>
  );
}

export default Home;