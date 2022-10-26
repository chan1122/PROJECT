// 음원사이트 메인 페이지 자바스크립트

// 로딩하기
//제이쿼리 로딩구역
$(() => {
  /////////////////////////////////////////////
  // 메인 트랙 커버박스 클릭 이벤트 //
  $(".mtrackcoverinng").click(function () {
    $(this).animate(
      {
        height: "800px",
      },function ani1(){

        $(".mtrack",this).css({
          transform:"translate(-50%, -50%) rotateX(0deg) rotateY(0deg)",
          animation: "ttrack1ani paused",
          animation: "tttrack1 2s ease fowards",
        },setTimeout,800,ani2)// 애니 메이션 2

        function ani2(){
          $
        }
      })//기존 
      
        
       // 메인 트랙
  }); // 메인 트랙 커버박스 클릭 이벤트 //
}); //제이쿼리 로딩구역/////////////////////////
