import React from 'react';
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import './formToDo.scss'

const FormToDoSchema = Yup.object().shape({
    task: Yup.string()
        .required('Uzupełnij pole zadanie')
        .min(4, 'Podaj przynajmniej 4 znaki')
        .max(120, 'Twoje zadanie jest za długie')
})

const FormToDo = (props) => {
    return ( 
        <Formik 
            initialValues={{
                task: ''
            }}
            validationSchema={FormToDoSchema}
            onSubmit={(values , {resetForm}) => {
                props.addNewTask(values.task);
                resetForm({ task: '' })
            }}
        >
            {({errors}) => (
                <Form className="form">
                    <div className="row">
                        <div className="input"> 
                            <Field name="task" type="text" />
                        </div>
                        <div className="button">
                            <button type="submit">Dodaj zadanie</button>
                        </div>
                    </div>
                    {errors.task &&
                        <div className="error">
                            {errors.task}
                        </div>
                    }
                </Form>
            )}
        </Formik>
     );
}
 
export default FormToDo;
