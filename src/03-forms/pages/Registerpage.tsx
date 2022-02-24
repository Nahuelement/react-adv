import { useState } from "react"
import { useForm } from "../hooks/useForm"

export const Registerpage = () => {
const {onSumit,onChange,name,email,password,password2,reset,isValidEmail} = useForm({
    name:'',
    email:'',
    password:'',
    password2:'',

})

  return (
    <div>
        
        <h1>Regiter Page </h1>

        <form onSubmit={onSumit}>
            <input
            type='text'
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
            className={`${name.trim().length <=0 && 'has-error'}`}
            />
            {name.trim().length <=0 && <span>el nombre es obligatorio</span>}
            <input
            type='email'
            placeholder="Email"
            name="email"
            value = {email}
            onChange={onChange}
            className={`${!isValidEmail(email) && 'has-error'}`}
            />
            {!isValidEmail(email)  && <span>el mail no es valido</span>}
            <input
            type='password'
            placeholder="Password"
            name="password"
            value = {password}
            onChange={onChange}
            />
            {password.trim().length <=0 && <span>el nombre es obligatorio</span>}
            {password.trim().length <6&& password.trim().length >0   && <span>debe de tener mas de 6 caracteres</span>}
             <input
            type='password'
            placeholder="Repeat Password"
            name="password2"
            value={password2}
            onChange={onChange}
            />
            {password2.trim().length <=0 && <span>el nombre es obligatorio</span>}
            {password2.trim().length >0 &&  password!==password2 &&<span>password debe ser identicos</span>}
            <button
            type="submit"
            >Crear</button>
        </form>
        <button
                onClick={reset}
            >Reset</button>
    </div>
  )
}
