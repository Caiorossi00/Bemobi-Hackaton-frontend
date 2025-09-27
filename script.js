document.addEventListener("DOMContentLoaded", () => {
  const beInsights = document.getElementById("be-insights");
  const header = beInsights.querySelector(".dropdown-header");

  header.addEventListener("click", () => {
    beInsights.classList.toggle("active");
  });

  // 👉 Buscar insights da API e renderizar
  async function fetchInsights() {
    try {
      const res = await fetch("http://localhost:3000/analise");
      const data = await res.json();

      const insightsList = document.getElementById("insights-list");
      insightsList.innerHTML = ""; // limpa

      data.insights.forEach((msg) => {
        const li = document.createElement("li");
        li.textContent = msg;
        insightsList.appendChild(li);
      });
    } catch (err) {
      console.error("Erro ao buscar insights:", err);
    }
  }

  fetchInsights();
});
