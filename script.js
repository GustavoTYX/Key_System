document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generateButton");
  const generatedKeyElement = document.getElementById("generatedKey");

  generateButton.addEventListener("click", generateKey);

  function generateKey() {
    const generatedKey = generateRandomKey();
    generatedKeyElement.textContent = generatedKey;
    generateButton.disabled = true;

    // Send the generated key to PHP for storage
    // You would need to set up a server-side script for this
    // For demonstration purposes, we'll simulate a request delay
    setTimeout(() => {
      generateButton.disabled = false;
    }, 10000); // Re-enable button after 10 seconds
  }

  function generateRandomKey() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let key = "";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      key += characters[randomIndex];
    }
    return key;
  }
});
