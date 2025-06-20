import {Routes, Route} from 'react-router-dom';

import LandingPage from './views/LandingPage';
import './App.css'

const App = () =>{
  return (
    <Routes>
      <Route path="/stargazer" element={<LandingPage />} />
    </Routes>
  )
}

export default App
