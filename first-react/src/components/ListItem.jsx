import React from 'react'
import {Col, ListGroup, Row} from "react-bootstrap";

function ListItem({todo,changeItemStateEmitter,removeToDoItemEmitter})
{
    return (
        <ListGroup.Item>
            <Row>
                <Col sm={2}>
                    <input type="checkbox" onChange={()=> changeItemStateEmitter(todo)} checked={todo.completed}/>
                </Col>
                <Col sm={8}>
                    <p>{todo.text}</p>
                </Col>
                <Col sm={2}>
                   <button onClick={() => removeToDoItemEmitter(todo)} className='btn btn-danger'>x</button>
                </Col>
            </Row>
        </ListGroup.Item>
    )
}

export default ListItem