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
