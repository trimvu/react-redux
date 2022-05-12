

const moneyReducer = (state, action) => {

    if(state === undefined){
        state = {
            dollarsGlobal: 0, 
        }
    }


    switch(action.type){

        case "ADD_MONEY": 
            return {
                ...state, 
                dollarsGlobal: state.dollarsGlobal + action.data
            }
            default:
                return state

    }
}

export default moneyReducer;