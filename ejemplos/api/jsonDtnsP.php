<?php

require_once 'database.php';
require 'libreriaX.php';
$db = new libreria();

$compacta = $_REQUEST["compacta"];

$result = $db->getDesahogo();

$data = array();
if ($result == "{}") {
    $data[] = 	 "No hay nada";
} else {
	foreach ($result as $row => $r) {
        if ($r['inicio_frr'] == "" or $r['inicio_frr'] == 0)
		{
			$monto = $r['monto_no_solventado'];
		} else {
			$monto = $r['inicio_frr'];
		}

        $data[] = array(
            'num_accion' => $r['num_accion'],		
            'entidad' => $r['entidad'],		
            'nombre' => $r['nombre'],
            'cargo' => $r['cargo'],
            'fondo' => $db->dameFondo($r['num_accion']),
            'cp' => $r['cp'],
            'estado' => $db->dameEstado($r['detalle_edo_tramite']),
            'monto' => number_format(floatval($monto),2),
            'pdrcs' => $r['pdrcs'],
            'status' => $r['status']
        );
    }
    $salida = ($compacta) ? $db->presuntos($data) : $data;
}
echo json_encode($salida);				   
Database::disconnect();
	
?>

