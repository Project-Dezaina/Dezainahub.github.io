export const reducer = (state, action) => {
      if (action.type == "REMOVE_ITEM") {
    return {
      ...state,
      items: state?.items?.map(item => {
        const quantity = item.quantity;

        if(item.id === action.payload) 
          return { ...item, quantity: quantity === 0 ? 0: quantity - 1 }

        return item;
      })
    };
  }

  if (action.type == "INCREMENT") {

    let updatedCart = state.items?.map((item) => {
      if (item.id == action.payload) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return { ...state, items: updatedCart };
  }

  if(action.type=="GET_TOTAL"){
    let {totalItem,totalAmount} = state.item.reduce(
        (accum,curVal)=>{
            let {price, quantity} = curVal;
            let updatedTotalAmount = price*quantity;
            accum.totalItem += updatedTotalAmount;
            return accum;
        },
        {
            totalItem: 0,
            totalAmount
        }
    )
  }

  return state;
};
