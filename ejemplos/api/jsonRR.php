<?php

require_once 'database.php';
require 'libreriaX.php';
$db = new libreria();

$result = $db->getRR();
$data = array();
if ($result == "{}") {
    $data[] = 	 "No hay nada";
} else {
	foreach ($result as $row => $r) {
        $data[] = array(
            'num_accion' => $r['num_accion'],
            'entidad' => $r['entidad'],		
            'cp' => $r['cp'],
            'cont' => $r['cont'],
            'actor' => $r['nombre'],
            'recurso_reconsideracion' => $r['recurso_reconsideracion'],
            'monto_no_solventado' => number_format(floatval($r['monto_no_solventado']),2),
            'detalle_edo_tramite' => $db->dameEstado($r['detalle_edo_tramite']),
            'entidadA' => $r['cargo']	
	
        );
	}
}
echo json_encode($data);				   
Database::disconnect();
	
?>

