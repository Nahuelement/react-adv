import { useState } from 'react';
import { ProductInCart, Product } from '../interfaces/interfaces';


export const useShopingCart  = () =>{

    const [shopingCart, setShopingCart] = useState<{[key:string]:ProductInCart}>({})

    const onProductCountChange = ({count,product}:{count:number,product:Product}) => {

        console.log(count)
        
        setShopingCart(oldShopingCart =>{

           
            if (count === 0){
              const {[ product.id] : deleteId, ...rest} = oldShopingCart
                
                    return rest
                }
             return{
                 ...oldShopingCart,
                    [product.id]:{
                     ...product,
                     count
                 }
             }
        })}
        return {
            shopingCart,
            onProductCountChange

        }
    }
