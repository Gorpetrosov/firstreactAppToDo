import React from 'react'
import NavbarComponent from "./Navbar"
import {Col, Row} from "react-bootstrap";
import Todos from "../views/Todos";
function Dashboard() {
    const greeting = "Barev REACT Props";
    return (
        <>
            <NavbarComponent/>
            <div className="container">
                <Row>
                    <Col sm={12}>
                        <Todos />
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Dashboard