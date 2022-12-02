import { sm, slidegnb, topA, Cl, m2, hb, m3, palt, mvSts, setMvSts } from "./module/variable.js";
// 마우스 휠 (스크롤이벤트 전용 페이지)
let port = 0;
$(() => {
    let lastSc = 0;

    $(window).on("mousewheel wheel",function (e) {
        //  스크롤 위치값 찍기
        let scTop = $(this).scrollTop(); // -> 세로 스크롤 위치값을 리턴하는 메서드
        // 콘솔창에 위치값 찍어보기
        // Cl(scTop);

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
            topA.removeClass("on");
        }
 



        /* 
            [ 페이지 스크롤 기능 구현 구역 ]
            
        */
       Cl("스크롤 준비완료")
        lastSc = scTop;
    }); /// 스크롤 ///

    let temp=1;
    $(document).scroll(function(e){
        let scTop = $(this).scrollTop();
        console.log(scTop);
        if(scTop>1200&&temp){
            $("html,body").stop().animate({
                scrollTop:m3.offset().top+"px"
            },400);
            temp=0;
        }
        else{

        }
    })

    let protWheel = 0;
    m3.on("mousewheel wheel",function(e){
        
        let delta = event.wheelDelta || event.detail;
        // e.wheelDelta 일반 브라우저용 방향정보
        // e.detail 은 파이어폭스용 방향정보
        // 변수 = 속성값1 || 속성값2;
        // 둘 중 유효한 값이 변수에 할당됨!

        console.log('방향:', delta);
      
      if(mvSts) {
        //e.preventDefault();

        if(protWheel) return;
        protWheel = 1;
        setTimeout(()=>protWheel=0,20);

        if(delta<0){
            $(".mtrack").filter(".on")
            .parent().next().trigger("click");

        }
        else{
            $(".mtrack").filter(".on")
            .parent().prev().trigger("click");
        }
        console.log("ㅎㅎㅎ");
    }
      
    });




}); ///////  JQB  //////////
