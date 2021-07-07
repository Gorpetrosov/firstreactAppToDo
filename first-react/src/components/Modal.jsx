import React, {useState} from 'react'
import {Button, Col, Modal, Row} from "react-bootstrap";

function ModalComponent(props) {
    const [show, setShow] = useState(false);
    const { greeting } = props;
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [current , setValue] = useState('d')
    const useList = [
        {
            name: 'Alex',
            age: 20
        },
        {
            name: 'Amar',
            age: 204
        },
        {
            name: 'Se',
            age: 44
        },
        {
            name: 'Dsed',
            age: 65
        },
        {
            name: 'Ghf',
            age: 765
        }
    ];

    const listElem = useList.map((user, index) => {
        return(
            <Col key={index} sm={4} className='text-center'>
                <span className='text-info'>{user.name}</span>  |  <span>{user.age}</span>
            </Col>
        )
    })

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col sm={12} className='mt-2'>
                            Woohoo, {greeting}!
                        </Col>
                        <Col sm={12} className='mt-2'>
                            {current}!
                        </Col>
                        <Col sm={12} className='mt-2'>
                            <input type="text" onChange={(event) => setValue(event.target.value)} />
                        </Col>
                        <Col sm={12} className='mt-2'>
                            <Row className='justify-content-center'>
                                {listElem}
                            </Row>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComponent