import { useContext } from "react";
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg'
import styles from '../styles/styles.module.css'

export interface PropsImages {
    img?:string,
    className?:string,
    style?:React.CSSProperties
}


export const ProductImage = ({img = '',className,style}:PropsImages) =>{
    const {product} = useContext(ProductContext)
    let imToShow: string;
    if (img){
        imToShow= img
    }else if (product.img){
        imToShow= product.img
    }else {
        imToShow= noImage
    }

    return(
        <img 
        className = {`${styles.productImg} ${className}`} 
        style = {style}
        src = {imToShow} alt ='Coffee Mug' />
    )
    }