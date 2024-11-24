'use client';
import React from 'react'
import { useSelector , useDispatch } from 'react-redux'

type state = {
  counter: {
    counter: number
  };
};

export default function Navbar() {
  const counter = useSelector((state:state) => state.counter.counter);
  return (
    <div className='bg-secondary-subtle d-flex justify-content-between px-5'>
      <h1>Navbar</h1>
      <h2>{counter}</h2>

    </div>
  )
}
