/* ================================
   hero title scroll 고정 기능
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".hero-title");
  if (!title) return;

  function onScroll() {
    const trigger = window.innerHeight * 0.4;
    if (window.scrollY > trigger) {
      title.classList.add("pinned");
    } else {
      title.classList.remove("pinned");
    }
  }

  window.addEventListener("scroll", onScroll);
  onScroll();
});

/* ================================
   카드 랜덤 섞기 (첫 카드는 고정)
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".card-grid");
  if (!grid) return;

  const cards = Array.from(grid.children);

  // 첫 번째 카드(bio) 고정
  const firstCard = cards.shift(); // cards[0] 제거 후 반환됨

  // 나머지 카드들만 섞기
  const rest = cards;

  // Fisher–Yates Shuffle
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }

  // 기존 내용 제거
  grid.innerHTML = "";

  // 첫 카드 먼저 추가
  grid.appendChild(firstCard);

  // 섞은 카드들 추가
  rest.forEach(card => grid.appendChild(card));
});
