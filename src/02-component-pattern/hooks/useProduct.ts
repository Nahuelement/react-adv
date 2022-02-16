import { useState, useEffect, useRef, useCallback } from 'react';

import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';


interface usePropsArgs {
    product:Product,
    onChange?: (args:onChangeArgs)=>void,
    value?:number,
    initialValue?:InitialValues
}

export const useProduct = ( {onChange,product,initialValue,value = 0} : usePropsArgs ) => {
    const [counter, setCounter] = useState<number>(initialValue?.count || value)
    const isMount = useRef(false)
    
    const increaseBy = (value:number)  =>{
        let newValue = Math.max(counter + value ,0)
        
        if (initialValue?.maxCount){
            newValue = Math.min(newValue , initialValue.maxCount)
            }
        setCounter(newValue)
        onChange && onChange({count:newValue,product:product})
    }
    const reset = () =>{
        setCounter(initialValue?.count || value)
    }  

    const isMaxCount = useCallback(() => {
        if(counter===initialValue?.maxCount) return true
        else return false
      }, [counter,initialValue]);


    useEffect(() => {
        if(!isMount.current) return;
        setCounter(value)
        }, [value])

    useEffect(() => {
            isMount.current = true
        }, [])



    return {
        counter,
        increaseBy,
        isMaxCountReached: isMaxCount(),
        maxCount:initialValue?.maxCount,
        reset
     
       
    }
}
