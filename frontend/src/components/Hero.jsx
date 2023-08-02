/* eslint-disable react/no-unescaped-entities */
import { Container, Card, Button } from 'react-bootstrap';

const Hero = () => {
    return (
        <div className='py-5'>
            <Container className='d-flex justify-content-center'>
                <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
                    <h1 className='text-center mb-4'>MERN Authentication</h1>
                    <p className='text-center mb-4'>
                        This is a boilerplate project for authentication with the MERN stack. It's a starting point for building your own authentication system. It also uses Redux Toolkit and react-bootstrap library.
                    </p>
                    <div className="d-flex">
                        <Button variant='primary' href='/login' className="me-3">
                            Sign in
                        </Button>
                        <Button variant='secondary' href='/register'>
                            Register
                        </Button>
                    </div>
                </Card>
            </Container>
        </div>
    );
};

export default Hero;