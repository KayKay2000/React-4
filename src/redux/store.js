import React from 'react'
import { createStore } from 'redux';
import squareReducer from './reducer';


const store = createStore(squareReducer);


export default store