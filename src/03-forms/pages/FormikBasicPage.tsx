import { FormikErrors,useFormik } from 'formik'
import React from 'react'
import '../styles/styles.css'

interface FormValue {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ({firstName,lastName,email}:FormValue)=>{
        const errors :FormikErrors<FormValue>= {};
        if(!firstName){
            errors.firstName= 'Required'
        }else if (firstName.length >15){
            errors.firstName = 'must be 15 characters or less'}
         if(!lastName){
             errors.lastName= 'Required'
        }else if (lastName.length >15){
            errors.lastName = 'must be 15 characters or less'}
            if (!email) {
                errors.email = 'Required';
              } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
                errors.email = 'Invalid email address';
              }
              return errors
        }


    const {handleChange,handleSubmit,values,errors,touched,handleBlur} = useFormik({
        initialValues:
        { 
            firstName: '',
            lastName: '',
            email:''
        },
        
        onSubmit:(value)=>{
            console.log(value)
        },
        validate
    })
  return (
    <div>
        <h1>Formik Basic Tutorial</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor='firstName'>First Name</label>
                <input
                    type='text'
                    name='firstName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value = {values.firstName}
                />
                { touched.firstName &&errors.firstName&&<span>{errors.firstName}</span>}
                <label htmlFor='lastName'>Last name</label>
                <input
                    type='text'
                    name='lastName'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value = {values.lastName}
                />
                {touched.lastName && errors.lastName&&<span>{errors.lastName}</span>}
                <label htmlFor='email'>Email Address</label>
                <input
                    type='email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value = {values.email}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}
                    {/* <label htmlFor='firstName'>Password</label>
                <input
                    type='password'
                    name='password'
                />
                <label htmlFor='firstName'>Repeat Password</label>
                <input
                    type='password'
                    name='password2'
                /> */}
                <button type='submit'>Submit</button>


            </form>


    </div>
  )
}
