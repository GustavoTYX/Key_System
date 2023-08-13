document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.getElementById("generateButton");
  const generatedKeyElement = document.getElementById("generatedKey");
  const timerElement = document.getElementById("timer");

  generateButton.addEventListener("click", generateAndDisplayKey);

  async function generateAndDisplayKey() {
    const storedKey = await getStoredKeyFromServer();
    generatedKeyElement.textContent = storedKey;
    generateButton.disabled = true;
    startTimer(24 * 60 * 60); // 24 hours in seconds
  }

  async function getStoredKeyFromServer() {
    // Fetch key from server, or generate if not available
    // You can implement your own logic here
    const response = await fetch("https://github.com/GustavoTYX/Key_System/blob/main/generate-key.php");
    const storedKey = await response.text();
    return storedKey;
  }

  function startTimer(seconds) {
    let remainingTime = seconds;
    updateTimerDisplay(remainingTime);

    const timerInterval = setInterval(() => {
      remainingTime--;

      if (remainingTime <= 0) {
        clearInterval(timerInterval);
        generateButton.disabled = false;
      }

      updateTimerDisplay(remainingTime);
    }, 1000);
  }

  function updateTimerDisplay(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;
    timerElement.textContent = `Time remaining: ${formattedTime}`;
  }
});
