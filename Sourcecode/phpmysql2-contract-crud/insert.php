<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: POST');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Headers:Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

include 'db_connect.php';
$data = json_decode(file_get_contents("php://input"));
$contract_name = $data->contract_name;
$signing_date = $data->signing_date;
$expiration_date = $data->expiration_date;
$total_cost = $data->total_cost;
$legal_officer_name = $data->legal_officer_name;
$company_name = $data->company_name;
$company_location = $data->company_location;
$company_contact = $data->company_contact;
$user_id = $data->user_id;
if ($contract_name && $signing_date && $expiration_date && $total_cost && $legal_officer_name && $user_id && $company_name && $company_location && $company_contact) {
    $sql = "INSERT INTO contracts (contract_name, signing_date,expiration_date, total_cost , legal_officer_name ,user_id,company_name,company_location,company_contact) VALUES ('$contract_name', '$signing_date', '$expiration_date', '$total_cost', '$legal_officer_name' ,'$user_id','$company_name','$company_location','$company_contact')";
    $result = mysqli_query($con, $sql);
    if ($result) {
        echo json_encode(['message' => 'Contract added successfully.']);
    } else {
        echo json_encode(['message' => 'Contract not added!']);
    }
}
