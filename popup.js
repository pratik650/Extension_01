document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("getTitleButton").addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tab = tabs[0];
        const title = tab.title;
        const titleDisplay = document.getElementById("title");
        titleDisplay.innerHTML = ""; // Clear the previous content
        title.split(" ").forEach(function (word) {
          const wordDiv = document.createElement("div");
          wordDiv.textContent = word;
          titleDisplay.appendChild(wordDiv);
        });
      });
    });
  });