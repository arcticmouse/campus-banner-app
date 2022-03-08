<?php

function save_file($data, $pdf_link) {
    $link = 'https://publicaffairs.berkeley.edu/campus-banners' . ltrim($pdf_link, '.');

    $message = '<table cellspacing="0" cellpadding="10" border="0">';
    $message .= '';
    $message .= '<tr><td width="80">Name:</td><td width="280">' . $data[0] .'</td></tr>';
    $message .= '<tr><td width="80">Email:</td><td width="280">' . $data[1] . '</td></tr>';
    $message .= '<tr><td width="80">Department:</td><td width="280">' . $data[2] . '</td></tr>';
    $message .= '<tr><td width="80">Alt Name:</td><td width="280">' . $data[3] . '</td></tr>';
    $message .= '<tr><td width="80">Alt Email</td><td width="280">' . $data[4] . '</td></tr>';
    $message .= '<tr><td width="80">Start</td><td width="280">' . $data[6] . '</td></tr>';
    $message .= '<tr><td width="80">End</td><td width="280">'. $data[7] .'</td></tr>';
    $message .= '<tr><td width="80">Markers:</td><td width="280">';
    foreach($data[5] as $m) {
        $message .= $m[0] .'<br>';
    }
    $message .= '</td></tr>';
    $message .= '<tr><td width="80">Order submission file:</td><td width="280"><a href="'.$link.'">' . $link .'</a></td></tr>';
    $message .= '</table>';
    
    $path = './submissions/' . preg_replace("/[^a-zA-Z]+/", "", $data[2]) . date("Y") . date("m") . date("d") . date("h") . date("i");
    if(file_exists($path)) $path .= '-2';
    $success = file_put_contents($path, $message);
    if($success && $success > 0) {
        return($path);
    } else return false;
}

?>