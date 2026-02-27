function norm(s){ return (s||"").toLowerCase().trim(); }

function login() {
  const user = norm(document.getElementById('username').value);
  const pass = norm(document.getElementById('password').value);
  if (user === norm("CASO I") && pass === norm("MILANO")) {
    window.location.href = "cloud.html";
  } else {
    const err = document.getElementById("error");
    err.textContent = "Credenziali errate";
  }
}

function logout(){
  window.location.href = "index.html";
}

function unlock(correctPassword, file) {
  const input = prompt("Inserisci password:");
  if (!input) return;
  if (norm(input) === norm(correctPassword)) {
    window.open(file, "_blank");
  } else {
    alert("Password errata");
  }
}

document.addEventListener("click", (e) => {
  const head = e.target.closest(".acc-head");
  if(!head) return;
  const section = head.closest(".accordion");
  const body = section.querySelector(".acc-body");
  const chev = head.querySelector(".chev");
  const expanded = head.getAttribute("aria-expanded") === "true";
  head.setAttribute("aria-expanded", expanded ? "false" : "true");
  body.style.maxHeight = expanded ? "0px" : (body.scrollHeight + "px");
  if (chev) chev.textContent = expanded ? "▸" : "▾";
});

window.addEventListener("load", () => {
  document.querySelectorAll(".accordion").forEach((section) => {
    const head = section.querySelector(".acc-head");
    const body = section.querySelector(".acc-body");
    const chev = head.querySelector(".chev");
    const open = section.getAttribute("data-open") === "true";
    head.setAttribute("aria-expanded", open ? "true" : "false");
    body.style.maxHeight = open ? (body.scrollHeight + "px") : "0px";
    if (chev) chev.textContent = open ? "▾" : "▸";
  });
});
