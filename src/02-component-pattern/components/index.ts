import { ProductCard as ProductCardHOC} from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductBottons } from './ProductBottons';
import { ProductCardMainProps } from '../interfaces/interfaces';
// export { ProductCard } from './ProductCard';
export { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';
export { ProductBottons } from './ProductBottons';




export const ProductCard:ProductCardMainProps =  Object.assign(ProductCardHOC,{
    Title:ProductTitle,
    Image:ProductImage,
    Buttons:ProductBottons

})