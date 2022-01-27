



import React from 'react'
import { ProductCard } from '../components/ProductCard';
import { ProductImage } from '../components/ProductImage';
import { ProductTitle } from '../components/ProductTitle';
import { ProductBottons } from '../components/ProductBottons';

import {Product} from '../interfaces/interfaces'
interface Products {
    Producto:Product
}



// export const Component1 = ({Producto}:Products) => {
//     return (
//         <div
//         style={{
//             display:'flex',
//             flexDirection:'row',
//             flexWrap:'wrap'}}
//         >
//               <ProductCard 
//             product = {Producto}
//             className = 'bg-dark text-white'>
//                 < ProductImage 
//                 className = 'custom-image'
//                 style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}
//                 />
//                 < ProductTitle  className = ' text-bold'/>
//                 < ProductBottons 
//                 className = 'custon-buttons'
//                 product = {Producto}/> 
//             </ProductCard>

//             <ProductCard 
//             product = {Producto}
//             style = {{backgroundColor:'#70D1F8'}}>
//                 < ProductImage 
//                 style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}
//                 />
//                 < ProductTitle  
//                 style={{
//                         display:'flex',
//                         justifyContent:'end'
//                         }}/>
//                 < ProductBottons  
//                 style={{
//                         fontWeight:'bold'
//                     }}
//                 product = {Producto}/> 
//             </ProductCard>
            
//         </div>
//     )
// }
