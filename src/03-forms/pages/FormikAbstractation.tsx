import { Formik,Form} from 'formik'
import * as Yup from 'yup'

import '../styles/styles.css'
import { MyTextInput ,MySelect,MyCheckBox} from '../components'



export const FormikAbstractation = () => {


  return (

 
    <div>
        <h1>Formik Abstractation</h1>

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
                                    <MyTextInput label='First Name'  name='firstName'/>
                                    {/* <label htmlFor='firstName'>First Name</label>
                                    <Field name ='firstName' type='text'
                                    />
                                    <ErrorMessage  name='firstName' component='span'
                                    /> */}
                                    <MyTextInput label='Last Name'  name='lastName'/>
                                    <MyTextInput label='Email'  name='email'/>

                                    <MySelect label='Job Type' name='JobType' >
                                    <option value=''>Select one </option>
                                            <option value='developer'>developer </option>
                                            <option value='diseñador'>diseñador </option>
                                            <option value='it-senior'>it senior </option>
                                            <option value='it-juior'>it junior </option>
                                    </MySelect>
                                    
                                    <MyCheckBox label='Terms & conditions' name='terms' />
                                    <button type='submit'>Submit</button>


                                    </Form>


                )
            }


        
        </Formik>
            


    </div>
  )
}
