import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StudentForm from "./StudentForm"
export default function EditStudent(props) {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rollno: "",
  })

  const onSubmit = (studentObject) => {
    axios.put("http://localhost:4000/students/update-student/" +
      props.match.params.id,
      studentObject).then((res) => {
        if (res.status === 200) {
          alert("El estudiante se actualizo correctamente")
          props.history.push("/student-list")
        }
        else {
          Promise.reject()
        }
      })
      .catch((err) => {
        console.log(err)
        alert("Algo salio mal :(")
      })
  }
  useEffect(() => {
    axios.get("http://localhost:4000/students/update-student/"
      + props.match.params.id).then((res) => {
        const { name, email, rollno } = res.data;
        setFormValues({ name, email, rollno })
      }).catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      Actualizar Estudiante
    </StudentForm>
  )
}
