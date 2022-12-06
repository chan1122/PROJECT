import albnum from "./module/DBconnect.js";
import {
    sm,
    slidegnb,
    topA,
    Cl,
    m2,
    hb,
    m3,
    palt,
    setAlSts,
    alSts,
    BWP,
    scTop,
    setScTop,
    delta,
    setDelta,
} from "./module/variable.js";
// 마우스 휠 (스크롤이벤트 전용 페이지)
$(() => {
    let lastSc = 0;

    BWP.on("mousewheel wheel", function (e) {
        setScTop($(this).scrollTop());

        e = window.event || e;

        // 스크롤방향(-:아랫,+윗)
        let tmDelta = e.wheelDelta || e.detail;
        setDelta(tmDelta);
        // console.log("방향:", delta);
        // console.log("상태:", alSts);
        // // 1 . 상단 큰 로고 클래스 온 적용 + 줄어들기
        if (scTop >= 100) {
            topA.css({ position: "fixed" });
            topA.find(".top").slideUp();
            topA.find(".lm").slideUp();
            topA.addClass("on");

            // 2. 상단 얇은줄 줄어들고 늘어나기
            if (scTop > lastSc) {
                slidegnb.addClass("up");
                sm.fadeOut();
                Cl(scTop);
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
        setTimeout(() => {
            
            lastSc = scTop;
        }, 1);
        Cl(lastSc)
        // let tempSts = 0; // 광스크롤 막기

        // e = window.event || e;

        // // 스크롤방향(-:아랫,+윗)
        // let delta = e.wheelDelta || e.detail;
        // console.log("방향:", delta);
        // console.log("상태:", alSts);

        // //  스크롤 위치값 찍기
        // let scTop = $(this).scrollTop(); // -> 세로 스크롤 위치값을 리턴하는 메서드
        // 콘솔창에 위치값 찍어보기
        // Cl(scTop);
        // // 상태가 1이면 앨범이 열린상태이므로 스크롤 금지
        // if (alSts) {
        //     e.preventDefault();
        //     // 방향에 따라 이전,다음 전환

        //     // 광스크롤 막기
        //     if (tempSts) return;
        //     tempSts = 1;
        //     setTimeout(() => (tempSts = 0), 400);

        //     if (delta < 0) {
        //         $(".album")
        //             .filter(".on")
        //             .parent()
        //             .next()
        //             .trigger("click")
        //             .animate({});
        //     } else {
        //         $(".album").filter(".on").parent().prev().trigger("click");
        //     }
        // } else {
        // }

  
    }); /// 윈도우스크롤 ///
    ///////////// 메인 트랙 스크롤
}); // 메인 앨범 트랙 스크롤
