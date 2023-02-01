import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import App from './routes';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'tw-elements';
import { Provider } from 'react-redux';
function AppWithCallbackAfterRender() {
  return <App tab="home" />
}
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWithCallbackAfterRender />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
