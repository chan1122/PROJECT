const FW1 = $(".FW1");
const fontW1 = $(".fontW1");
const fontW2 = $(".fontW2");
const fontW3 = $(".fontW3");
const fontW4 = $(".fontW4");
const InPUT_TexT = $("#text_for_input");
const selF = $("#sellectfont");
$(() => {
  FW1.click(function () {
    $(this).addClass("on").siblings().removeClass("on");
    // if문 으로 클래스 지정하기
    if (fontW1.hasClass("on")) {
      InPUT_TexT.css({ fontStyle: "inherit" });
    } else if (fontW2.hasClass("on")) {
      InPUT_TexT.css({ fontStyle: "unset" });
    } else if (fontW3.hasClass("on")) {
      InPUT_TexT.css({ fontStyle: "oblique" });
    }
  });
  $(".FF1").click(function (ele) {
    $(this).toggleClass("on");
    InPUT_TexT.toggleClass("fwb");
  });

  selF.change(function () {
    selFONT_style(this);
  });
});

function selFONT_style(ele) {
  let tT = $(ele).val();

  switch (tT) {
    case "nurse":
      tT = "none";
      break;
    case "Barlow Condensed":
      tT = "Barlow Condensed, sans-serif";
      break;
    case "Black Han Sans":
      tT = "Black Han Sans, sans-serif";
      break;
    case "Cairo":
      tT = "Cairo, sans-serif";
      break;
    case "Cute":
      tT = "Cute Font, cursive";
      break;
    case "Gugi":
      tT = "Gugi, cursive";
      break;
    case "Jua":
      tT = "Jua, sans-serif";
      break;
    case "Klee One":
      tT = "Klee One, cursive";
      break;
    case "Kolker Brush":
      tT = "Kolker Brush, cursive";
      break;
    case "Nanum Brush Script":
      tT = "Nanum Brush Script, cursive";
      break;
    case "Single Day":
      tT = "Single Day, cursive";
      break;
    case "Xanh Mono":
      tT = "Xanh Mono, monospace;";
      break;
    case "Yeon Sung":
      tT = "Yeon Sung, cursive";
      break;
    case "Zen Dots":
      tT = "Zen Dots, cursive";
      break;
  } /// switch
  InPUT_TexT.css({ fontFamily: tT });
  console.log("바뀐당!", tT);
}
