import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';

function AddContract() {   
    const [contracts, setContracts] = useState(
       []
     );
    const [contract, setContract] = useState({
        contract_name: '',
        signing_date: '',
        expiration_date: '',
        total_cost: '',
        legal_officer_name: '',
        user_id: '',
        company_name:'',
        company_location:'',
        company_contact:'',
        status: '',
    });
 

    function getContracts() {
        axios.get('http://localhost/phpmysql2-contract-crud/adminSelect.php')
            .then(res => {
                console.log(res);
                setContracts(res.data);
                console.log((res.data) );
           })
            .catch(err => {
                console.log(err);
            })
    }
    const deleteUser = async (id) => {
        await axios.delete(`http://localhost/phpmysql2-contract-crud/delete.php?id=${id}`, { data: { id: id } })
            .then(res => {
                console.log(res);
            }
            )
            .catch(err => {
                console.log(err);
            }
            );
        getContracts();
    }

    useEffect(() => {

        getContracts();

    }, [contract])


    // const current = new Date();
    // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

    // const daysBetween = new Date().getDate() - new Date('2020-07-10').getDate()


    return (
        <div className="table1">
            

{/* <h1>{daysBetween}</h1> */}
<h1></h1>




 
         
          
            <table className="table table-hover  table-bordered mt-5 container text-center">
                <thead >
                    <tr><th colSpan={7}>Contracts Details</th>
                    <th colSpan={3}>Company Details</th>
                    <th colSpan={3}>Operations</th>
                    
                    </tr>
                    <tr 
>
                        <th>#</th>
                        <th>Contract Name</th>
                        <th>Signing Date</th>
                        <th>Expiration Date</th>
                        <th>Total Cost</th>
                        <th>Officer Name</th>
                        <th>Employee Num</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Contact</th>
                        <th rowSpan={2}>Status</th>
                        <th colSpan={2}>Action</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {contracts !== [] ? contracts.map((contract, index) => (
                        <tr key={index}>
                            <td>{contract.id}</td>
                            <td>{contract.contract_name}</td>
                            <td>{contract.signing_date}</td>
                            <td>{contract.expiration_date}</td>
                            <td>{contract.total_cost}</td>
                            <td>{contract.legal_officer_name}</td>
                            <td>{contract.user_id}</td>
                            <td>{contract.company_name}</td>
                            <td>{contract.company_location}</td>
                            <td>{contract.company_contact}</td>
                           
            
                            <b><td style={{color:contract.status!=="Approved" ?(contract.status==="Expired"?"red":"grey"): "green"}}>{contract.status}</td></b>

                           


                            <td><Link to={`/edit/${contract.id}`}><FaUserEdit style={{color:"#ffcd3a"}}/></Link></td>
                            <td><Link to="" onClick={() => deleteUser(contract.id)}><MdDeleteForever style={{color:"red"}}/></Link></td>
                        </tr>
                    )) : null}
                </tbody>
            </table>

        </div >

    )
}

export default AddContract