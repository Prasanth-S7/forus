import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './components/custom-component/themeContext';
import { Home } from './screens/Home';
import { MoneyManager } from './screens/MoneyManager';
import { Tracking } from './screens/Tracking';
import { Transport } from './screens/Transport';
import { Login } from './screens/Login';
import { Toaster } from "@/components/ui/toaster"
import { Floodhub} from './screens/FloodHub';
import './index.css';
import { Pdrs } from './screens/Pdrs';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/moneymanager" element={<MoneyManager />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/tracking" element={<Tracking />} />
          <Route path="/pdrs" element={<Pdrs />}></Route>
          <Route path="/floodhub" element={<Floodhub />}></Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  );
};
export default App;
