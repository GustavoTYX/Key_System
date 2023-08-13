<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $ip = $_SERVER['REMOTE_ADDR'];

    // Retrieve the stored key for the IP
    $storedKey = getStoredKeyForIP($ip);

    if ($storedKey) {
        echo $storedKey;
    } else {
        echo "No key stored for this IP.";
    }
} else {
    echo "Invalid request method.";
}

function getStoredKeyForIP($ip) {
    // Replace this with your actual logic to retrieve the stored key
    $storedKeys = json_decode(file_get_contents('stored_keys.txt'), true);

    if (isset($storedKeys[$ip])) {
        return $storedKeys[$ip];
    } else {
        return null;
    }
}
?>
