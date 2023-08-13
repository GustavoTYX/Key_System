<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $ip = $_SERVER['REMOTE_ADDR'];

    // Check if a key was already generated within the last 24 hours
    $storedKey = getStoredKeyForIP($ip);

    if ($storedKey === null) {
        $newKey = generateRandomKey();
        storeKeyForIP($ip, $newKey);
        echo $newKey;
    } else {
        echo $storedKey;
    }
} else {
    echo "Invalid request method.";
}

function getStoredKeyForIP($ip) {
    // Replace this with your actual logic to retrieve a stored key
    // For demonstration purposes, we'll simulate a stored key
    $storedKeys = json_decode(file_get_contents('stored_keys.txt'), true);

    if (isset($storedKeys[$ip])) {
        return $storedKeys[$ip];
    } else {
        return null;
    }
}

function storeKeyForIP($ip, $key) {
    // Replace this with your actual logic to store the key
    // For demonstration purposes, we'll store it in a text file
    $storageFile = 'stored_keys.txt';
    $data = "$ip|$key\n";
    file_put_contents($storageFile, $data, FILE_APPEND);
}

function generateRandomKey() {
    $characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $key = '';
    for ($i = 0; $i < 10; $i++) {
        $randomIndex = mt_rand(0, strlen($characters) - 1);
        $key .= $characters[$randomIndex];
    }
    return $key;
}
?>
