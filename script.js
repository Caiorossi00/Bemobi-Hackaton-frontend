function toggleSection(contentId, arrowId) {
  const content = document.getElementById(contentId);
  const arrow = document.getElementById(arrowId);
  const isCollapsed = content.classList.contains("collapsed");

  if (isCollapsed) {
    content.classList.remove("collapsed");
    content.style.maxHeight = 800 + "px";
    arrow.classList.remove("rotated-down");
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
    setTimeout(() => {
      content.classList.add("collapsed");
      content.style.maxHeight = "0";
    }, 10);
    arrow.classList.add("rotated-down");
  }
}

window.onload = function () {
  const updatesContent = document.getElementById("updates-content");

  if (updatesContent.classList.contains("collapsed")) {
    updatesContent.style.maxHeight = "0";
  }

  let seconds = 12;
  const updateStatusElement = document.getElementById("update-status");

  setInterval(() => {
    seconds++;
    let message;
    if (seconds < 60) {
      message = `Atualizado há: ${seconds} segundos`;
    } else {
      const minutes = Math.floor(seconds / 60);
      message = `Atualizado há: ${minutes} minuto${minutes > 1 ? "s" : ""}`;
    }
    updateStatusElement.textContent = message;
  }, 1000);
};
