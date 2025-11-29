// 스크롤 양에 따라 body에 클래스를 붙여서
// hero-title-wrap의 정렬 상태를 바꿔준다.

function updateScrollState() {
  const scrolled = window.scrollY > 10; // 10px 이상 내려가면 "스크롤된 상태"로 판단
  document.body.classList.toggle("scrolled", scrolled);
}

window.addEventListener("scroll", updateScrollState);
window.addEventListener("load", updateScrollState);
