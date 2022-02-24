import React from 'react'
import { useState } from 'react';

export const useForm = <T>(initialState:T) => { // T define el tipo que recibe 

    const [formData, setFormData] = useState(initialState)
 
    const onChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setFormData((oldRegister)=>{
            return{
                ...oldRegister,
                [event.target.name]:event.target.value
            }
        })
    }
    const onSumit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        console.log(formData)
        
    
    }
    const reset = () =>{
        setFormData(initialState)
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
   
  return {
    ...formData,
    onChange,
    onSumit,
    reset,
    isValidEmail
  }
}
