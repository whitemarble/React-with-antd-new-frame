const initialState = {
    text:"123"
}

const LoginReducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case 'C':
        return {
            text: action.payload
        };
        default:
        return state;
    }
    
}

export default LoginReducer