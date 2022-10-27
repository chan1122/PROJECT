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
      .hide(10, function () {
        $(this)
          .css({
            transform: " translate(-50%, -50%) rotateX(90deg) rotateY(0deg)",
            animation: "running",
          })
          .delay(100)
          .show(10, function () {
            $(this).css({
              transform:
                "translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotate(0)",
            }); // 등장!
          });
        }) // 사라진후 이어서!


        .parent().siblings()
        .animate({height:"0"},800)
        .find(".mtrack")
        .attr("style","")
        // .css({
        //   transform: " translate(-50%, -50%) rotateX(0deg) rotateY(0deg)",

        // })
        
    // 메인 트랙
  }); // 메인 트랙 커버박스 클릭 이벤트 //
}); //제이쿼리 로딩구역/////////////////////////
