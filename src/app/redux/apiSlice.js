import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';

export const getPosts = createAsyncThunk('apiSlice/getData', async () => {
    const allData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const finalRes = await allData.json();
    return finalRes; 
  });



  const apiSlice = createSlice({
    name: 'apiSlice',
  
    initialState: {
      allData: null,
      isLoading: false,
      isError: false,
    },
  
    extraReducers: (builder) => {
      builder
        .addCase(getPosts.fulfilled, (state, action) => {
          state.allData = action.payload; 
          state.isLoading = false;
          state.isError = false;
        })
        .addCase(getPosts.rejected, (state, action) => {
          state.isLoading = false;
          state.isError = true;
        })
        .addCase(getPosts.pending, (state) => {
          state.isLoading = true;
          state.isError = false;
        });
    },
  });

  export const { allData , isError , isloading} = apiSlice.actions;
  export default apiSlice.reducer;

