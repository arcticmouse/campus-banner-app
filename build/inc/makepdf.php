<?php
function make_pdf($data){
    /*$data = array(
        'Public Affairs',
        'Leta Negandhi',
        'leta@berkeley.edu',
        'Zed Lopez',
        'zed@berkeley.edu',
        array(
            array('415/5 - South Drive near Chou Hall', 'pole_415-5b.jpg'),
            array('633/7 - Birge Path/Bancroft Way across from Hearst Museum', 'pole_633-7b.jpg'),
            array('405/8 - Optometry Ln/Birge Path', 'pole_405-8b.jpg'),
            array('115/10 - Eshleman Rd / Barrow Ln', 'pole_115-10b.jpg'),
            array('676/12 - South Drive at Oppenheimer Way', 'pole_676-12b.jpg'),
            array('178/14 - Davis Hall', 'pole_178-14b.jpg'),
            array('230/18 - Hilgard Way', 'pole_230-18b.jpg'),
            array('919/22 - Crescent Lawn', 'pole_919-22b.jpg'),
            array('511/24 - Walkway bridge over Strawberry Creek', 'pole_511-24b.jpg'),
            array('940/24 - Spieker Plaza / in front of Playhouse', 'pole_940-24b.jpg'),
            array('315/25 - Sather Rd between Wheeler/Durant', 'pole_315-25b.jpg'),
            array('542/25 - Sather Rd between Wheeler/Durant', 'pole_542-25b.jpg'),
            array('348/27 - Frank Schlessinger Way near Central Heating Plant', 'pole_348-27b.jpg'),
            array('208/28 - McCone Hall/Northgate Hall', 'pole_208-28b.jpg'),
            array('453/30 - University Drive/Glade Path', 'pole_453-30b.jpg'),
            array('607/34 - Cheit Ln in front of Cheit Hall', 'pole_607-34b.jpg'),
            array('898/35 - University Drive near Pimentel', 'pole_898-35b.jpg'),
            array('582/138 - University Drive / SE corner of Starr Library', 'pole_582-138b.jpg'),
            array('648/139 - Crescent Lawn', 'pole_648-139b.jpg'),
            array('323/140 - South Hall Rd./Campanile Way', 'pole_323-140b.jpg'),
        )
    );*/

    include_once('fpdf.php');

    /***** SET UP *****/
    $pdf = new FPDF();
    $pdf->AddPage();
    $pdf->SetFont('Arial','B',16);

    /***** HEADING *****/
    $title = 'Job for ' . $data[0];
    $pdf->Cell(100,10,$title);
    $pdf->Ln();

    $pdf->SetFont('Arial','',12);
    $contact = 'Contact Hulda Nelson 510.643.8956 -or- Melani King 510.643.6161 with questions';
    $pdf->Cell(100,10,$contact);
    $pdf->Ln();
    $pdf->Ln();
    $pdf->Ln();

    /***** CONTENT *****/
    $pdf->SetFont('Arial','B','10');


    if($data[5]) {

        $label_row = 0;
        $pic_row = 1;
        for($i = 0; $i < count($data[5]); $i++){
            $table[$label_row][] = $data[5][$i][0];
            $table[$pic_row][] = $data[5][$i][1];

            if($i % 2 != 0){
                $label_row += 2;
                $pic_row += 2;
            }
        }

        $count = 0;
        foreach($table as $index=>$t) {
            $y = $pdf->GetY();          
            if($index % 2 == 0) {
                $pdf->SetX(10);
                $pdf->MultiCell(90,4,$t[0],'L');
                
                $pdf->SetX(110);
                $pdf->SetY($y, false);
                $pdf->MultiCell(90,4,$t[1],'L');
            } else {
                $img1 = './inc/img/' . $t[0];
                $size = getimagesize($img1);
                if($size !== false) {
                    $pdf->Image($img1,10,null,40);
                } else {
                    $pdf->MultiCell(90,40,'');
                }


                $img2 = './inc/img/' . $t[1];
                $size = getimagesize($img2);
                if($size !== false) {
                    $pdf->Image($img2,110,$y,40);
                } else {
                    $pdf->MultiCell(90,40,'');
                }
                $pdf->Ln();
                $pdf->Ln();
            }

            $pdf->Ln();
            $pdf->Ln();
            if($index == 3) $pdf->addPage();
            if($index > 3){
                if($count == 5) {
                    if($index != count($table)) {
                        $pdf->addPage();
                        $count = 0;  
                    } 
                } else {
                    $count++;
                }
            }
        }
    }

    $file = './pdfs/' . preg_replace("/[^a-zA-Z]+/", "", $data[2]) . date("Y") . date("m") . date("d") . date("h") . date("i") . '.pdf';
    $pdf->Output($file,'F');

    if(file_exists($file)) {
        return $file;
    } else {
        return false;
    }
    
}
?>