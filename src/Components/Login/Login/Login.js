import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();
    }


    return (
        <>
        <div className='login-style'>
            <Container>
            <Row>
                <Col md={6} xs={12} className="my-3 log-img">
                    <img src="https://t3.ftcdn.net/jpg/03/70/92/84/360_F_370928450_R6g8c0j5cey86PUXE32W7KMiqIUe1fOI.jpg" alt="" />
                </Col>

                <Col md={6} xs={12} className="my-3">
                <div className="form-container">
            <h2 className="form-title">
                Login
            </h2>
            <form onSubmit={handleLogin}>
                <div className="control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' required/>
                </div>
                <div className="control">
                    <label className='pass' htmlFor="password">Password</label>
                    <input type="password" name='password' required/>
                </div>
                <div className="control">
                    <label className='pass' htmlFor="password">
                        <a href="#">Forget Password?</a>
                    </label>
                </div>
                <div className='butonn'>
                <input className='submit-btn' type="submit" value="login" />
                </div>
            </form>
            <p className='user-account'>New User? <Link to="/registration">Create A New Account</Link> </p>
            <div className='google-btn'>
                <button>Google Sign in</button>
            </div>
        </div>
                </Col>
            </Row>
            </Container>
        </div>
        </>
        
    );
};

export default Login;