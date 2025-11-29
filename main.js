// 스크롤 위치에 따라 hero 제목이 중앙 → 상단으로 붙도록 클래스 토글
(function () {
  const stickyHero = document.querySelector(".sticky-hero");
  if (!stickyHero) return;

  function onScroll() {
    const scrollY = window.scrollY || window.pageYOffset;
    const trigger = window.innerHeight * 0.3; // 화면 높이의 30% 지점

    if (scrollY > trigger) {
      stickyHero.classList.add("pinned");
    } else {
      stickyHero.classList.remove("pinned");
    }
  }

  // 초기 상태 + 스크롤 이벤트
  window.addEventListener("scroll", onScroll);
  onScroll();
})();
