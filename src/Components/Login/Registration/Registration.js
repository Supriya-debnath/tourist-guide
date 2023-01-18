import React from 'react';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registration = () => {
    const { error, user, loading, handleUserRegister } = useAuth();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        if (data.password !== data.confPassword) {
            alert("Your password did not match");
            return;
        }
        handleUserRegister(data.email, data.password, data.name, navigate);
        // console.log(data);
    };

    return (
        <>
            <div className="register-style">
                <Container className="py-4">
                    <div className="box-shadows">
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="mx-auto text-center">
                                    {!loading && (
                                        <div className="p-3 mb-5 bg-body ">
                                            <form
                                                onSubmit={handleSubmit(
                                                    onSubmit
                                                )}
                                            >
                                                <h2 className="fw-bold">
                                                    REGISTER
                                                </h2>
                                                <input
                                                    className="p-2 mb-2 form-control"
                                                    type="text"
                                                    placeholder="Your Name"
                                                    {...register("name")}
                                                    required
                                                />
                                                <input
                                                    className="p-2 mb-2 form-control"
                                                    type="email"
                                                    placeholder="Your Email"
                                                    {...register("email")}
                                                    required
                                                />
                                                <input
                                                    className="p-2 mb-3 form-control"
                                                    type="password"
                                                    placeholder="Type Password"
                                                    {...register("password")}
                                                    required
                                                />
                                                <input
                                                    className="p-2 mb-3 form-control"
                                                    type="password"
                                                    placeholder="ReType Password"
                                                    {...register(
                                                        "confPassword"
                                                    )}
                                                    required
                                                />
                                                <input
                                                    className="mb-3 px-5 submit-form"
                                                    type="submit"
                                                    value="Register"
                                                />
                                            </form>
                                            <p className="mt-1">
                                                Already Registered?
                                                <Link
                                                    to="/login"
                                                    style={{
                                                        textDecoration: "none",
                                                    }}
                                                >
                                                    &nbsp;Please Login
                                                </Link>
                                            </p>
                                            {error && (
                                                <Alert variant="danger">
                                                    {error}
                                                </Alert>
                                            )}
                                        </div>
                                    )}
                                    {loading && (
                                        <Spinner
                                            animation="border"
                                            variant="info"
                                        />
                                    )}
                                    {user?.email && (
                                        <Alert variant="success">
                                            Registration Successful
                                        </Alert>
                                    )}
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <img
                                    className="img-fluid"
                                    src="https://i.ibb.co/fGJndw8/e3dd9948fa25737a832e1688c0571484.png"
                                    alt=""
                                />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Registration;







// import React, { useContext } from 'react';
// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../Contexts/AuthProvider';
// import './Registration.css';

// const Registration = () => {

//     const {register} = useForm();

//     const {createUser} = useContext(AuthContext);

//     const handleRegistration = event =>{
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;

//         createUser(email, password)
//         .then(result =>{
//             const user = result.user;
//             console.log(user);
//         })
//         .catch(err => console.error(err));
//     }

//     return (
//         <>
//             <div className="form-container">
//             <h2 className="form-title">
//                 Registration
//             </h2>
//             <form onSubmit={handleRegistration}>
//                 <div className="control">
//                     <label className='email-title' htmlFor="name">Name</label>
//                     <input type="text" {...register("name")} name='text' required/>
//                 </div>
//                 <div className="control">
//                     <label className='email-title' htmlFor="email">Email</label>
//                     <input type="email" {...register("email")} name='email' required/>
//                 </div>
//                 <div className="control">
//                     <label className='pass' htmlFor="password">Password</label>
//                     <input type="password" {...register("password")} name='password' required/>
//                 </div>
//                 <div className="control">
//                     <label className='pass' htmlFor="password">Confirm Password</label>
//                     <input type="password" {...register("password")} name='password' required/>
//                 </div>
//                 <div className='butonn'>
//                 <input className='submit-btn' type="submit" value="REGISTER NOW" />
//                 </div>
//             </form>
//             <p className='user-account'>Already Have An Account? <Link to="/login">Please Login</Link> </p>
//         </div>

//         </>
//     );
// };

// export default Registration;