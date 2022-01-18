import { useContext } from "react"
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css'
// import { useDispatch, useSelector } from 'react-redux'

export interface PropsButton {
    className?:string,
    style?:React.CSSProperties,
    product:any,
    quantity?:number
}

export const ProductBottons = ({className,style,product,quantity}:PropsButton) =>{

    const {counter, increaseBy} = useContext(ProductContext)
    // const dispatch = useDispatch()
    

   return(
       <div 
       className = {`${styles.buttonsContainer} ${className}`}
       style = {style}

       >
       <button 
       className ={styles.buttonMinus}
       
       onClick= {() =>{
        // dispatch({type:'put',payload:product})
        increaseBy(-1)}
       } 
       >
           -
       </button>
       <div 
       className ={styles.countLabel}>
           {counter}
       </div>
       <button 
       className ={styles.buttonAdd}
       onClick= {() => {
        //    dispatch({type:'add',payload:product})
           increaseBy(+1)}}
       >
           +
       </button>

   </div>
   )
}