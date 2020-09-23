import React, {useState } from 'react'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'


const Login = () => {
    const [token, setToken] = useState(null)
    console.log('initial', token)
    const onLogin = () => {
        let formData = {
            email:'eve.holt@reqres.in',
            password:'cityslicka'
        }
        fetch('https://reqres.in/api/login', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
        
        })
            .then(r => r.json())
            .then(data => {
                setToken(data.token)
                // console.log('updated',token)

            })
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={6}>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary"  onClick={onLogin}>
                            Submit
  </Button>
                    </Form>
                </Col>
            </Row>
        </Container>

    )
}


export default Login