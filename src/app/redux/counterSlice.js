import { createSlice } from "@reduxjs/toolkit";




const counterReducer = createSlice({
    name: 'counterReducer',

    initialState: {
        counter: 0 ,
    },
    
    reducers:{
        increment: function(state){
          state.counter++;
        },
  
        decrement: function(state){
          state.counter--;
        }
      }
});

export const { increment, decrement } = counterReducer.actions;
export default counterReducer.reducer