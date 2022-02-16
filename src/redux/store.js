import React from 'react'
import { createStore } from 'redux';
import Connectreducer from './reducer';


const store = createStore(Connectreducer);


export default store