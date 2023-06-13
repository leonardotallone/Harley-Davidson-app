import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

// import { signIn } from "../store/reducers/actions/authActions";

const FormSignIn = () => {

  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleSubmit = (values) => {
    values.preventDefault()
    console.log("FORM VALUES", values);
    navigate("/userprofile")
    // alert(JSON.stringify(values));
    // dispatch(signIn(values));
    // dispatch(signIn({ email, password }));
  };

  // useEffect(() => {
  //   if (loguedUser) {
  //     navigate("/");
  //   }
  // }, [loguedUser, navigate]);

  const validar = (values) => {
    const errors = {};

    if (!values.password) {
      errors.password = "El campo es obligatorio";
    } else if (values.password.length < 6) {
      errors.password = "La Contraseña debe tener como minimo, 6 caracteres";
    }

    if (!values.email) {
      errors.email = "El campo es obligatorio";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Direccion de Correo Electronico Invalida";
    }

    return errors;
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <br />
          <br />
          <br />

          <div className="col s10 offset-s1 l4 offset-l8">
            <Formik
              initialValues={{ email: "", password: "" }}
              onSubmit={handleSubmit}
              validate={validar}
            >
              <Form>
                <p className="form-tittle center">Ingrese a su Cuenta</p>

                <div className="forms">
                  <div className="input-field">
                    
                    <label className="label-text" htmlFor="email">
                      email
                    </label>
                    <Field name="email" type="email" />
                  </div>
                  <div className="warning-inputs right">
                    <ErrorMessage name="email" />
                  </div>

                  <div className="input-field">
                    
                    <label className="label-text" htmlFor="name">
                      Password
                    </label>
                    <Field name="password" type="password" />
                  </div>
                  <div className="warning-inputs right">
                    <ErrorMessage name="password" />
                  </div>

                  <br />

                  <div className="center">
                    <a className="accion-text" href="/recover/password-rm">
                      ¿Olvido su Contraseña? Recuperar Contraseña.
                    </a>
                  </div>

                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />

                  <div className="warning-form center">
                    <span className="material-icons resize-icon-warning">
                      warning
                    </span>
                    <span>La contraseña ingresada es incorrecta </span>
                  </div>
                </div>

                <br />
                <br />

                <div className="form-buttons">

                  <a className="white-text" href="/home">
                    <button type="button" className="btn grey-rheem waves-effect waves-light z-depth-1 left" >
                      Regresar
                    </button>
                  </a>

                  
                    <button  onClick={handleSubmit} className="btn red-rheem waves-effect waves-light right" type="submit">
                      Ingresar
                      <i className="material-icons right">send</i>
                    </button>
                  

                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
export default FormSignIn;
