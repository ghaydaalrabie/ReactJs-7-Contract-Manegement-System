import React from "react";
import UserContract from "./UserContract";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsPlusSquare } from "react-icons/bs";
import { Modal, Button } from "react-bootstrap";

function Contracts() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/phpmysql2-contract-crud/select.php")
      .then((res) => {
        console.log(res);
        setContracts(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [show3, setShow3] = useState(false);
  const handleShow3 = () => setShow3(true);
  const handleClose3 = () => setShow3(false);
  const [contract, setContract] = useState({
    contract_name: "",
    signing_date: "",
    expiration_date: "",
    total_cost: "",
    legal_officer_name: "",
    user_id: "",
  });

  const handleChange = (e) => {
    setContract({
      ...contract,
      [e.target.name]: e.target.value,
      user_id: sessionStorage.getItem("user_id"),
      legal_officer_name: sessionStorage.getItem("username"),
    });
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

  return (
    <div className="container mb-5">
      <h2 style={{marginTop:"120px"}} > All Contracts </h2>
      <button onClick={handleShow3} type="button" class="btn btn-warning mt-5 mb-3 float-right">
        Add new Contract
      </button>

      <div className="teamGrid container">
        {contracts.map((contract) => (
          <UserContract key={contract.id} {...contract} />
        ))}
      </div>
      {/* //Add New Contract */}
      <Modal show={show3} onHide={handleClose3}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Add New Contract</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={submitForm}>
            <div
              style={{
                display: " grid",
                gridTemplateColumns: "40% 60% ",
                rowGap: "10px",
              }}
            >
              <h3>Contract Info.</h3>
              <h1></h1>
              <label htmlFor="contract_name">Contract Name :</label>
              <input type="text" name="contract_name" onChange={handleChange} />
              <label>Signing Date :</label>
              <input type="date" name="signing_date" onChange={handleChange} />
              <label>Expiration Date :</label>
              <input
                type="date"
                name="expiration_date"
                onChange={handleChange}
              />
              <label>Total Cost :</label>
              <input type="text" name="total_cost" onChange={handleChange} />
              <label>Legal Officer Name :</label>
              <input
                type="text"
                name="legal_officer_name"
                value={sessionStorage.getItem("username")}
              />
              <label>employee Num :</label>
              <input
                type="number"
                name="user_id"
                value={sessionStorage.getItem("user_id")}
              />
              <hr />
              <hr />
              <h3>Company Info.</h3>
              <h1></h1>

              <label>Company Name :</label>
              <input type="text" name="company_name" onChange={handleChange} />
              <label>Company Location :</label>
              <input
                type="text"
                name="company_location"
                onChange={handleChange}
              />
              <label>Company Contact :</label>
              <input
                type="number"
                name="company_contact"
                onChange={handleChange}
              />
            </div>{" "}
            <br />
            <button
              className="btn btn-warning pull-right"
              style={{ backgroundColor: "#ffbe00" }}
              type="submit"
              name="submit"
              value={"Add New"}
            >
              <b>Add New </b>
            </button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose3}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Contracts;
