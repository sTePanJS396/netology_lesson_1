import React from 'react';
import App from './App';
// import ReactDOM from 'react-dom'; 

// Реакт выдает ошибку:
// "Warning: ReactDOM.render is no longer supported in React 18. 
// Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17".
// Поэтому, следуя его рекомендациям и документации (https://github.com/reactwg/react-18/discussions/5), делаю следущее:

import * as ReactDOMClient from 'react-dom/client';

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

