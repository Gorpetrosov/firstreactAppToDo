import React from "react";
import {Col, Row} from "react-bootstrap";

function ClearCompletedTodos({list,removeCompletedItemsEmitter}) {
    const completed = list.filter(item => item.completed).length
    return (
        <Row className='mt-3'>
            <Col xs={8}>
                <p><span className='text-success'>{completed}</span> from <span
                    className='text-info'>{list.length}</span> {completed > 1 ? 'are' : 'is'} completed </p>
            </Col>
            <Col xs={4}>
                <button className='btn btn-danger' onClick={removeCompletedItemsEmitter}>Clear Completed</button>
            </Col>
        </Row>
    )
}

export default ClearCompletedTodos