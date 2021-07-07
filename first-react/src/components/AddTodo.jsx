import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";

function AddTodo({addNewTodoEmitter}) {

    const [inputText, setInputText] = useState('')

    function setNewToDoItem(e){
        e.preventDefault()
        if(inputText.length){
            addNewTodoEmitter(inputText)
            setInputText('')
        }
    }
    return(
        <Form onSubmit={setNewToDoItem}>
            <Row  className='mt-3 justify-content-center'>
                <Col xs={10}>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control type="text" value={inputText} onChange={(e)=>setInputText(e.target.value)} placeholder="Add new Todo" />
                    </Form.Group>
                </Col>
                <Col xs={2}>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default AddTodo