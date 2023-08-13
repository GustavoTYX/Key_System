<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $ip = $_SERVER['REMOTE_ADDR'];

    // Check if a key was submitted via POST
    if (isset($_POST['key'])) {
        $key = $_POST['key'];

        // Store the key in a file, database, or other storage mechanism
        // For this example, we'll store it in a text file
        storeKeyForIP($ip, $key);

        echo "Key stored successfully.";
    } else {
        echo "Key not provided.";
    }
} else {
    echo "Invalid request method.";
}

function storeKeyForIP($ip, $key) {
    // Replace this with your actual logic to store the key
    // For demonstration purposes, we'll store it in a text file
    $storageFile = 'stored_keys.txt';
    $data = "$ip|$key\n";
    file_put_contents($storageFile, $data, FILE_APPEND);
}
?>
