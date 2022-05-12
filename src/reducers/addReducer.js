

const addReducer = (state, action) => {

/* 
    [
      {
        gif: url,
        price: price
      }
      {
        gif: url,
        price: price
      }
      {
        gif: url,
        price: price
      },
    ]
*/

    if(state === undefined){
        state = {
            // dollarsGlobal: 0, 
            cart: [],
            totalPrice: 0
        }
    }


    switch(action.type){

        case "ADD_TO_CART": 
            return {
                ...state, 
                cart: state.cart.concat(action.data),
                totalPrice: state.totalPrice + action.data.price
            }
            default:
                return state

    }
}

export default addReducer;