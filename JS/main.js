// 음원사이트 메인 페이지 자바스크립트

// 로딩하기
//제이쿼리 로딩구역
$(() => {
  /////////////////////////////////////////////
  // 메인 트랙 커버박스 클릭 이벤트 //
  $(".mtrackcoverinng").click(function () {
    $(this).animate({
      height: "800px",
    });

    $(".mtrack", this)
      .css({ animation: "paused" })
      .hide(200, function () {

        $(".mtrack", this)
        .css({
          animate:"running",
          transform: " translate(-50%, -50%) rotateX(90deg) rotateY(0deg)",
        }).show(2000).animate({
          transform: " translate(-50%, -50%) rotateX(90deg) rotateY(0deg)"}
          ,1000)// 등장!


      }); // 사라진후 이어서!

    // 메인 트랙
  }); // 메인 트랙 커버박스 클릭 이벤트 //
}); //제이쿼리 로딩구역/////////////////////////
