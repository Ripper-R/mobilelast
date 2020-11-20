const INITIAL_STATE={
    Name:'',
    islogin:false
}


export default(State=INITIAL_STATE,action)=>{
    switch(action.type){
        case "LOGIN" :
            return{...State,islogin:true,Name:action.payload}
        case "LOGOUT" :
            return INITIAL_STATE
        default :
            return State    
    }
}