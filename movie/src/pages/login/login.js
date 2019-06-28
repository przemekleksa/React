import React, { Component } from 'react';
import './login.scss';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Podaj adres e-mail')
    .email('Podany adres e-mail jest nieprawidłowy'),
  password: Yup.string().required('Podaj hasło')
    .min(5, 'Hasło musi być dłuższe niż 4 znaki')
});

class LoginPage extends Component {
  render() {
    return (
      <div className="container">
          <h1>Logowanie</h1>
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              // this.props.dispatch(login(values))
            }}
          >

            {({ errors, touched }) => (
              <Form className="login-form">


                <div className="row">
                  <label>E-mail</label>
                  <Field name="email" type="text" />
                  {(errors.email && touched.email) &&
                  <p className="error-message">
                    {errors.email}
                  </p>
                  }

                  <label>Hasło</label>
                  <Field name="password" type="password" />
                  {(errors.password && touched.password) &&
                  <p className="error-message">
                    {errors.password}
                  </p>
                  }

                  <button type="submit">Zaloguj się</button>
                </div>

              </Form>
            )}

          </Formik>
      </div>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     isLogin: state.auth.isLogin,
//     isLoading: state.auth.isLoading,
//     statusCode: state.auth.statusCode,
//     message: state.auth.message
//   }
// }


// export default connect(mapStateToProps, null)(Login);
export default LoginPage;