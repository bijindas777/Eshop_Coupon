
//for Add Item to Cart
export const addCart = (product) =>{
    return{
        type:"ADDITEM",
        payload :product
    }
}
//For Delete Item From Cart
export const delCart=(product)=>{
    return{
        type:"DELITEM",
        payload:product
    }
}
export const addItemQty = (product) => {
    return{

        type:"ADD_ITEM_QTY",
        payload: product
    }
};

export const removeItemQty = (product) => {
    return{

        type:"REMOVE_ITEM_QTY",
        payload: product
    }
};
