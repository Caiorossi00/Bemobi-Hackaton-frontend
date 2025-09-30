document.addEventListener("DOMContentLoaded", () => {
  function normalizeCpf(raw) {
    const digits = String(raw || "").replace(/\D/g, "");
    if (digits.length !== 11) return null;
    return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(
      6,
      9
    )}-${digits.slice(9)}`;
  }

  const iconMap = {
    "⚡": "fa-bolt",
    "⚠": "fa-triangle-exclamation",
    "⚠️": "fa-triangle-exclamation",
    "💡": "fa-lightbulb",
    "🎬": "fa-film",
    "📉": "fa-chart-line",
    "🚰": "fa-droplet",
    "🚍": "fa-bus",
    "🛒": "fa-cart-shopping",
    "💳": "fa-credit-card",
    "🎉": "fa-star",
  };

  async function fetchInsights() {
    try {
      const rawCpf = localStorage.getItem("cpf") || "12345678900";
      const cpf = normalizeCpf(rawCpf);
      if (!cpf) throw new Error("CPF inválido (esperado 11 dígitos).");

      const res = await fetch(
        `http://localhost:3000/analise?cpf=${encodeURIComponent(cpf)}`
      );
      if (!res.ok) {
        console.error("Erro HTTP ao buscar /analise:", res.status);
        return null;
      }

      return await res.json();
    } catch (err) {
      console.error("Erro ao buscar insights:", err);
      return null;
    }
  }

  function createInsightElement(msg, isCard = true) {
    const element = isCard
      ? document.createElement("div")
      : document.createElement("li");
    if (isCard) element.className = "day-card";

    const emojiMatch = msg.match(
      /^(\p{Emoji_Presentation}|\p{Extended_Pictographic}|[^\s])/u
    );
    const emoji = emojiMatch ? emojiMatch[0] : null;
    const iconClass = emoji ? iconMap[emoji] : null;

    if (iconClass) {
      const i = document.createElement("i");
      i.classList.add("fa-solid", iconClass);
      i.setAttribute("aria-hidden", "true");
      element.appendChild(i);

      const text = msg.replace(/^(\s*\S+\s*)/, "").trim();
      element.append(" " + text);
    } else {
      element.textContent = msg;
    }

    return element;
  }

  async function renderPreview() {
    const data = await fetchInsights();
    if (!data) return;

    const msgBox = document.getElementById("mensagem");
    if (msgBox) msgBox.textContent = data.mensagem || "";

    const insightsList = document.getElementById("insights-list");
    if (insightsList) {
      insightsList.innerHTML = "";
      data.insights.slice(0, 3).forEach((msg) => {
        insightsList.appendChild(createInsightElement(msg, true));
      });
    }
  }

  async function renderAll() {
    const data = await fetchInsights();
    if (!data) return;

    const msgBox = document.getElementById("mensagem");
    if (msgBox) msgBox.textContent = data.mensagem || "";

    const insightsList = document.getElementById("insights-list");
    if (insightsList) {
      insightsList.innerHTML = "";
      data.insights.forEach((msg) => {
        insightsList.appendChild(createInsightElement(msg, true));
      });
    }
  }

  // Dropdown toggle
  const beInsights = document.getElementById("be-insights");
  const header = beInsights?.querySelector(".dropdown-header");
  if (header) {
    header.addEventListener("click", () => {
      beInsights.classList.toggle("active");
    });
  }

  // Detectar qual página estamos e chamar a função certa
  if (document.body.querySelector("#top-section")) {
    // index.html → renderiza preview 3
    renderPreview();
  } else if (document.body.querySelector("#be-mid-section")) {
    // vermais.html → renderiza todos
    renderAll();
  }
});
