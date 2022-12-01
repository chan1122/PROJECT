import { sm, slidegnb, topA, Cl } from "./module/variable.js";
// 마우스 휠 (스크롤이벤트 전용 페이지)
$(() => {
  let scTop;
  let lastSc;

  $(window).scroll(function () {
    //  스크롤 위치값 찍기
    scTop = $(this).scrollTop(); // -> 세로 스크롤 위치값을 리턴하는 메서드
    // 콘솔창에 위치값 찍어보기
    Cl(scTop);

    // 1 . 상단 큰 로고 클래스 온 적용 + 줄어들기
    if (scTop >= 100) {
      topA.css({ position: "fixed" });
      topA.find(".top").slideUp();
      topA.find(".lm").slideUp();
      topA.addClass("on");
      // 2. 상단 얇은줄 줄어들고 늘어나기
      if (scTop > lastSc) {
        slidegnb.addClass("up");
        sm.fadeOut();
      } else {
        slidegnb.removeClass("up");
        sm.fadeIn(1500);
      }
    } else {
      topA.css({ position: "relative" });
      topA.find(".top").slideDown();
      topA.find(".lm").slideDown();
    }
    let aa = $(".main3").offsetTop()
    Cl(aa);
    // 스테이지 맞추기
    // hb.animate(
    //   {
    //     scrollTop: $(this).offset().top + "px",
    //   },
    //   600
    // );
    ////////////////////////////
    // 스크롤 방향 알아내기

    // 마지막 위치 없데이트 필수!
    lastSc = scTop;
  }); /// 스크롤 ///
}); ///////  JQB  //////////
