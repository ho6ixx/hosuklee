document.addEventListener("scroll", () => {
  const title = document.querySelector(".sticky-title");
  const scrollY = window.scrollY;

  // 화면 높이의 50% 지점 넘으면 변환
  if (scrollY > window.innerHeight * 0.5) {
    title.classList.add("is-pinned");
  } else {
    title.classList.remove("is-pinned");
  }
});
