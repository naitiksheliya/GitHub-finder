const githubReducer=(state,action)=>{
    switch(action.type){
        case 'GET_USERS':
            return{
                ...state,
                users:action.payload,
                loading:false,
            }
            
            case 'SET_LOADING':
                return{
                    loading:true
                }
            
            case 'CLEAR_CALLED':
                return {
                    users:[],
                    loading:false
                }
        default:
            return state
    }
}
export default githubReducer