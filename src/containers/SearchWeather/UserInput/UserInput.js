import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const UserInput = (props) => {
    return (
        <div className="text-center my-5">
            <Form>
                <Form.Group className="text-center" controlId="city">
                    <Form.Label className="text-dark .font-weight-bolder"><h4>Search for your city here</h4></Form.Label>
                    <Form.Control className="text-center" type="text" placeholder="Enter city"/>
                </Form.Group>
            </Form>
            <Button onClick={() => {props.clicked(document.getElementById("city").value)}} variant="danger">
                Search
            </Button>
        </div>
        
    )
}

export default UserInput;