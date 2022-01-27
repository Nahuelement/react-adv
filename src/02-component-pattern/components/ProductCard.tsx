

import { useProduct } from '../hooks/useProduct';

import styles from '../styles/styles.module.css'




import { createContext} from 'react';
import { ProductContextProps, Product, onChangeArgs, InitialValues ,ProductCardHandlers} from '../interfaces/interfaces';



export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;




export interface PropsCard {
    product:Product,
    // children?:React.ReactElement | React.ReactElement[],
    children:(args:ProductCardHandlers) => JSX.Element
    className?:string,
    style?:React.CSSProperties,
    onChange?:(args:onChangeArgs)=>void,
    value?:number,
    initialValue?:InitialValues
}
    



export const ProductCard = ({children,product,className,style,onChange,value,initialValue} : PropsCard) => {

    const {counter ,increaseBy, maxCount,isMaxCountReached,reset,} = useProduct({onChange,product,value,initialValue})// PARA HACER TODOS LOS CAMBIOS EN EL CUSTOMHOOK
    
    return (

        <Provider value = {{
            counter,
            increaseBy,
            product, 
            maxCount,
            isMaxCountReached
           
          
            
        }} >
        <div 
        className = {`${styles.productCard} ${className}`}
        style = {style}
        
        >
                {children({
                    count:counter,
                    isMaxCountReached,
                    product,
                    reset,
                    increaseBy

                })}
            

         </div>
         </Provider>
    )
}
