import {SET_MESSAGE,CLEAR_MESSAGE} from './types';

// creating a method to call type of message 

//for set message
export const setMessage = (message)=>({
type : SET_MESSAGE,
payload : message,
});

//for clear message
export const clearMessage = (message)=>({
    type : CLEAR_MESSAGE,
 
    });
    