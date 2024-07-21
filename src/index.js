import React,{useEffect} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Route,Link,Switch,Routes } from 'react-router-dom';

import { Provider} from 'react-redux';
import store from './services/store';
// import Categories from './component/Categories';
import './css/Categories.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


ReactDOM.render(
 
  <Provider store={store}>
  <App/>
 
    {/* <Categories /> */}
  </Provider>,
  document.getElementById('root')
);
