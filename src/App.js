import { useFormik } from "formik";

const validate = (values) => {
  const errors = {}

  if(!values.name){
    errors.name = 'Required'
  }else if (values.name.length < 5){
    errors.name = 'El nombre es muy corto'
  }
  
  if(!values.lastname){
    errors.lastname = 'Required'
  }else if (values.lastname.length < 5){
    errors.lastname = 'El apellido es muy corto'
  }

  if(!values.email){
    errors.email = 'Required'
  }else if (values.email.length < 5){
    errors.email = 'El correo es muy corto'
  }else if(!values.email.includes('@')){
    errors.email = 'El correo no es un correo válido'
  }
  return errors;
}

function App() {
  
  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
    },
    validate: validate,
    onSubmit: (values) => console.log(values),
  });
  
  return (
    <form onSubmit={formik.handleSubmit}>
      <label>Nombre</label>
      <input
        type='text'
        {...formik.getFieldProps('name')}
        />
        <br/>
        {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>}
      <label>Apellido</label>
      <input
        type='text'
        name="lastname"
        {...formik.getFieldProps('lastname')}
        />
        <br/>
        {formik.touched.lastname && formik.errors.lastname && <div>{formik.errors.lastname}</div>}
      <label>Email</label>
      <input
        type='email'
        name="email"
        {...formik.getFieldProps('email')}
      />
        <br/>
        {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
