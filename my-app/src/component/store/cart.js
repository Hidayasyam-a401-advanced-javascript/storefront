let initalState = {
  basket: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initalState, action) => {
  let { type, payload } = action;
  let basket = state.basket;
  switch (type) {
    case "Add":
      // let product =payload;
       
      //   let list = []
      //   product.forEach(element => {
      //      list.push(Object.values(element))
      //   });
      //    console.log('list',list)
      //    for(let i = 0; i < list.length;i++ ){
      //   if (payload===list[i][1]){

      //   let activeCategory = list[i][1]
      //   return {activeCategory, categories};
      // }}
      // break
      console.log('AddCart ' ,Object.values(payload))

      if (basket.indexOf(payload.name) <= -1) {
        basket = [...basket, payload];
        console.log('basket ---> : ',basket)
      }
      return { basket };
      case "Delete":
        basket.splice(basket.indexOf(payload), 1);
        basket = [...basket];
        return { basket };
  
    default:
      return state;
  }
};

export const AddCart = (product) => {
  return {
    type: 'Add',
    payload: product
  }
}

export const Delete = (product) => {
  return {
    type: 'Delete',
    payload: product
  }
}