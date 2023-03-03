import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { Nav, Navbar, Container, Row, Col }
  from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import CreateStudent from "./Components/CreateStudent"
import EditStudent from "./Components/EditStudent"
import StudentList from "./Components/StudentList"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-student"}
                  className="nav-link">
                  Listado de Estudiantes
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-student"}
                    className="nav-link">
                    Creat Estudiante
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/student-list"}
                    className="nav-link">
                    Listado de Estudiantes
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route path="/"
                    element={<CreateStudent />} />
                  <Route path="/create-student"
                    element={<CreateStudent />} />
                  <Route path="/edit-student/:id"
                    element={<EditStudent />} />
                  <Route path="/student-list"
                    element={<StudentList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
