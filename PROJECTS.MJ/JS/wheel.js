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

        let tempSts = 1; // 광스크롤 막기

        // // 상태가 1이면 앨범이 열린상태이므로 스크롤 금지
        if (alSts) {
            e.preventDefault();
            // 방향에 따라 이전,다음 전환

            // 광스크롤 막기
            if (tempSts === 0) return;
            {
                tempSts = 0;
                setTimeout(() => (tempSts = 1), 1000);
            }

            if (delta < 0) {
                $(".album").filter(".on").parent().next().trigger("click");
            } else {
                $(".album").filter(".on").parent().prev().trigger("click");
            }
        } else {
        }
        lastSc = scTop;
    }); /// 윈도우스크롤 ///
}); // 메인 앨범 트랙 스크롤
