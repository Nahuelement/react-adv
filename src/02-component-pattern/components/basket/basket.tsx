import { useDispatch, useSelector } from 'react-redux'
import '../../styles/custom-styles.css'
import { State } from '../../reducers/basketReducer';
import { Product } from '../../interfaces/interfaces';

import { ProductCard } from '../ProductCard';
import { ProductImage } from '../ProductImage';
import { ProductBottons } from '../ProductBottons';


const Basket = () => {
  const basket = useSelector((state:State) => state.basket)
  const dispatch = useDispatch()

return (
<div className="shoppping-cart">
        <h2>Basket</h2>
    {basket?
     (
     <>
      {
      basket.map(product => 
      (product.quantity >0)?(
        <>
        <ProductCard
        key = {product.id}
        product = {product}
        style={{width:'100px'}}
        className = 'bg-dark text-white'>
            < ProductImage 
            className = 'custom-image'
            style={{boxShadow:'10px 10px 10px rgba(0,0,0,0.2)'}}
            />
            {/* < ProductTitle  className = ' text-bold'/> */}
            < ProductBottons 
            quantity = {product.quantity}
            className = 'custon-buttons'
            product = {product}/> 
        </ProductCard>
        </>
      ):null
     )
      }
    <button onClick={() => dispatch({ type: 'clearBasket' })}>
            Clear
          </button>
        </>
      
      ) : (
        'Empty'
      )}

    </div>
    
      
  )
}

export default Basket