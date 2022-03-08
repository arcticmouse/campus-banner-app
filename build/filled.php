<?php
header("Access-Control-Allow-Origin: https://publicaffairs.berkeley.edu/campus-banners/");
header("Content-Type: application/json");
$json = file_get_contents("php://input");
$data = json_decode($json);

if(isset($data[0]) && !empty($data[0]) && isset($data[1]) && !empty($data[1]) && isset($data[2]) && !empty($data[2])) {
    include_once('inc/savefile.php');
    include_once('inc/sendmail.php');
    include_once('inc/makepdf.php');

    $pdf_link = make_pdf($data);
    if($pdf_link) {
        $path = save_file($data, $pdf_link);
        if($path) {
            $mailed = send_mail($path, $data[2], $data[0], $data[1], $data[3], $data[4]);
            /*$http_response = http_response_code();
            if(substr($http_response, 0, 1) == '2') {
                $response = true;
            } else {
                $response = 3;
                error_log('Error sending mail. HTTP Response Code of: ' . $http_response);
            } */
            if($mailed && !(is_string($mailed))) {
                $response = true;
            } else {
                error_log('Error sending mail.' . $mailed);
            }
        } else {
            error_log('Error saving file. PDF has been generated of order');
        }
    } else {
        error_log('Error creating PDF');
    }
} else {
    error_log('No data sent from JS on ' . date("Y") . date("m") . date("d") . date("h") . date("i"));
}
?>