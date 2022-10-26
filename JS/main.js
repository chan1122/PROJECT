// 음원사이트 메인 페이지 자바스크립트

// 로딩하기
//제이쿼리 로딩구역
$(() => {
  /////////////////////////////////////////////
  // 메인 트랙 커버박스 클릭 이벤트 //
  $(".mtrackcoverinng").click(function(){
    $(this).animate({
      height:"800px", 
    },800).
    $(".mtrack",this)
    .animate({
      Transform: "translate(-50%, -50%) rotateX(0) rotateY(0deg) rotate(0deg)"
    })
  });// 메인 트랙 커버박스 클릭 이벤트 //
}); //제이쿼리 로딩구역/////////////////////////
