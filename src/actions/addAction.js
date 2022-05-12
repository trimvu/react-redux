

const addAction = (url, price) => {
    
    return {
        type: "ADD_TO_CART", 
        data: {url, price}
    }
}


export default addAction


