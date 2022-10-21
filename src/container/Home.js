import React from "react";
import ResponsiveAppBar from '../component/ResponsiveAppBar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase';
import Album from "./Album";

const Home = () => {

  return (
    <>    
      <ResponsiveAppBar />
      <Album/>
    </>
  );
}

export default Home;