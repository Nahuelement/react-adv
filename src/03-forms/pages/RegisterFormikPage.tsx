
import { MyTextInput } from '../components'
import { Formik,Form} from 'formik'
import * as Yup from 'yup'


const validationSchema=Yup.object({
  firstName: Yup.string()
                              .max(15, 'debe de contener menos de 15 caracteres')
                              .min(2,'minimo de 2 caracteres')
                              .required('first name requerido'),
  lastName:Yup.string()
                              .max(15, 'debe de contener menos de 15 caracteres')
                              .required('last name requerido'),
  email:Yup.string().email('email no es valido').required('Email requerido'),

  password: Yup.string().min(6,'debe de contener mas de 6 digitos').required('password requerido'),
  password2: Yup.string()
                  .oneOf([Yup.ref('password')],'ambos password deben de ser identicos')
                    .min(6,'debe de contener mas de 6 digitos')
                    .required('password requerido')
})

export const RegisterFormikPage = () => {


  return (
    <div>
        
        <h1>Regiter Formik Page </h1>

        <Formik
        initialValues={{ 
            firstName: '',
            lastName: '',
            email:'',
            password:'',
            password2:''
          
        }}
        onSubmit={(value)=>{
            console.log(value)
            }}
        validationSchema = {validationSchema}
            >
              { ({handleReset})=>(
                <>
                                <Form >
                                    <MyTextInput label='First Name'  name='firstName'/>
                                    <MyTextInput label='Last Name'  name='lastName'/>
                                    <MyTextInput label='Email'  name='email'/>
                                    <MyTextInput label='Password'  name='password' type='password'/>
                                    <MyTextInput label='Repeat pasword'  name='password2' type='password'/>

                                   
                                    <button type='submit'>Submit</button>


                                    </Form>
                                    <button  onClick = {()=>handleReset()} type='button'>Reset</button>
            </>
                )
            }

            </Formik>
  
    </div>
  )
}
