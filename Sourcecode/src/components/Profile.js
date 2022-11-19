import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import '../UserPage.css'
const Profile = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

  const id = sessionStorage.getItem("user_id");

  useEffect(() => {
    getUser();
  }, []);

  function getUser() {
    axios.get(`http://localhost/api7/reg.php/${id}`).then(function (response) {
      console.log(response.data);
      setInputs(response.data);
    });
  }
  console.log(id);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost/api7/reg.php/${id}`, inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("Profile");
      });
  };

  return (
    
    <div className="pro">

      <div className="container contaprofile table1 mt-5">
        <div className="row gutters">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <form onSubmit={handleSubmit}>
              {/* <div className="card h-100"> */}
                {/* <div className="card-body"> */}
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h1 className="mb-2  h1pro">Personal Details</h1>
                    </div></div>
                    <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12">
                      <input type="hidden" value={id} name="id" />
                     
                      <div className="form-group">
                        <label htmlFor="fullName">Emploey ID</label>
                        <input
                          disabled
                          type="twxt"
                          className="form-control"
                          name="id"
                          value={inputs.id}
                        /></div>
                      </div></div>
                      <div className="row gutters">
                      <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          placeholder="Enter full name"
                          name="name"
                          onChange={handleChange}
                          value={inputs.name}
                        />
                      </div></div>
                    </div>
                    <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="eMail">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="eMail"
                          placeholder="Enter email ID"
                          name="email"
                          onChange={handleChange}
                          value={inputs.email}
                        />
                      </div></div>
                    </div>
                    <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="Enter phone number"
                          name="phone"
                          onChange={handleChange}
                          value={inputs.phone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <label htmlFor="zIp">password</label>
                        <input
                          id="password"
                          type="password"
                          className="form-control "
                          name="password"
                          required
                          onChange={handleChange}
                          value={inputs.password}
                          autocomplete="new-password"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="text-right mt-4">
                   
                        <button
                          type="submit"
                          id="submit"
                          name="submit"
                          className="btn submitpro"
                        >
                          Update
                        </button>

                        <button
                          type="submit"
                          id="submit"
                          name="submit"
                          className="btn btn-secondary  Cancelpro mt-3"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                {/* </div> */}
              {/* </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
