import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Modal, Button } from "react-bootstrap";
import {
  BsFileEarmarkMedical,
  BsHouseDoor,
  BsPlusSquare,
} from "react-icons/bs";
import { Navigate, useNavigate } from "react-router";

const UserContract = ({
  contract_name,
  signing_date,
  expiration_date,
  total_cost,
  legal_officer_name,
  user_id,
  company_name,
  company_location,
  company_contact,
}) => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  let Navigate = useNavigate();
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleShow2 = () => setShow2(true);
  const handleClose2 = () => setShow2(false);
  const handleShow3 = () => setShow3(true);
  const handleClose3 = () => setShow3(false);

  //Add New
  const [contract, setContract] = useState({
    contract_name: "",
    signing_date: "",
    expiration_date: "",
    total_cost: "",
    legal_officer_name: "",
    user_id: "",
  });
  const [contracts, setContracts] = useState([]);
  const handleChange = (e) => {
    setContract({ ...contract, [e.target.name]: e.target.value });
  };
  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost/phpmysql2-contract-crud/insert.php", contract)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setShow3("false");
  };

  // date calculation
  const date1 = new Date(expiration_date);
  const current = new Date();
  const date2 = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;
  const diffTime = Math.round(date1 - current);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  //  {{if (diffDays<11 && diffDays>3){}}}
 
  return (
    <div>
      <div className="teamWrapper">
        <div className="container">
          <div className="colmun">
            <div className="">
              <div className="teamcol">
                {/* <td style={{color:contract.status==="Approved" ? "green":"red"}}>{contract.status}</td> */}

                <div className="teamcolinner">
                  <div className="avatar">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/262/262807.png"
                      alt="Member"
                    />
                  </div>
                  <div className="member-name">
                    {" "}
                    <h2 align="center">{contract_name}</h2>{" "}
                  </div>
                  <div className="member-info">
                    <p align="center">Officer Name: {legal_officer_name}</p>
                  </div>
                  <div className="member-info">
                    <p align="center">Employee Num: {user_id}</p>
                  </div>
                  <b><h4 className="member-info" align="center" style={{color:diffDays<11?(diffDays<4?"red":"yellow"):"white"}}>{diffDays>0?`Remaining Days:${diffDays}`:"Expired"}</h4></b>

                  {/* <div className="member-mail"> <p align="center"> <a href="mailto:kettyleroux@gmail.com">kettyleroux@gmail.com</a> </p> </div> */}
                  <div className="member-social">
                    <ul className="social-listing">
                      <li>
                        <button
                          onClick={handleShow}
                          type="button"
                          class="btn btn-secondry"
                        >
                          <BsFileEarmarkMedical />
                        </button>
                      </li>
                      <li>
                        {" "}
                        <button
                          onClick={handleShow2}
                          type="button"
                          class="btn btn-secondry"
                        >
                          <BsHouseDoor />
                        </button>
                      </li>
                      {/* <li><button  onClick={handleShow3}  type="button"    class="btn btn-secondry"><BsPlusSquare /></button></li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //Contract Details */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contract Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
           className="card-img-top d-block mx-auto"

            style={{ width: "14rem" }}
            src="https://e7.pngegg.com/pngimages/57/714/png-clipart-offer-and-acceptance-contract-of-sale-proposal-zakelijk-voorstel-inventory-management-software-angle-text-thumbnail.png"
            alt=""
          />
          <h3>{contract_name}</h3>
          <h4>Signing Date: {signing_date}</h4>
          <h5>Expiration Date:{expiration_date}</h5>
          <hr />
          <h5>Total Cost: {total_cost}</h5>
          <p>Officer Name: {legal_officer_name}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* //Add New Contract */}
      <Modal show={show2} onHide={handleClose2}>
        <Modal.Header closeButton>
          <Modal.Title>Company Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            className="card-img-top d-block mx-auto"

            style={{ width: "14rem" }}
            src="https://www.pngitem.com/pimgs/m/78-788231_icon-blue-company-icon-png-transparent-png.png"
            alt=""
          />
          <h3>{company_name}</h3>
          <h4>company_location: {company_location}</h4>
          <h5>company_contact:{company_contact}</h5>

          {/* <h5>Total Cost: {total_cost}</h5>
            <p>Officer Name: {legal_officer_name}</p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose2}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* //Add New Contract */}
      {/* <Modal show={show3}  onHide={handleClose3} >
          <Modal.Header closeButton>
            <Modal.Title><h1>Add New Contract</h1></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={submitForm} >
                       <div style={{  display:' grid',gridTemplateColumns: '40% 60% ',rowGap: '10px',}}>
                       <h3>Contract Info.</h3><h1></h1>
                        <label htmlFor="contract_name">Contract Name :</label>
                        <input type="text" name="contract_name" onChange={handleChange} />
                        <label>Signing Date :</label>
                        <input type="date" name="signing_date" onChange={handleChange} />
                        <label>Expiration Date :</label>
                        <input type="date" name="expiration_date" onChange={handleChange} />
                        <label>Total Cost :</label>
                        <input type="text" name="total_cost" onChange={handleChange} />
                        <label>Legal Officer Name :</label>
                        <input type="text" name="legal_officer_name" onChange={handleChange} />
                        <label>employee Num :</label>
                        <input type="number" name="user_id" onChange={handleChange} />
                        <hr/><hr/>
                        <h3>Company Info.</h3><h1></h1>
                        
                        <label>Company Name :</label>
                        <input type="text" name="company_name" onChange={handleChange} />
                        <label>Company Location :</label>
                        <input type="text" name="company_location" onChange={handleChange} />
                        <label>Company Contact :</label>
                        <input type="number" name="company_contact" onChange={handleChange} />



</div>    <br/>   
                 <button className='btn btn-warning pull-right' style={{backgroundColor:"#ffbe00"}} type="submit" name="submit" value={"Add New"}><b>Add New </b></button>

            </form >
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose3}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}
    </div>
  );
};

export default UserContract;
