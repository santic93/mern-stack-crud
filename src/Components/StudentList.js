import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table } from 'react-bootstrap'
import StudentTableRow from "./StudentTableRow"




export default function StudentList() {
  const [students, setStudents] = useState([])



  useEffect(() => {
    axios.get("http://localhost:4000/students/").then(({ data }) => {
      setStudents({ data })
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  const DataTable = () => {
    return students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />
    })
  }
  return (
    <div className='table-wrapper'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Numero de Rol</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  )
}
