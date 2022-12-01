import { sm, slidegnb, topA, Cl, m2, hb, m3, palt } from "./module/variable.js";
// 마우스 휠 (스크롤이벤트 전용 페이지)
let port = 0;
$(() => {
    let lastSc = 0;

    $(window).scroll(function () {
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
        // 스테이지 맞추기
        // hb.animate(
        //   {
        //     scrollTop: $(this).offset().top + "px",
        //   },
        //   600
        // );
        ////////////////////////////
        // 스크롤 방향 알아내기
        if (port) return;
        port = 1;
        setTimeout(() => {
            port = 0;
        }, 1000);

        // 마지막 위치 없데이트 필수!
        // 스크롤 이동 위치 변수들!
        // 두번째 앨범 위치값!
        let mot = m2.offset().top; // 500
        // 앨범 집약 페이지
        let mot2 = m3.offset().top;
        // 하단플랫카
        let mot3 = palt.offset().top;
        Cl(mot, "2버째");
        Cl(mot2, "집약");
        Cl(mot3, "플랫");
        // 최상단으로 가게 하는 것!
        if (scTop <= mot && scTop <= lastSc) {
            hb.animate({ scrollTop: 0 }, 1000);
        }
        // // 두번째 앨범 으로 가게 함!
        else if (
            (lastSc >= scTop && scTop <= mot2) ||
            (lastSc <= scTop && scTop <= mot2)
        ) {
            hb.animate({ scrollTop: mot }, 1000);
        }
        // 앨범 집약 페이지로 가게 하는거
        else if (
            // 마우스 올릴때
            (lastSc >= scTop && scTop <= mot3 && scTop >= 0ㅜㅗㅠ ) ||
            // 마우스 내릴때
            (lastSc <= scTop && scTop <= mot3 && scTop >= 0)
        ) {
            hb.animate({ scrollTop: mot2 }, 1000);
        }
        // //하단 플랫 카드 부분으로 가게 하는
        // else if(){
        //   hb.animate({ scrollTop: mot3 }, 1000);
        // }
        Cl("TOP", scTop);
        Cl("LAST", lastSc);
        lastSc = scTop;
    }); /// 스크롤 ///
}); ///////  JQB  //////////
