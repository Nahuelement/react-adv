// import styles from '../styles/styles.module.css'
import { ProductCard, ProductImage, ProductTitle ,ProductBottons} from '../components';
import '../styles/custom-styles.css'
// import { Component1 } from '../component_parts/component_1';

// import Basket from '../components/basket/basket';

import { products } from '../data/products';
// import { useShopingCart } from '../hooks/useShopingCart';

// import { useSelector } from 'react-redux';
// import { State } from '../reducers/basketReducer';


const product = products[0]


export const ShoppingPage = () => {
    // const basket = useSelector((state:State) => state.basket)
    
    // const {shopingCart,onProductCountChange} = useShopingCart()
    
    return (
    <div >
            <h1>Shopping Page</h1>
            <hr />
        {/* <div style={{
                display:'flex',
                flexDirection:'row',
                flexWrap:'wrap'
            }}> */}
    <div style={{display:'flex',flexDirection:'row'}}>
        { products.map(product => ( 
            <>
                <ProductCard
                key = {product.id} 
                product = {product}
                // onChange = {onProductCountChange}
                // value = {shopingCart[product.id]?.count || 0}
                initialValue = {{
                    count:2,
                    //maxCount:10
                }}>
                {
                    ({reset,increaseBy,isMaxCountReached,count}) =>(
                        <div className = 'bg-dark text-white'>
                   
                        < ProductImage className = 'custom-image'style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}/>
                        < ProductTitle  className = ' text-bold'/>
                        < ProductBottons className = 'custon-buttons'product = {product}/>
                        {/* <button onClick={reset}>Reset</button> */}
                        <button onClick={reset}>Reset</button>
                        <button onClick={()=>increaseBy(-2)}>-2</button>
                        {
                           (!isMaxCountReached && <button onClick={()=>increaseBy(2)} >+2</button>)
                        }
                        <span>{count}</span>
                        

                        
                       </div>
                       )
                }
                

                    
                </ProductCard>
                </>
                
        ))
                        
    
                }
                </div>
           </div> ) }


                {/* < Basket  />  */}
        {/* </div> */}
    

        {/* 
    
    
        { Object.entries(shopingCart).map(([key,product])=>(

            <ProductCard
            key = {key}
            product = {product}
            style={{width:'100px'}}
            onChange = {onProductCountChange}
            value = {product.count}

            className = 'bg-dark text-white'>
            < ProductImage 
            className = 'custom-image'
            style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}
            />
                {/* < ProductTitle  className = ' text-bold'/> 

           
            < ProductBottons 
            className = 'custon-buttons' 
            style = {{display:'flex',justifyContent:'center'}}
            product = {product}
            /> 
            </ProductCard>)

        )

        
        }

        </div> */}

            
 
