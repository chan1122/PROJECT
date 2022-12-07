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
    PT,
    ssm,
    tbt,
} from "./module/variable.js";
import { PMJ_SUB_FOR_AL, VALITest, Widbb } from "./module/FUNCTIONS.js";

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
        else if (Bid === IT) {
            if (!VALITest(Bb, Bid)) {
                $(this)
                    .siblings(".Requird-input")
                    .text("영문자로 시작하는 6~20글자 영문자/숫자")
                    .removeClass("on");
            } else {
                // 백엔드 -> 소스
                $.ajax({
                    url: "",
                    type: "",
                    data: {
                        IT: IT.val(),
                    },
                    dataType: "html",
                    async: false,
                    success: function (RES) {
                        RES = RES.trim();
                        Cl("결과: ", RES);
                        if (RES === "USERS YOUR SUCCES!") {
                            IT.siblings(".Requird-input")
                                .text("사용가능한 ID 입니다.")
                                .addClass("on");
                        } else if (RES === "YOU NOT CONNECTER!") {
                            IT.siblings(".Requird-input")
                                .text("존재하는 ID 입니다.")
                                .removeClass("on");
                        } else {
                            alert(
                                "개발중입니다 이용에 불편을 드려 죄송합니다. 자세한 것은 개발자에게 문의 바랍니다. 감사합니다"
                            );
                        } // else
                    }, /// AJAX
                    // 실패처리
                    error: function (xhr, status, error) {
                        alert("비동기터리 실패" + error);
                    }, // error
                });
            } /// else if
        } //else if : 아이디 유효성 검사
        /******************************************* 
        [ 5. 비밀번호일 경우 유효성 검사하기
            - 검사기준: 특수문자,문자,숫자포함 형태의 5~15자리 ]
        *******************************************/
        else if (Bid === PT) {
            console.log("검사결과: ", VALITest(Bb, Bid));

            if (!VALITest(Bb, Bid)) {
                $(this)
                    .siblings(".Requird-input")
                    .text("특수문자,문자,숫자포험 형태의 5~15자리");
            } else {
                $(this).siblings(".Requird-input").empty();
            } // else : 통과시
        } //// else if : 비밀번호 유효성 검사

        /******************************************* 
       [ 6. 비밀번호확인일 경우 유효성 검사하기
            - 검사기준: 입력된 비밀번호와 일치여부 ]
       *******************************************/
      else if(){};// else if : 비밀번호 확인 유효성 검사
    }); //// blur
}); /////// JQB
