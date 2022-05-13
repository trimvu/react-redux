// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import Deposit from './components/Deposit';
// import Buy from './components/Buy';
// import Checkout from './components/Checkout';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import BaseLayout from './components/layout/BaseLayout'


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   // <React.StrictMode>
//     // <App />
//   // </React.StrictMode>

//   <Router>
//     <BaseLayout>
//       <Routes>

//         <Route path='/' element={<App />} />
//         <Route path='/deposit' element={<Deposit />} />
//         <Route path='/buy' element={<Buy />} />
//         <Route path='/checkout' element={<Checkout />} />

//       </Routes>
//     </BaseLayout>
//   </Router>
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Deposit from './components/Deposit';
import Buy from './components/Buy';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import BaseLayout from './components/layout/BaseLayout'
import './secrets'

import {createStore} from 'redux'; 
import {Provider} from 'react-redux'

import reducer from './reducers'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())//reducer

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>
ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
  <Router>
    <BaseLayout>
      <Routes>

        <Route path='/' element={<App />} />
        <Route path='/deposit' element={<Deposit />} />
        <Route path='/buy' element={<Buy />} />
        <Route path='/checkout' element={<Checkout />} />

      </Routes>
    </BaseLayout>
  </Router>
  </Provider>
</React.StrictMode>
  ,
  document.getElementById('root')
);