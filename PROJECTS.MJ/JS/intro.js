// 변수 구역

const page = $(".page");
const pr = $(".pillar");

console.log("로딩완료!");

// pgae.each문으로 보이는 순서 정하기
// $(page.get().reverse()).each(function (idx, ele) {
//   $(this).css({ zIndex: idx + 1 });
// });

// page클릭시 넘어가기
page.click(function () {
  $(this).css({ transform: "rotateY(180deg)", zIndex: 1 });
  $(this).siblings().css({ zIndex: 0 });
});
