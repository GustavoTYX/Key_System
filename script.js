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
    const response = await fetch("store-key.php");
    const storedKey = await response.text();
    return storedKey;
  }
});
