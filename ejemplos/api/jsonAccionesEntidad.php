<?php

require_once 'database.php';
require 'libreriaX.php';
$db = new libreria();

$result = $db->getAccionesEntidad();

$data = array();
if ($result == "{}") {
    $data[] = 	 "No hay nada";
} else {
	foreach ($result as $row => $r) {

        $data[] = array(
            'cp' => $r['cp'],		
            'entidad' => mb_substr($r['entidad'],0,40), 
            'num_accion' => $r['num_accion'],
            'inicio_frr' => number_format(floatval($r['inicio_frr'])),
            'monto_no_solventado' => number_format(floatval($r['monto_no_solventado']),2),
            'pdrcs' => $r['pdrcs'],
            'fecha_edo_tramite' => $r['fecha_edo_tramite'],
            'detalle_edo_tramite' => $r['detalle_edo_tramite'],
            'estado' => $r['detalle_estado']
        );
	}
}
echo json_encode($data);				   
Database::disconnect();
	
?>