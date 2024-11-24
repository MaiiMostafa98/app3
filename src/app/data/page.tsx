'use client';
import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { getPosts , allData , isError , isloading} from '../redux/apiSlice';
import { AsyncThunkAction } from '@reduxjs/toolkit';


type State = {
    apiSliceReducer: {
      allData: Post[]; 
      isloading: boolean;
      isError: boolean;
    };
  };

type Post = {
  id: number;
  title: string
};


export default function page() {

    const dispatch= useDispatch();
    const { allData, isloading, isError } = useSelector((state:State) => state.apiSlice);
  
    React.useEffect(() => {
      dispatch(getPosts()); 
    }, [dispatch]);
  
    if (isloading) return <p>Loading...</p>;
    if (isError) return <p>Error: errrrror</p>;

  return  (

    <div className='row w-75 m-auto'>
      {allData && allData.map((post:Post) => (
        <div className='col-md-3 border border-primary text-center  ' key={post.id}>
          <h1>ID: {post.id}</h1>
          <h5>Title: {post.title}</h5>
        </div>
      ))}
    </div>
 
  );
}