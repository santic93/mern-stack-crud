import React, { useState, useEffect } from 'react'
import axios from 'axios'
import StudentForm from "./StudentForm"




export default function CreateStudent() {
  const [formValues, setFormValues] = useState({ name: '', email: '', rollno: '' })

  const onSubmit = (studentObject) => {
    axios.post('http://localhost:4000/students/create-student', studentObject).then((res) => {
      if (res.status === 200)
        alert("Estudiante creado con exito")
      else
        Promise.reject()
    }).catch((err) => {
      console.log(err)
      alert("Algo salio mal")
    })
  }
  return (
    <StudentForm initialValues={formValues}
      onSubmit={onSubmit} enableReinitializa>
      Crear Estudiant@
    </StudentForm>
  )
}
