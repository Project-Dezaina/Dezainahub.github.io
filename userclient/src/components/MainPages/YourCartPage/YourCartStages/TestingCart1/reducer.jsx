export const reducer = (state, action) => {
  if (action.type == "REMOVE_ITEM") {
    return {
      ...state,
      items: state.items.filter((item) => {
        return item.id !== action.payload;
      }),
    };
  }

  if (action.type == "INCREMENT") {
    let updatedCart = state.item.map((item) => {
      if (item.id == action.payload) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    return { ...state, item: updatedCart };
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
