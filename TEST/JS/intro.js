const cc = $(".cube_cover");
const ct = $(".cube_templet");
const wp = $(".wrapp");
const aT = $(".ani_turn");
let forisappend = `<div class="cube_templet"></div>`;

const cube_templet_for = () => {
  for (let i = 0; i < 6; i++) {
    cc.append(forisappend);
  }
};

cube_templet_for();

wp.click(function () {
  $(this).toggleClass("on");
  aT.toggleClass("on");
});
