import gloabalReducer from 'src/Store/Reducers/globalReducer';
import { configureStore } from '@reduxjs/toolkit';


// const gg = 5;
// gg = 6; 
const store = configureStore({
    reducer: gloabalReducer,
    // other configuration options if needed
});
  
export default store;
 
