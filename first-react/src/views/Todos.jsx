import React, {useState} from 'react'
import {Col, ListGroup, Row} from "react-bootstrap";
import ListItem from "../components/ListItem";
import AddTodo from "../components/AddTodo";
import ClearCompletedTodos from "../components/ClearComplatedTodos";

function Todos() {
    const [list, setList] = useState([
        {
            id: 1,
            text: 'First id',
            completed: true
        },
        {
            id: 2,
            text: 'Second id',
            completed: false
        },
    ])

    function removeCompletedItemsFunction() {
        setList(list.filter(item => !item.completed))
    }

    function addNewTodoFunction(text){
        const id = list.length ? list[list.length -1].id + 1 : 1;
        setList([...list, ...[{
            id,
            text,
            completed: false
        }]])
    }

    function changeItemStateFunction(selected){
        setList( list.map(item => {
            if(item.id === selected.id){
                item.completed = !item.completed;
                return item
            }else {
                return item
            }
        }))
    }

    function removeToDoItemFunction(selected){
        setList(list.filter(item => item.id !== selected.id))
    }

    return (
        <Row>
            <Col xs={12}>
                <AddTodo addNewTodoEmitter={addNewTodoFunction}/>
            </Col>
            <Col xs={12} className='mt-3'>
                <ListGroup variant="flush">
                    {list.map((item, index) => {
                        return (<ListItem key={index} todo={item} changeItemStateEmitter={changeItemStateFunction} removeToDoItemEmitter={removeToDoItemFunction} />)
                    })}
                </ListGroup>
            </Col>
            <Col xs={12} className='mt-3'>
                <ClearCompletedTodos list={list} removeCompletedItemsEmitter={removeCompletedItemsFunction}/>
            </Col>
        </Row>

    )
}

export default Todos