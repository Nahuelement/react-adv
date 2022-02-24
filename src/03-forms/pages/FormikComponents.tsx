import { Formik,Field,Form,ErrorMessage } from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'



export const FormikComponents = () => {


  return (

 
    <div>
        <h1>Formik Components</h1>

    <Formik
        initialValues={{ 
            firstName: '',
            lastName: '',
            email:'',
            terms:false,
            JobType:''
        }}
        onSubmit={(value)=>{
            console.log(value)
            }}
        validationSchema={Yup.object({
                firstName: Yup.string()
                                            .max(15, 'debe de contener menos de 15 caracteres')
                                            .required('first name requerido'),
                lastName:Yup.string()
                                            .max(15, 'debe de contener menos de 15 caracteres')
                                            .required('last name requerido'),
                email:Yup.string().email('email no es valido').required('Email requerido'),

                terms: Yup.boolean()
                                    .oneOf([true],'Debe de aceptar terminos y condiciones'),// espera que el valor solo sea true
                JobType:Yup.string()
                                    .notOneOf(['it-juior'],'este valor no esta disponible')
                                    .required('requerido')
            })}
        >
            { (formik)=>(
                                <Form >
                                    <label htmlFor='firstName'>First Name</label>
                                    <Field name ='firstName' type='text'
                                    />
                                    <ErrorMessage  name='firstName' component='span'
                                    />

                                    <label htmlFor='lastName'>Last name</label>
                                    <Field name ='lastName' type='text'
                                    />
                                     <ErrorMessage  name='lastName' component='span'
                                    />
                                    <label htmlFor='email'>Email Address</label>
                                    <Field name ='email' type='text'
                                    />
                                     <ErrorMessage  name='email' component='span'
                                    />
                                    <label htmlFor='email'>Job Type</label>
                                    <Field name ='JobType' as='select'>
                                    <option value=''>Select one </option>
                                            <option value='developer'>developer </option>
                                            <option value='diseñador'>diseñador </option>
                                            <option value='it-senior'>it senior </option>
                                            <option value='it-juior'>it junior </option>
                                    </Field>
                                    <ErrorMessage  name='JobType' component='span'
                                    />
                                   <label >
                                   <Field name ='terms' type='checkbox'/>
                                       Terms and conditions
                                    </label>
                                    <ErrorMessage  name='terms' component='span'
                                    />
                                    <button type='submit'>Submit</button>


                                    </Form>


                )
            }


        
        </Formik>
            


    </div>
  )
}
