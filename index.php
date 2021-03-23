<?php  

// autoload file
spl_autoload_register(function ($classname)  {
    $filename = 'controllers/' . $classname . '.php';

    if (file_exists($filename)) {
        include $filename;
    }
});

spl_autoload_register(function ($classname)  {
    $filename = 'models/' . $classname . '.php';

    if (file_exists($filename)) {
        include $filename;
    }
});

$url_controller = $_GET['controller']??'index';
$url_action = $_GET['action']??'index';

$controller = $url_controller.'_controller';
$action = $url_action.'_action';

$controller_object = new $controller();

if (!method_exists($controller_object, $action)) {
    die ('Action không tồn tại');
}

$controller_object->$action();
