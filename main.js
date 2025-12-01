// =========================
// 1) 히어로 타이틀 고정
// =========================
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
  onScroll(); // 최초 상태 세팅
});

// =========================
// 2) 카드 랜덤 섞기 (첫 카드 고정)
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".card-grid");
  if (!grid) return;

  // 모든 카드 수집
  const allCards = Array.from(grid.querySelectorAll(".project-card"));
  if (allCards.length <= 1) return;

  const firstCard = allCards[0];        // bio 카드 고정
  const rest = allCards.slice(1);       // 나머지 카드들만 섞기

  // Fisher–Yates shuffle
  for (let i = rest.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [rest[i], rest[j]] = [rest[j], rest[i]];
  }

  // 컨테이너 비우고 다시 채우기
  grid.innerHTML = "";
  grid.appendChild(firstCard);
  rest.forEach(card => grid.appendChild(card));
});

// =========================
// 3) 커스텀 커서 (보라색 원 + 호버 시 주황색)
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".custom-cursor");
  if (!cursor) return;

  // 기본 마우스 포인터 숨기기
  document.body.style.cursor = "none";

  // 움직임 반영
  window.addEventListener("mousemove", (e) => {
    cursor.style.opacity = "1";
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  window.addEventListener("mouseleave", () => {
    cursor.style.opacity = "0";
  });

  // 링크 위에 올라갈 때 커서 색만 바꾸고 손가락 포인터는 안 보이게
  const hoverTargets = document.querySelectorAll("a, button, .project-card");
  hoverTargets.forEach(el => {
    el.style.cursor = "none"; // 손가락 포인터 숨김

    el.addEventListener("mouseenter", () => {
      cursor.classList.add("is-hover");
    });
    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("is-hover");
    });
  });
});
