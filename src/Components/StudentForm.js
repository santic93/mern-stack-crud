import React from 'react'
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"
import { FormGroup, FormControl, Button } from 'react-bootstrap'

export default function StudentForm({ initialValues, children, enableReinitializa, onSubmit
}) {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Requerido"),
    email: Yup.string().email("Ingrese un email valido").required("Requerido"),
    rollno: Yup.number().positive("Numero de rollo no valido").integer("Numero de rollo no valido").required("Requerido")
  })
  return (
    <div className='form-wrapper'>
      <Formik initialValues={{ initialValues }} validationSchema={validationSchema} onSubmit={onSubmit}>
        <Form>
          <FormGroup>
            <Field name="name" type="text" className="form-control" placeholder="Nombre"/>
            <ErrorMessage name='name' className='d-block invalid-feedback' component="span" />
          </FormGroup>
          <br />
          <FormGroup>
            <Field name="email" type="email" className="form-control" placeholder="Email"/>
            <ErrorMessage name='email' className='d-block invalid-feedback' component="span" />
          </FormGroup>
          <br />
          <FormGroup>
            <Field name="rollno" type="number" className="form-control" placeholder="Numero de Rol"/>
            <ErrorMessage name='rollno' className='d-block invalid-feedback' component="span" />
          </FormGroup>
          <br />
          <Button variant='danger' size="lg" block="block" type="submit">
            {children}
          </Button>
        </Form>
      </Formik>
    </div >
  )
}
