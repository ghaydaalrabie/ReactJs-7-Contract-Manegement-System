<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: PUT');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Headers:Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

include 'db_connect.php';
$data = json_decode(file_get_contents("php://input"));
$id = $data->id;
$contract_name = $data->contract_name;
$signing_date = $data->signing_date;
$expiration_date = $data->expiration_date;
$total_cost = $data->total_cost;
$legal_officer_name = $data->legal_officer_name;
$user_id = $data->user_id;
$company_name = $data->company_name;
$company_location = $data->company_location;
$company_contact = $data->company_contact;


$status = $data->status;

$sql = "UPDATE contracts set contract_name='$contract_name', signing_date='$signing_date',expiration_date='$expiration_date', total_cost='$total_cost' ,legal_officer_name='$legal_officer_name',status='$status' ,company_name='$company_name',company_location='$company_location' ,company_contact='$company_contact' ,user_id='$user_id' where id='$id'";
$result = mysqli_query($con, $sql);
if ($result) {
    echo json_encode(['message' => 'Contract Updated successfully.']);
} else {
    echo json_encode(['message' => 'Contract not added!']);
}
