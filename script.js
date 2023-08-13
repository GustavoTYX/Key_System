document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generateButton");
  const generatedKeyElement = document.getElementById("generatedKey");

  generateButton.addEventListener("click", generateAndSendKey);

  async function generateAndSendKey() {
    const storedKey = await getStoredKeyFromServer();
    generatedKeyElement.textContent = storedKey;
    generateButton.disabled = true;

    // Send the key to another site using a POST request
    await sendKeyToAnotherSite(storedKey);
  }

  async function getStoredKeyFromServer() {
    const response = await fetch("store-key.php");
    const storedKey = await response.text();
    return storedKey;
  }

  async function sendKeyToAnotherSite(key) {
    const otherSiteUrl = "https://gustavotyx.github.io/Key-Receiver/";
    const data = new URLSearchParams();
    data.append("key", key);

    try {
      const response = await fetch(otherSiteUrl, {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        console.log("Key sent to the other site successfully.");
      } else {
        console.error("Failed to send the key to the other site.");
      }
    } catch (error) {
      console.error("Error sending the key:", error);
    }
  }
});
