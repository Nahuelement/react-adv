import { Product ,Basket } from '../interfaces/interfaces';


export interface State {
  basket?:[Basket];
  
}


export interface Actions {
    payload:Product;
    type:string;
   
}

const BasketReducer = (state:any , action:Actions) => {
    switch (action.type) {
      case 'add': {
        const basket = state.basket ? [...state.basket] : []
        const existing = basket.findIndex(
          (item) => item.id === action.payload.id
        )
        if (existing !== -1) {
          basket[existing].quantity = basket[existing].quantity + 1
        } else {
          basket.push({ quantity:1, ...action.payload })
        }
        return {
          ...state,
          basket,
        }
      }
      case 'put': {
        const basket = state.basket ? [...state.basket] : []
        const existing = basket.findIndex(
          (item) => item.id === action.payload.id
        )
        if (existing !== -1) {
          basket[existing].quantity = basket[existing].quantity - 1
          if (basket[existing].quantity<=0){
            basket[existing].quantity = 0
          }
        } else {
          basket.push({ quantity:0, ...action.payload })
        }
        
        return {
          ...state,
          basket,
        }
      }
      case 'clearBasket': {
        return {
          ...state,
          basket: [],
        }
      }
      default:
        return {...state}
    }
  }
  
  export default BasketReducer