import React from 'react';
import "../css/Filter.css";
import { IoMdArrowDropright } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../services/actions';

const categories = ['All', 'Admin&Dash', 'Landing Pages','Bussiness&Corporate','Portfolio&Resume','Ecommerce'];

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category);

  return (
    <div className="dropdown mt-4 mx-4" >
    <h6>Category</h6>
    <button className="dropdown-button">
      {selectedCategory}<IoMdArrowDropright className="icon" />
    </button>
    <div className="dropdown-content">
      {categories.map((category) => (
        <div
          key={category}
          className="dropdown-item"
          onClick={() => dispatch(setCategory(category))}
        >
          {category}
        </div>
      ))}
    </div>
  </div>
  );
};

export default CategoryFilter;
