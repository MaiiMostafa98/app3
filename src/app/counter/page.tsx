'use client';
import React, { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import Navbar from '../Navbar/Navbar';
import { increment, decrement } from "../redux/counterSlice";
import { Store } from '@reduxjs/toolkit';
import { getPosts } from '../redux/apiSlice';

type state = {
  counter: {
    counter: number
  };
}

type Post = {
  id: number;
  title: string
};


export default function page() {

  const counter = useSelector((state:state) => state.counter.counter);
  
  const dispatch = useDispatch(); 

 

  return (
      <div>
        <Navbar></Navbar>
          <div className='text-center'>
          <h1>COUNTER : {counter}</h1>
          <button className='me-2 btn btn-success' onClick={() => dispatch(increment())}>Increment</button>
          <button className='btn btn-success' onClick={() => dispatch(decrement())}>Decrement</button>
          </div>
      </div>
    

  );
}