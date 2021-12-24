import { ReactElement } from 'react';






export interface Props {
    product:Product,
    children?:ReactElement | ReactElement[]
}
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
    ({ children, product }: Props): JSX.Element
    Title: ({ title }: {title?: string})=>JSX.Element
    Image:({ img }: {img?: string}) => JSX.Element,
    Buttons:() => JSX.Element

}