// src/redux/reducers.js

import { combineReducers } from 'redux';
import { SET_CATEGORY } from './actions';

const initialState = {
    
  category: 'All',
  images: [
    { id: 1, category: 'Admin&Dash', src: '../assets/admin.jpg',download:"5000", text: 'SB Admin Pro' },
    { id: 2, category: 'Admin&Dash', src: '../assets/admindash.jpg', alt: 'Admin&Dash',download:"5000", text: 'SB Admin Pro' },
    { id: 3, category: 'Landing Pages', src: '../assets/landing.jpg', alt: 'Landing Pages',download:"5000", text: 'SB Admin Pro' },
    { id: 4, category: 'Landing Pages', src: '../assets/landing1.jpg', alt: 'Landing Pages',download:"5000", text: 'SB Admin Pro' },
    { id: 5, category: 'Bussiness&Corporate', src: '../assets/buss2.jpg', alt: 'Bussiness&Corporate',download:"5000", text: 'SB Admin Pro' },
    { id: 6, category: 'Bussiness&Corporate', src: '../assets/buss3.jpg', alt: 'Bussiness&Corporate',download:"5000", text: 'SB Admin Pro' },
    { id: 7, category: 'Bussiness&Corporate', src: '../assets/bussiness.jpg', alt: 'Bussiness&Corporate',download:"5000", text: 'SB Admin Pro' },
    { id: 8, category: 'Bussiness&Corporate', src: '../assets/bussiness1.jpg', alt: 'Bussiness&Corporate',download:"5000", text: 'SB Admin Pro' },
    { id: 9, category: 'Portfolio&Resume', src: '../assets/port1.jpg', alt: 'Portfolio&Resume',download:"5000", text: 'SB Admin Pro' },
    { id: 10, category: 'Portfolio&Resume', src: '../assets/port2.jpg', alt: 'Portfolio&Resume',download:"5000", text: 'SB Admin Pro' },
    { id: 11, category: 'Portfolio&Resume', src: '../assets/admin.jpg', alt: 'Portfolio&Resume',download:"5000", text: 'SB Admin Pro' },
    { id: 12, category: 'Ecommerce', src: '../assets/landing.jpg', alt: 'Ecommerce',download:"5000", text: 'SB Admin Pro' },
    { id: 13, category: 'Ecommerce', src: '../assets/landing1.jpg', alt: 'Ecommerce',download:"5000", text: 'SB Admin Pro' },
    { id: 14, category: 'Ecommerce', src: '../assets/admin.jpg', alt: 'Ecommerce',download:"5000", text: 'SB Admin Pro' },
    { id: 14, category: 'Ecommerce', src: '../assets/admindash.jpg', alt: 'Ecommerce',download:"5000", text: 'SB Admin Pro' },
  ],
};

const categoryReducer = (state = initialState.category, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return action.payload;
    default:
      return state;
  }
};

const imagesReducer = (state = initialState.images, action) => {
  return state;
};

const rootReducer = combineReducers({
  category: categoryReducer,
  images: imagesReducer,
});

export default rootReducer;
