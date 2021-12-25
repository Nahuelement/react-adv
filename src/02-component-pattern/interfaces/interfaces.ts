
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
    product:Product

}
export interface ProductCardMainProps {
    ({ children, product,className}: PropsCard): JSX.Element
    Title: (Props: ProductTitlePros)=>JSX.Element
    Image:(Props: PropsImages) => JSX.Element,
    Buttons:(Props: PropsButton) => JSX.Element

}