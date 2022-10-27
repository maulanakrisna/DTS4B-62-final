import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import { Box } from '@mui/material';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute>
          <App />
          </ProtectedRoute>} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<SignUp />} />
        <Route
          path="*"
          element={
            <Box sx={{
              display: 'flex',
              margin: 10,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}>
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/404-error-4461124-3696774.png"
            alt="404"
          />
          <p>You have reach the edge of universe</p>
          <Link to="/">Take me home!</Link>
        </Box>
      }
    />
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
