import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

function EditContract() {
  let history = useNavigate();
  const { id } = useParams();
  const [contract, setContract] = useState({
    contract_name: "",
    signing_date: "",
    expiration_date: "",
    total_cost: "",
    legal_officer_name: "",
    user_id: "",
    company_name: "",
    company_location: "",
    company_contact: "",
    status: "",
  });

  const handleChange = (e) => {
    setContract({ ...contract, [e.target.name]: e.target.value });
  };
  const updateForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost/phpmysql2-contract-crud/update.php", contract)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    history("/dashboard");
  };
  function getContracts(id) {
    axios
      .get("http://localhost/phpmysql2-contract-crud/edit.php?id=" + id)
      .then((res) => {
        console.log(res);
        setContract({
          contract_name: res.data.records[0].contract_name,
          signing_date: res.data.records[0].signing_date,
          expiration_date: res.data.records[0].expiration_date,
          total_cost: res.data.records[0].total_cost,
          legal_officer_name: res.data.records[0].legal_officer_name,
          user_id: res.data.records[0].user_id,
          id: res.data.records[0].id,
          company_name: res.data.records[0].company_name,
          company_location: res.data.records[0].company_location,
          company_contact: res.data.records[0].company_contact,

          status: res.data.records[0].status,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getContracts(id);
  }, []);
  return (
    <div className='container table1'>
      <div className="row d-flex justify-content-center align-items-center h-100 ">




    <div className="card" style={{width: '30rem'}}>
        <br/>
    <h1 className="card-title px-2">Edit Contract </h1>
    <hr/>
    
    <div className="card-body">
        
    <form onSubmit={updateForm}>
                           <div style={{  display:' grid',gridTemplateColumns: '50% 50% ',rowGap: '10px',}}>
                           <h3>Contract Info.</h3><h1></h1>
                            <label htmlFor="contract_name">Contract Name :</label>
                            <input type="text" name="contract_name" value={contract.contract_name}  onChange={handleChange} />
                            <label>Signing Date :</label>
                            <input type="date" name="signing_date" value={contract.signing_date} onChange={handleChange} />
                            <label>Expiration Date :</label>
                            <input type="date" name="expiration_date" value={contract.expiration_date} onChange={handleChange} />
                            <label>Total Cost</label>
                            <input type="number" name="total_cost" value={contract.total_cost} onChange={handleChange} />
                            <label>Legal Officer Name :</label>
                            <input type="text" name="legal_officer_name" value={contract.legal_officer_name} onChange={handleChange} />
                            <label>Employee Num :</label>
                            <input type="number" name="user_id" value={contract.user_id} onChange={handleChange} />
                            <hr/><hr/>
                            <h3>Company Info.</h3><h1></h1>
                            <label>Company Name :</label>
                            <input type="text" name="company_name" value={contract.company_name} onChange={handleChange} />
                            <label>Company Location :</label>
                            <input type="text" name="company_location" value={contract.company_location} onChange={handleChange} />
                            <label>Company Contact :</label>
                            <input type="number" name="company_contact" value={contract.company_contact} onChange={handleChange} />
                      
                            <label>Status :</label>
    
    <select name="status" value={contract.status} onChange={handleChange}>
      <option value="Approved">Approved</option>
      <option value="Not Approved">Not Approved</option>
      <option value="Expired">Expired</option>


    
    </select>
    
    </div> 
    <br/> 
    <Link to ="/dashboard"><button  type="submit" name="submit" className='btn btn-secondry float-left'  style={{ backgroundColor: "black" , color:"white" }}
 value={"Back "}>Back </button></Link>        
    <button type="submit" name="submit" className='btn btn-secondry float-right'  style={{backgroundColor:"#ffbe00"}} value={"Update "}>Update </button>
    
    
                </form >
    
    </div>
    </div>
    
    
    </div>
            </div>
  );
}

export default EditContract;
