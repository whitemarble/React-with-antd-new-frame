import { combineReducers } from 'redux';
import MyButtonReducer from './MyButtonReducer';
import LoginReducer from './LoginReducer';


const myApp = combineReducers({
    MyButtonReducer,
    LoginReducer
})

export default myApp