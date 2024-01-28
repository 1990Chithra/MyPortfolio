import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './Components/Home'
import Header from './Components/Header'
import {Route,Routes} from 'react-router-dom'
import Skills from './Components/Skills'
import Contacts from './Components/Contacts'
import Projects from './Components/Projects'
import PageNotFound from './Components/PageNotFound';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <header>
      <Header/>
      </header>
      <section>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/skills' element={<Skills/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
          <Route path='*' element={<PageNotFound/>}/>

      </Routes> 
      </section>
    </ThemeProvider>
  );
}