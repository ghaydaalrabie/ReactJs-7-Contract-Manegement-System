<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: access');
header('Access-Control-Allow-Methods: PUT');
header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Headers:Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

include 'db_connect.php';
$data = json_decode(file_get_contents("php://input"));
$sql = "select * from contracts where id='" . $_GET['id'] . "'";
$result = mysqli_query($con, $sql);
$output = "";
while ($rs = mysqli_fetch_assoc($result)) {
    if ($output != "") {
        $output .= ",";
    }

        $output .= '{"contract_name":"' . $rs["contract_name"] . '",';
        $output .= '"signing_date":"' . $rs["signing_date"] . '",';
        $output .= '"expiration_date":"' . $rs["expiration_date"] . '",';
        $output .= '"total_cost":"' . $rs["total_cost"] . '",';
        $output .= '"legal_officer_name":"' . $rs["legal_officer_name"] . '",';
        $output .= '"company_name":"' . $rs["company_name"] . '",';
        $output .= '"company_location":"' . $rs["company_location"] . '",';
        $output .= '"company_contact":"' . $rs["company_contact"] . '",';
        $output .= '"id":"' . $rs["id"] . '",';
        $output .= '"status":"' . $rs["status"] . '",';
        $output .= '"user_id":"' . $rs["user_id"] . '"}';


 
}
$output = '{"records":[' . $output . ']}';
echo $output;
