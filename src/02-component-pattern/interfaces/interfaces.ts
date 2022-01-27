
import { PropsCard } from '../components/ProductCard';
import { PropsButton } from '../components/ProductBottons';
import { ProductTitlePros } from '../components/ProductTitle';
import { PropsImages } from '../components/ProductImage';



export interface Product {
    id:string;
    title:string;
    img?:string;
}

export interface ProductButtonsProps {
    counter:number, 
    increaseBy: (value: number) => void,
}

export interface ProductContextProps {
    counter:number,
    increaseBy:(value: number) => void,
    product:Product,
    maxCount?:number,
    isMaxCountReached:boolean
    
    
    
     

}
export interface ProductCardMainProps {
    ({ children, product,className}: PropsCard): JSX.Element
    Title: (Props: ProductTitlePros)=>JSX.Element
    Image:(Props: PropsImages) => JSX.Element,
    Buttons:(Props: PropsButton) => JSX.Element
}
export interface Basket {
    id:string,
    title:string,
    quantity:number, 
    
}  
export interface onChangeArgs {
    product:Product, 
    count:number
}

export interface ProductInCart extends Product  { //LAS INTERFACES SE PUEDEN EXTENDER
    count:number
}
export interface InitialValues {
    count?:number,
    maxCount?:number
}

export interface ProductCardhandler {
    count:number,
    isMaxCountReached:boolean,
    maxCount?:number,
    product:Product,
   
}

export interface ProductCardHandlers{
    count:number,
    isMaxCountReached:boolean,
    maxCount?:number,
    product:Product,
    increaseBy:(value: number) => void,
    reset:() => void


}