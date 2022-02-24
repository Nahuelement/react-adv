import { useFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import '../styles/styles.css'



export const FormikYupPage = () => {

    const {
        handleSubmit,
        errors,touched,getFieldProps} = useFormik({
        initialValues:
        { 
            firstName: '',
            lastName: '',
            email:''
        },
        
        onSubmit:(value)=>{
            console.log(value)
        },
        validationSchema:Yup.object({
            firstName: Yup.string()
                                        .max(15, 'debe de contener menos de 15 caracteres')
                                        .required('first name requerido'),
            lastName:Yup.string()
                                        .max(15, 'debe de contener menos de 15 caracteres')
                                        .required('last name requerido'),
            email:Yup.string().email('email no es valido').required('Email requerido'),
        })
    })
  return (
    <div>
        <h1>Formik Yup</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' {...getFieldProps('firstName')}
                //SAME
                    // type='text'
                    // name='firstName'
                    // onChange={handleChange}
                    // onBlur={handleBlur}
                    // value = {values.firstName}
                />
                { touched.firstName &&errors.firstName&&<span>{errors.firstName}</span>}

            <label htmlFor='lastName'>Last name</label>
            <input type='text' {...getFieldProps('lastName')}
                />
                {touched.lastName && errors.lastName&&<span>{errors.lastName}</span>}
                <label htmlFor='email'>Email Address</label>
            <input type='email' {...getFieldProps('email')}
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
