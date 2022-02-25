import formJson from '../data/custom-form.json'
import { Formik, Form } from 'formik';
import { MyTextInput,MySelect } from '../components';
import * as Yup from 'yup';



const initialValues :{ [key:string]: any } = {}
const RequeridValidationFields:{ [key:string]: any } ={}

for (const input of formJson){
    initialValues[ input.name] = input.value

    if(!input.validations) continue;
    let schema = Yup.string()

    for (const rule of  input.validations){
        if(rule.type==='requerid'){
            schema = schema.required('este campo es requerido')
        }
        if (rule.type==='minLength'){
            schema = schema.min((rule as any).value,  `Minimo de ${(rule as any).value}`)
        }
        if (rule.type==='email'){
            schema = schema.email((rule as any).value)
        }
        
    }

    RequeridValidationFields[input.name]  = schema

}


export const DinamicForm = () => {

    const validationSchema = Yup.object({...RequeridValidationFields})
  return (
    <div>
        <h1>Dinamic Form</h1>
        <Formik  
        initialValues = {initialValues}
        onSubmit={(value)=> console.log(value)}       
        validationSchema={validationSchema} 
        >
            {
                ({handleReset})=>(
                    <>
                    <Form noValidate>
                    {
                        formJson.map(({type,label,name,placeholder,option})=>{

                            if(type==='input' || type==='password' || type==='email' ){
                             return <MyTextInput 
                                key = {name}
                                type={type as any}
                                label={label}
                                name = {name}
                                placeholder={placeholder} />
                            }
                           else if (type==='select'){
                            return  (
                               <MySelect
                               key = {name}
                               type={type as any}
                               label={label}
                               name = {name}
                               placeholder={placeholder} >
                            <option value=''>Select and options</option>
                                   {
                                        option?.map((opt)=>(
                                            <option key ={opt.id} value={opt.id}>{opt.label}</option>
                                        ))
                                   }
                            </MySelect>)
                           }
                          
                        })
                    }
                    <button type='submit'>Submit</button>

                    </Form>
                    <button type='button'
                    onClick={handleReset}
                    >Submit</button>
                    </>
                )
            }


        </Formik>
    </div>
  )
}
