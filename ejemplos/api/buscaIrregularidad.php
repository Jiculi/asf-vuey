<?php
// crea aaaa
    require_once 'database.php';
    require 'libreriaX.php';
    $db = new libreria();

    $entidad = '%'.$_REQUEST["entidad"].'%';

    $result = $db->putAccionesXirregularidad($entidad);

    $data = array();
    $i = 0;
    if ($result == "{}") {
        $data[] = "Fallo".$entidad;
    } else {
        foreach ($result as $row => $r) {
            $data[] = array(
                'key' => $i,
                'accion' => $r['num_accion']
            );
            $i++;
        }
    

    }
    echo json_encode($data);				   
    Database::disconnect();
	
?>

