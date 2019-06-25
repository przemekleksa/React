import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import './register.scss';
import { registerUser } from '../../actions/users';


class RegisterPage extends Component {

  render() {

    const registrationSuccessful = this.props.statusCode === 200 && !this.props.isLoading && this.props.message.length > 0;

    return (
      <div className="container">
        {
          registrationSuccessful && <div> { this.props.message }</div>
        }
        {
          !registrationSuccessful &&
          <div>
            {this.props.statusCode === 422 &&
                <div>Rejestracja nie powiodła się. Spróbuj jeszcze raz.</div>
            }
          </div>
        }

        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            repeatPassword: ''
          }}
          onSubmit={(values) => {
            console.log(values);
            const action = registerUser(values);

            this.props.dispatch(action);
          }}
        >
          {
            ({ errors, touched }) => (
              <Form className="registration-form">
                <div>
                  <h2>Zarejestruj się!</h2>
                  <p>
                    <label>Imię i nazwisko:</label>
                    <Field name="name" type="text" />
                  </p>

                  <p>
                    <label>E-mail:</label>
                    <Field name="email" type="text" placeholder="Np. jan@kowalski.pl" />
                  </p>

                  <p>
                    <label>Hasło:</label>
                    <Field name="password" type="password" />
                  </p>

                  <p>
                    <label>Powtórz hasło:</label>
                    <Field name="repeatPassword" type="password" />
                  </p>

                  <button type="submit">Zarejestruj się</button>

                </div>
              </Form>

            )
          }

        </Formik>

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    isLoading: state.users.isLoading,
    statusCode: state.users.statusCode,
    message: state.users.message,
  }
};

export default connect(mapStateToProps, null)(RegisterPage); 