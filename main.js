document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".hero-title");
  if (!title) return;

  function onScroll() {
    const trigger = window.innerHeight * 0.4; // 화면 높이의 40% 지점
    if (window.scrollY > trigger) {
      title.classList.add("pinned");
    } else {
      title.classList.remove("pinned");
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll(); // 최초 진입 시 상태 한 번 세팅
});

/* ================================
   카드 랜덤 섞기 기능
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".card-grid");
  if (!grid) return;

  const cards = Array.from(grid.children);

  // Fisher–Yates Shuffle
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  // 기존 요소 제거 후, 섞인 순서대로 다시 append
  cards.forEach(card => grid.appendChild(card));
});
