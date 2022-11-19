import React, { useState } from "react";
import { Link, NavLink, useLocation } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
    // const [user, setUser] = useState('');
  
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const location = useLocation();
    const redirectPath = location.state?.path || '/';
    const [data, setData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setFormErrors(validate(data));

    }



    const submitForm = (e) => {
        e.preventDefault();


        axios.post('http://localhost/api7/log.php', data)

            .then((result) => {
                console.log(result.data);
                console.log(result.data[0].role)

                if (result.data.length === 0) {
                    const elem = document.getElementById("errorMassage");
                    elem.innerHTML = "Invalied Email and Password";

                } else if (result.data.length !== 0 && result.data[0].role === 'user') {

                    sessionStorage.setItem('username', result.data[0].name);
                    sessionStorage.setItem('useremail', result.data[0].email);
                    sessionStorage.setItem('user_id', result.data[0].id);

                    navigate('/Profile');
                } else {
                    sessionStorage.setItem('username', result.data[0].name);
                    sessionStorage.setItem('useremail', result.data[0].email);
                    sessionStorage.setItem('user_id', result.data[0].id);

                    navigate('/dashboard');
                    
                }
            })




    }




    const validate = (values) => {
        const errors = {};
        const regex =
            /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;

        if (!values.email) {
            errors.email = "Email is required";
        } else if (!regex.test(values.email)) {
            errors.email = "Please enter a valid email";
        }

        


        if (!values.password) {
            errors.password = "Password is required";
        } else if (values.password.length < 7) {
            errors.password = "Password must be 8 characters or more";
        } else if (values.password.length > 12) {
            errors.password = "Password must be 12 characters or less";
        }
        return errors;
    };

    return (
        <>

        <div className="bodylog">
            <div className='col-6  containerlog' style={{ height: "100%" }}>
                {/* <ul className="nav nav-pills nav-justified mb-3 mt-5 " id="ex1" role="tablist">
                    <li className="nav-item me-2" role="presentation">
                        <NavLink className="nav-link bg-primary btn-lg text-white" to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item ms-2" role="presentation">
                        <NavLink className="nav-link bg-primary btn-lg text-white" to="/register">Register</NavLink>
                    </li>
                </ul> */}

                <div className="tab-content" >
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
 <h1 className="h1log">LOGIN</h1>
                        <form className='mt-5' onSubmit={submitForm}>
                            <div class="form-floating mb-3">
                                <input id="email" type="email"
                                    className="form-control @error('email') is-invalid @enderror" name="email" required

                                    onChange={handleChange}
                                    value={data.email}

                                    autocomplete="email" />

                                <label htmlFor="floatingInput">Email address</label>
                            </div>
                            <p className="errors">{formErrors.email}</p>


                            <div class="form-floating mb-3 mt-3">
                                <input id="password" type="password"
                                    className="form-control @error('password') is-invalid @enderror"
                                    name="password" required
                                    onChange={handleChange}
                                    value={data.password}
                                    autocomplete="new-password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                            <p className="errors">{formErrors.password}</p>


                            <div className='d-grid'>
                                <button type="submit" className="btn-lg btn btn-primary btn-block mb-4 submitlog" >LOGIN</button>
                            </div>
                            <div className="text-center">
                                <p>Not a member? <Link to="/register"  className="loginhere-link">Register</Link></p>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            </div>

        </>

    )
}

export default Login