import albnum from "./DBconnect.js";
let GAG = JSON.parse(JSON.stringify(PMJjsonDATA));

// JQB밖 변수!
let tfrxry1 = " translate(-50%, -50%) rotateX(90deg) rotateY(0deg)";
// 세워지는
let tfrxry2 = "translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotate(0)";

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
const hb = $("html,boby");
const MTC = $(".maintrackcover");
let ssm = $(".ssm");
let moff = $(".muteoff");
let mon = $(".muteon");

const mtb = $(".mutedbtn");
const sm = $(".sm");
const slidegnb = $(".slidegnb");
const topA = $(".tbox1");
const Cl = console.log;
/*********************************** 
  [JQB안쪽 변수] 
***********************************/


let lpnum = 0;
// 추가된변수

export {
  tfrxry1,
  tfrxry2,
  main_album_track_FOR50,
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
};
