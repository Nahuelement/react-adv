import { useState } from 'react';
import { ProductInCart, Product } from '../interfaces/interfaces';


export const useShopingCart  = () =>{

    const [shopingCart, setShopingCart] = useState<{[key:string]:ProductInCart}>({})

    const onProductCountChange = ({count,product}:{count:number,product:Product}) => {
        
        setShopingCart(oldShopingCart =>{

            const ProductInCart: ProductInCart = oldShopingCart[product.id] || {...product,count:0}

            if(Math.max(ProductInCart.count + count ,0)>0){
                ProductInCart.count += count;
                return{
                    ...oldShopingCart,
                    [product.id]:ProductInCart
                }
            }

            //BORRAR PRODUCTO
            const {[ product.id] : deleteId, ...rest} = oldShopingCart
                
            return {...rest}


            
            // if (count === 0){
            //     const {[ product.id] : deleteId, ...rest} = oldShopingCart
                
            //     return rest}
            // return{
            //     ...oldShopingCart,
            //     [product.id]:{
            //         ...product,
            //         count
            //     }
            // }
        })}
        return {
            shopingCart,
            onProductCountChange

        }
    }
