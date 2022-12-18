// 음원사이트 인트로페이지 자바스크립트
// 변수 구역
const page = $(".page");
const pr = $(".pillar");
$(() => {
  console.log("로딩완료!");

  // pgae.each문으로 돌리기
  $(page.get().reverse()).each((idx, ele) => {
    $(e.curr).css({ zIndex: $(idx) });
  });
});
