import albnum from "./DBconnect.js";
let GAG = JSON.parse(JSON.stringify(PMJjsonDATA));
// JQB밖 변수
let tfrxry1 = " translate(-50%, -50%) rotateX(90deg) rotateY(0deg)";
// 세워지는
let tfrxry2 = "translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotate(0)";
// 메인 페이지 앨범 객체
let main_album_track_FOR50 = `
<div class="mtt1 track mtrackcoverinng">
    <audio src="#" class="AUDIO" muted></audio>
    <div class="ttrack album mtrack">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    </div>`;
// 서브 페이지 앨범 객체
let SUB_album_track_FOR = `<div class="swiper-slide albumsub tracksub">
<audio src="" class="AUDIO"></audio>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
<span></span>
</div>`;
// HTML BODY
const hb = $("html,boby");
let m2 = $(".main2");
let m3 = $(".main3");
// 앨범 커버 박스 부모의 부모격
const MTC = $(".maintrackcover");
// gnb요소
const slidegnb = $(".slidegnb");
const Gul = $(".gnb > ul > li");
const GuIA = Gul.children("a");
const navC = $(".nav");
// gnb하위요소
let ssm = $(".ssm");
const sm = $(".sm");
// 음소거 관련
let moff = $(".muteoff");
let mon = $(".muteon");
const mtb = $(".mutedbtn");
// 상단 헤더 영역
const topA = $(".tbox1");
// 햄버거 버튼 관련
const Hamli = $(".hamul li");
/*********************************** 
  [JQB안쪽 변수] 
***********************************/
// 기타 변수들
let palt = $(".wrap3dplat");
/* *******스크롤 액션 변수******** */
// 일반변수
let lpnum = 0;
const Cl = console.log;





/* [ 서브 페이지 전용 변수들 ] */
let subAl = $(".SUB-ambum-temple-50");

// 추가된변수

export {
    tfrxry1,
    tfrxry2,
    main_album_track_FOR50,
    SUB_album_track_FOR,
    hb,
    MTC,
    ssm,
    lpnum,
    moff,
    mon,
    mtb,
    sm,
    slidegnb,
    topA,
    Cl,
    Gul,
    GuIA,
    navC,
    Hamli,
    m2,
    m3,
    palt,
    subAl,
  GAG,

};
