import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import DeviceStore from "./store/deviceStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{device: new DeviceStore()}}>
    <App />
  </Context.Provider>
);