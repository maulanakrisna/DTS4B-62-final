import { ThemeProvider } from '@mui/material';
import './App.css';
import Home from './containers/Home';
import CorpTheme from './themes/CorpTheme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={CorpTheme}>
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
