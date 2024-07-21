import React,{useEffect} from 'react'
import CategoryFilter from './CategoryFilter';
import ImageList from './ImageList';
import SingleUser from './SingleUser'
import Resource from './Resource';
import SingleReasource from './SingleReasource';


import { fetchData } from '../services/actions';
import { useDispatch } from 'react-redux';
import CreateUser from './CreateUser';



function Categories() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
        <CategoryFilter />
        <ImageList />
        <SingleUser userId={2} /> 
        <Resource/>
        <SingleReasource resourceId={2} />
        <CreateUser/>
    </div>
  )
}

export default Categories