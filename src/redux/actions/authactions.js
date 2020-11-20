export const Login=(Name)=>{
    return{
        type :'LOGIN',
        payload : Name
     } 
        
 }
 
 export const LOGOUT=()=>{
     return{
         type : 'LOGOUT'
     }
 }
 
 