import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux';
import store from './react-redux-store/store.js';

import { FleetManager } from './FleetManager.jsx';
import { Ship } from './Ship.jsx';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FleetManager/>}>
            <Route exact path="cruiser" element={<Ship type="cruiser"/>} />
            <Route exact path="destroyer" element={<Ship type="destroyer"/>} />
          </Route>  
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;