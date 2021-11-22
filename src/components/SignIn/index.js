import React, { useRef, useState } from 'react';
import { Form, Button, Card, Container, Alert } from 'react-bootstrap';
import { AuthProvider, useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { HOME, SIGN_UP, SIGN_IN } from '../../constants/routes';
import { PASSWORD_FORGET } from '../../constants/routes';
import { useNavigate} from 'react-router';


function SignIn() {
    const EmailRef = useRef()
    const PasswordRef = useRef()
    const { signIn } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const currentUser = useAuth()


    async function handleSubmit(e) {
        // this prevents the form from refreshing
        e.preventDefault()

        try{

            setError('')

            // creating a setloading state to prevent the user from clicking the submit button multiple times
            setLoading(true)

        // calling our signup function
            await signIn(EmailRef.current.value, PasswordRef.current.value)

            // we are using history to push/navigate us to the next page
            // navigate(HOME)
            currentUser ? navigate(HOME) : navigate(SIGN_IN)

           

        }

        catch {
            
            setError('Failed to Sign In')
            
        }

        setLoading(false)
    }


    return (
        <AuthProvider>
            <Container className="d-flex align-items-center justify-content-center" 
            style={{ minHeight: "100%"}}>

                <div className="w-100" style={{ maxWidth: "400px" }}>

                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign In</h2>

                            {error && <Alert variant="danger">{error}</Alert>}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={EmailRef} required></Form.Control>
                                </Form.Group>


                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={PasswordRef} required></Form.Control>
                                </Form.Group>

                                <br />

                                <Button disabled={loading} className="w-100" type="submit" onClick={handleSubmit}>Sign In</Button>
                            </Form>

                            <div className="w-100 text-center mt-3">
                                <Link to={PASSWORD_FORGET}>Forgot Password</Link>
                            </div>


                        </Card.Body>

                    </Card>

                    <div className="w-100 text-center mt-2">
                        Don't have an account?
                        <Link to={SIGN_UP}>Sign Up</Link> 
                        
                    </div>

                </div>
            </Container>

        </AuthProvider>
    )
}

export default SignIn
