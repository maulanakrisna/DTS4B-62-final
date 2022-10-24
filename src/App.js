import { ThemeProvider } from '@mui/material';
import './App.css';
import CorpTheme from './themes/CorpTheme';
import React from "react";
import ResponsiveAppBar from './components/ResponsiveAppBar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './config/firebase';
import Blog from "./containers/Blog";


const App = () => {

  const [user] = useAuthState(auth);
  
  return (
    <>
      <ThemeProvider theme={CorpTheme}>
        <ResponsiveAppBar />
        <Blog/>
      </ThemeProvider>
    </>
  );
}

export default App;
