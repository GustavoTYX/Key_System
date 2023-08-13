document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generateButton");
  const generatedKeyElement = document.getElementById("generatedKey");

  generateButton.addEventListener("click", generateAndDisplayKey);

  function generateAndDisplayKey() {
    const storedKey = getStoredKeyFromServer();
    generatedKeyElement.textContent = storedKey;
    generateButton.disabled = true;
  }

  function getStoredKeyFromServer() {
    // Replace this with your actual API URL that serves the stored key
    const apiUrl = "https://example.com/api/get-key.php";

    return fetch(apiUrl)
      .then(response => response.text())
      .catch(error => {
        console.error("Error fetching stored key:", error);
        return "-";
      });
  }
});
