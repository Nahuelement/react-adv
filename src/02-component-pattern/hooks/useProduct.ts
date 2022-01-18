import { useState, useEffect, useRef } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';


interface usePropsArgs {
    product:Product,
    onChange?: (args:onChangeArgs)=>void,
    value?:number
}

export const useProduct = ( {onChange,product,value = 0} : usePropsArgs ) => {
    const [counter, setCounter] = useState(value)

    const isControled = useRef(!!onChange)

   

    const increaseBy = (value:number)  =>{
        
        if (isControled){
            
            return onChange!({count:value,product})
        }

        const newValue = Math.max(counter + value , 0)

        setCounter(newValue)
        onChange && onChange({count:newValue,product:product})
    }
    useEffect(() => {
        setCounter(value)
    }, [value])

    return {
        counter,
        increaseBy
    }
}
