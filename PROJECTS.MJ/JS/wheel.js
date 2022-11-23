// 마우스 휠 (스크롤이벤트 전용 페이지)
$(() => {
  //   console.log("스크롤 준비완료!");
  ///////////////////////////////
  // 이벤트명 scroll
  // 대상 window
  // 스크롤 이벤트 전용 변수 : SC
  let SC;
  let SC2 = 0;
  // 2번째 화면 높이 변수
  let twoView = $(".main");
  // 3번째 화면 높이 변수
  let altreeView = $(".main3").offset().top + "px";
  let platbox = $(".wrap3dplat").offset().top + "px";
  $(window).scroll(function () {
    SC = $(this).scrollTop();

    // 스크롤 이벤트
    // 여기서 this는 window를 가리킨다
    // scrollTop() 메서드 - 세로 스크롤 위치값을 리턴하는
    // 메서드
    console.log(SC); // -> 콘솔창에 현제 세로 위치값이 찍힌다...
    // 첫화면 변수
    // let firstView = $(window).scrollTop("0");
    // if($(this).scrollTop() >= Math.ceil($('.target').offset().top))
    if (SC > SC2) {
    
        
      
    }

    SC2 = SC;
  }); //////// SCROLL /////////
}); ///////  JQB  //////////
