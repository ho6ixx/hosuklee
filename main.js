// 스크롤 양에 따라 제목을 중앙 ↔ 상단으로 이동
document.addEventListener("scroll", () => {
  const title = document.getElementById("mainTitle");
  if (!title) return;

  const scrollY = window.scrollY;
  const threshold = window.innerHeight * 0.25; // 뷰포트 높이의 25% 지점

  if (scrollY > threshold) {
    // 어느 정도 내려가면 상단 고정 상태로
    title.classList.add("pinned");
  } else {
    // 다시 위로 올리면 중앙으로 복귀
    title.classList.remove("pinned");
  }
});
