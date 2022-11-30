// 상단 햅버거 버튼 모듈
function TopBtnHam_MODULE() {
    // 상단 햄버거 버튼 클릭시 애니메이션

    //버튼에 줄가있는거 x자 만들기
    $(this).toggleClass("on");

    // 박스 늘어남!
    $(".noise").toggleClass("on");
    $(".wrapp").toggleClass("on");
    $(".coralwrapp").toggleClass("on");
    $(".whitewrapp").toggleClass("on");

    $(".hamul").toggleClass("on");
}

export default TopBtnHam_MODULE;
