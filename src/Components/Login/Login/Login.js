import React, { useState } from 'react';
import { Alert, Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css';

const Login = () => {
    const { logInError, loading, handleUserLogin, signInWithGoogle } =
    useAuth();
const [loginData, setLoginData] = useState({});

const location = useLocation();
const navigate = useNavigate();

const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
};
const handleLoginSubmit = (e) => {
    handleUserLogin(loginData.email, loginData.password, location, navigate);
    e.preventDefault();
};

const handleGoogleSignIn = () => {
    signInWithGoogle(location, navigate);
};
return (
    <>
        <div className="login-style">
            <Container className="py-4">
                <div className="box-shadows">
                    <Row>
                    <Col xs={12} md={6}>
                            {/* <h2 className="fw-bold">Car</h2> */}
                            <img
                                className="img-fluid imag"
                                src="https://login.gov/assets/img/login-gov-600x314.png"
                                alt=""
                            />
                        </Col>

                        <Col xs={12} md={6}>
                            {!loading && (
                                <>
                                    <Form
                                        className="mx-auto pt-4 pb-4 w-75"
                                        onSubmit={handleLoginSubmit}
                                    >
                                        <h2 className="text-center fw-bold">
                                            LOG IN
                                        </h2>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="formBasicEmail"
                                        >
                                            <Form.Control
                                                type="email"
                                                name="email"
                                                onBlur={handleOnBlur}
                                                placeholder="Your Email"
                                                required
                                                className="login-input"
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            className="mb-3"
                                            controlId="BasicPassword"
                                        >
                                            <Form.Control
                                                type="password"
                                                name="password"
                                                onBlur={handleOnBlur}
                                                placeholder="Your Pass"
                                                required
                                                className="login-input"
                                            />
                                        </Form.Group>
                                        {/* <span>{logInError}</span> */}
                                        <div className="d-grid gap-2 my-4 login-input">
                                            <Button
                                                variant="secondary"
                                                type="submit"
                                                className="submit-forms"
                                            >
                                                Sign In
                                            </Button>
                                        </div>
                                        <p className="text-center text-primary">
                                            New User?
                                            <Link
                                                to="/register"
                                                style={{
                                                    textDecoration: "none",
                                                }}
                                            >
                                                &nbsp;Please Register
                                            </Link>
                                        </p>
                                    </Form>
                                    <div className="google-btn">
                                        <button 
                                            onClick={handleGoogleSignIn}
                                        >
                                            Google Sign in
                                        </button>
                                    </div>
                                </>
                            )}

                            {loading && (
                                <div className="text-center">
                                    <Spinner
                                        animation="border"
                                        variant="info"
                                    />
                                </div>
                            )}
                            
                        </Col>
                       
                    </Row>
                </div>
            </Container>
        </div>
    </>
);
};

export default Login;










// import { GoogleAuthProvider } from 'firebase/auth';
// import React from 'react';
// import { useContext } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Contexts/AuthProvider';
// import './Login.css';

// const Login = () => {

//     const {createUser, providerLogin} = useContext(AuthContext);

//     const location = useLocation();
//     const navigate = useNavigate();

//     const from = location.state?.from?.pathname || '/';

//     const handleLogin = event =>{
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         createUser(email, password)
//         .then(result =>{
//             const user = result.user;
//             console.log(user);
//             navigate(from, {replace: true});
//         })
//         .catch(err => console.error(err));
//     }

//     const googleProvider = new GoogleAuthProvider();

//     const handleGoogleSignIn = () => {
//         providerLogin(googleProvider)
//         .then(result =>{
//             const user = result.user;
//             console.log(user);
//         })
//         .catch(err => console.error(err));
//     }


//     return (
//         <>
//         <div className='login-style'>
//             <Container>
//             <Row>
//                 <Col md={6} xs={12} className="my-3 log-img">
//                     <img src="https://t3.ftcdn.net/jpg/03/70/92/84/360_F_370928450_R6g8c0j5cey86PUXE32W7KMiqIUe1fOI.jpg" alt="" />
//                 </Col>

//                 <Col md={6} xs={12} className="my-3">
//                 <div className="form-container">
//             <h2 className="form-title">
//                 Login
//             </h2>
//             <form onSubmit={handleLogin}>
//                 <div className="control">
//                     <label htmlFor="email">Email</label>
//                     <input type="email" name='email' required/>
//                 </div>
//                 <div className="control">
//                     <label className='pass' htmlFor="password">Password</label>
//                     <input type="password" name='password' required/>
//                 </div>
//                 <div className="control">
//                     <label className='pass' htmlFor="password">
//                         <a href="#">Forget Password?</a>
//                     </label>
//                 </div>
//                 <div className='butonn'>
//                 <input className='submit-btn' type="submit" value="login" />
//                 </div>
//             </form>
//             <p className='user-account'>New User? <Link to="/register">Create A New Account</Link> </p>
//             <div className='google-btn'>
//                 <button onClick={handleGoogleSignIn}>Google Sign in</button>
//             </div>
//         </div>
//                 </Col>
//             </Row>
//             </Container>
//         </div>
//         </>
        
//     );
// };

// export default Login;