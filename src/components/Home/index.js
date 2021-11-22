import React, { useState } from 'react';
import { Card, Button, Alert, Container} from 'react-bootstrap';
import { AuthProvider, useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { PASSWORD_CHANGE , SIGN_IN} from '../../constants/routes';
import { useNavigate } from 'react-router';



const Home = () => {
    const [error, setError] = useState("")
    const { currentUser } = useAuth()
    const navigate = useNavigate()
    const { logout } = useAuth()


    async function handleLogout(){

        setError('')

        try {
            await logout()
            navigate(SIGN_IN)
        } catch (error) {
            setError("Failed to log Out!")
        }

    }



    return (


        <>

            <Container className="d-flex align-items-center justify-content-center" 
                style={{ minHeight: "100%"}}>

                <div className="w-100" style={{ maxWidth: "400px" }}>

                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Log out</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <strong>Email: </strong>{currentUser?.email}

                            <Link to={PASSWORD_CHANGE} className="btn btn-primary w-100 mt-3">Password Change</Link>
                        </Card.Body>
                    </Card>

                    <div className="w-100 text-center mt-2">
                        <Button type="submit" onClick={handleLogout}>Log out</Button>
                    </div>
            
                </div>

            </Container>
        </>
    )
}

export default Home
