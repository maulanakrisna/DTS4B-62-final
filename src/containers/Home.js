import React from "react";
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import Blog from "./Blog";

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