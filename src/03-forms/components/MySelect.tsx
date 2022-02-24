import { useField, ErrorMessage } from 'formik';


interface Props {
    label: string;
    name: string;
    [x: string ]: any; // comodin para poder agregar culaquier cantidad de parametros y propiedades
}


export const MySelect= ({label, ...props}:Props) => {

    const [field, meta ] = useField(props)
    
  return (
    <>

        <label htmlFor={props.id || props.name}>{ label }</label>
        <select  {...field} {...props}/>
        <ErrorMessage name={props.name} component='span' />

    
    </>
  )
}
