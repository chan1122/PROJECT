// 음원사이트 메인 페이지 자바스크립트

// 로딩하기
//제이쿼리 로딩구역
$(() => {
  /////////////////////////////////////////////
  // 메인 트랙 커버박스 클릭 이벤트 //
  $(".mtrackcoverinng").click(function(){
    $(this).css({
        height:"800px",
        transition: "all .4s ease-in"
    })// 메인 트랙 커버박스 클릭 css //
    $(".mtrack",this)
    .css({
        transition:"all 1s ease-out",
        transform:"translate(-50%, -50%) rotateX(0deg) rotateY(0deg)"
    })
  });// 메인 트랙 커버박스 클릭 이벤트 //
}); //제이쿼리 로딩구역/////////////////////////
