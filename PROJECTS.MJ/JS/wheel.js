// 마우스 휠 (스크롤이벤트 전용 페이지)
$(()=>{

    console.log("스크롤 준비완료!");
    ///////////////////////////////
    // 이벤트명 scroll
    // 대상 window
    // 스크롤 이벤트 전용 변수 : SC
    let SC;
    $(window).scroll(function(){

        // 스크롤 이벤트  
        // 여기서 this는 window를 가리킨다  
        SC = $(this).scrollTop();
        // scrollTop() 메서드 - 세로 스크롤 위치값을 리턴하는 
        // 메서드 
        console.log(SC) // -> 콘솔창에 현제 세로 위치값이 찍힌다...



    });//////// SCROLL /////////



}); ///////  JQB  //////////