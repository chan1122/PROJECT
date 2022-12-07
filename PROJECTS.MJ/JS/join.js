// PMJSUB PJ
import {
    Cl,
    GuIA,
    Gul,
    Hamli,
    inputTESP,
    IT,
    NAME,
    navC,
    ssm,
    tbt,
} from "./module/variable.js";
import { PMJ_SUB_FOR_AL, Widbb } from "./module/FUNCTIONS.js";

PMJ_SUB_FOR_AL();
// import {albnum} from `./main`;
$(() => {
    tbt.click(function () {
        //버튼에 줄가있는거 x자 만들기
        $(this).toggleClass("on");
        Widbb();
    }); // 상단 햄버거 버튼 클릭시 이벤트 //
    // 상단 GNB A요소 호버시 슬라이드 다운효과
    ssm.css({
        width: "99.6vw",
        background: "#000",
        left: "0",
    });
    Gul.hover(
        function () {
            //오버시
            $(this).children("ul").stop().slideDown();

            GuIA.css({
                color: "black",
                transition: ".5s",
                fontweight: "bold",
            });
            navC.css({ background: "#fff", transition: ".2s" });
        },
        function () {
            //아웃시
            $(this).children("ul").stop().slideUp();
            GuIA.css({
                color: "#fff",
                transition: ".5s",
                fontweight: "bold",
            });
            navC.css({ background: "#000", transition: ".2s" });
        }
    );

    // 햄버거 버튼 마우스 오버 아웃 시
    Hamli.hover(
        function () {
            const tfs = $(this).find(".sham");
            // 마우스 오버시
            tfs.stop().slideDown();

            $(this)
                .children(".hambtnbiga")
                .css({ backgroundColor: "white", color: "black" });

            // 햄버거 버튼 하위 ul li a 호버시 배경색 글자색 반전 -> 만들기!
        },
        function () {
            // 마우스 아웃시
            const tfs = $(this).find(".sham");
            tfs.stop().slideUp();

            $(this)
                .children(".hambtnbiga")
                .css({ backgroundColor: "black", color: "white" });

            // 햄버거 버튼 하위 ul li a 호버시 배경색 글자색 반전 -> 만들기!
        }
    );

    /****************************************** 
    [ 유효성 검사 AREA ]
  ******************************************/
    inputTESP.blur(function () {
        // 전체 공백 제거 함수
        const GroSpacE = (GE) => {
            GE.replace(/\s/g, "");
        };

        // 변수 + 기능 1
        // 1. 방금 블러가 발생한 요소의 ID
        let Bid = $(this).attr("id");
        // 변수 + 기능 2
        // 2. 블러가 발생한 요소의 입력값3
        let Bb;

        // 블러된 요소들에대한 조건 ->
        // 1. 블러된 요소가 이름일때 앞뒤공백만제거
        if (Bid === NAME) Bb = $(this).val().trim();
        // 2. 블러된 요소가 기타일때 모든 공백 제거
        else Bb = GroSpacE($(this).val());

        // * 공백 강제 제거시킨것을 화면에 반영하기
        $(this).val(Bb);

        // 블러가 확실하게 반영되는지 확인해보기
        Cl("블러발생!", Bid, " / ", Bb);

        /********************************** 
          [ 3. 빈값 여부 체크하기 ]
        **********************************/
        if (Bb === "") {
            $(this).siblings(".Requird-input").text("⛔필수입력");
        } // if : 빈값 체크 

        /********************************** 
          [ 4. 아이디일 경우 유효성 검사 ]
        **********************************/
       else if (Bid === IT){
        if()
       };//else if : 아이디 유효성 검사 
    }); //// blur
}); /////// JQB
