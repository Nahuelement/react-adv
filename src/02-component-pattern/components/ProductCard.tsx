

import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css'




import { createContext} from 'react';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;




export interface PropsCard {
    product:Product,
    children?:React.ReactElement | React.ReactElement[],
    className?:string,
    style?:React.CSSProperties,
    onChange?:(args:onChangeArgs)=>void,
    value?:number
}
    



export const ProductCard = ({children,product,className,style,onChange,value} : PropsCard) => {

    const {counter ,increaseBy} = useProduct({onChange,product,value})// PARA HACER TODOS LOS CAMBIOS EN EL CUSTOMHOOK
    
    return (

        <Provider value = {{
            counter,
            increaseBy,
            product
        }} >
        <div 
        className = {`${styles.productCard} ${className}`}
        style = {style}
        
        >
                {children}
            

         </div>
         </Provider>
    )
}
