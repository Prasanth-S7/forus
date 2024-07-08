import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider, ThemeContext } from './components/custom-component/themeContext';
import { Home } from './screens/Home';
import { MoneyManager } from './screens/MoneyManager';
import { Tracking } from './screens/Tracking';
import { Transport } from './screens/Transport';
import './index.css';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/moneymanager" element={<MoneyManager />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/tracking" element={<Tracking />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
};
export default App;
