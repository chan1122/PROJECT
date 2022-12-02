import albnum from "./DBconnect.js";
import {
  tfrxry1,
  tfrxry2,
  main_album_track_FOR50,
  hb,
  MTC,
  mtb,
  lpnum,
  moff,
  mon,
  GTASP,
  SUB_PMJ_album_track_For50,
  albumsub,
} from "./variable.js";
let GAG = JSON.parse(JSON.stringify(PMJjsonDATA));
//////////////////////////////////////////////////
// 함수 구역 -------------------------------------
//////////////////////////////////////////////////
let album;
let track;
function LoadFor() {
  for (let i = 0; i < 50; i++) {
    MTC.append(main_album_track_FOR50);
  }
  album = $(".album");
  track = $(".track");

  album.each((i1, e1) => {
    // 변수 셋팅
    let ei = track.eq(i1);
    let sns = ei.find("a");
    let gpais = GAG["PMJ" + albnum[i1]]["SNS주소"];
    // 인스타그램 아이콘
    sns.eq(0).attr("href", gpais[0]);
    // 유튜브 아이콘
    sns.eq(1).attr("href", gpais[1]);
    // 트위터 아이콘
    sns.eq(2).attr("href", gpais[3]);
    // 페이스북 아이콘
    sns.eq(3).attr("href", gpais[4]);

    ei.find(".AUDIO").attr(
      "src",
      "images/MUSIC/" +
        albnum[i1] +
        "." +
        GAG["PMJ" + albnum[i1]]["노래"] +
        ".mp3"
    );
    $(e1)
      .find("span")
      // 한번더 each
      .each((i2, e2) => {
        $(e2).css({
          background: `url(images/trackalbum/track${albnum[i1]}-span${
            i2 + 1
          }.jpg)no-repeat center/100% 100%`,
        });
      }); ////// each ///////
  }); /////// each ///////
} //////// LoadFor ///////////////////////////
//-------------------------------------------//
////// Widbb -- 상단 햄버거버튼 클릭 ///////////
function Widbb() {
  $(".noise").toggleClass("on");
  $(".wrapp").toggleClass("on");
  $(".coralwrapp").toggleClass("on");
  $(".whitewrapp").toggleClass("on");
  $(".hamul").toggleClass("on");
} ////// Widbb ////////////////////////////////
// ----------------------------------------//
///// 음소거 버튼 ----------------------//////
function MuteBtn() {
  mtb.toggleClass("on");
  //  클래스 on이있으면 음소거 해제
  if (mtb.hasClass("on")) {
    $(".AUDIO").prop("muted", false);
  } else {
    // 아니라면 음소거
    $(".AUDIO").prop("muted", true);
  }
}
/* *******[ 서브 페이지 함수 ]****** */
function PMJ_SUB_FOR_AL() {
  for (let i = 0; i < 50; i++) {
    GTASP.append(SUB_PMJ_album_track_For50);
  }
  // 이미지 뿌리기
  albumsub.each((i1, e1) => {
    // 음원 뿌리기
    $(i1)
      .find(".AUDIO")
      .attr(
        "src",
        "images/MUSIC/" +
          albnum[i1] +
          "." +
          GAG["PMJ" + albnum[i1]]["노래"] +
          ".mp3"
      );
    $(e1)
      .children("span")
      .each((i2, e2) => {
        $(e2).css({
          background: `url(images/trackalbum/track${albnum[i1]}-span${
            i2 + 1
          }.jpg)no-repeat center/100% 100%`,
        });
      }); ////// each
  }); /////// each ///////
}

export { LoadFor, Widbb, MuteBtn, PMJ_SUB_FOR_AL };
