document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generateButton");
  const generatedKeyElement = document.getElementById("generatedKey");

  generateButton.addEventListener("click", generateAndDisplayKey);

  async function generateAndDisplayKey() {
    const storedKey = await getStoredKeyFromServer();
    generatedKeyElement.textContent = storedKey;
    generateButton.disabled = true;
  }

  async function getStoredKeyFromServer() {
    // Replace this with your actual API URL that serves the stored key
    const apiUrl = "https://github.com/GustavoTYX/Key_System/blob/main/store-key.php";

    try {
      const response = await fetch(apiUrl);
      const storedKey = await response.text();
      return storedKey;
    } catch (error) {
      console.error("Error fetching stored key:", error);
      return "-";
    }
  }
});
