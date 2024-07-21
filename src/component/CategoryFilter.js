import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../services/actions';
import "../css/Filter.css";


const CategoryDropdown = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);

  const handleChange = (event) => {
    dispatch(setCategory(event.target.value));
  };


  return (
    <div className='mt-5 mx-4 custom-select'>
        <h6>Category</h6>

      <select className='' value={category} onChange={handleChange}>
      <option value="">All</option>
      <option value="admin">Admin&Dash</option>
      <option value="landing">Landing Pages</option>
      <option value="bussiness">Bussiness&Corporate</option>
      <option value="portfolio">Portfolio&Resume</option>
      <option value="ecommerce">Ecommerce</option>
    
    </select>
    </div>
    
  );
};

export default CategoryDropdown;
