import rp from 'axios'


export const loginClicked = ()=>{
    return{
        type:'C',
        payload:rp.get('http://localhost:443/customer')
    }
}