// 마우스 휠 (스크롤이벤트 전용 페이지)
$(() => {
  let scTop;
  let lastSc;
  const slidegnb = $(".slidegnb");
  const sm = $(".sm");
  const topA = $(".tbox1");



  $(window).scroll(function () {
    //  스크롤 위치값 찍기
    scTop = $(this).scrollTop(); // -> 세로 스크롤 위치값을 리턴하는 메서드
    // 콘솔창에 위치값 찍어보기
    // console.log(scTop)

    // 1 . 슬림메뉴 클래스 온 적용
    if (scTop >= 100) {

      topA.css({ position: "fixed" });
      topA.find(".top").slideUp();
      topA.addClass("on")

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
      
    }

    ////////////////////////////
    // 스크롤 방향 알아내기
    if (scTop > lastSc) {
      console.log("아래");
    } else {
      console.log("윗방향!");
    }
    // 마지막 위치 없데이트 필수!

    lastSc = scTop;
  }); /// 스크롤 ///
}); ///////  JQB  //////////
