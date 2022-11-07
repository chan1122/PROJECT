// 음원사이트 메인 페이지 자바스크립트

// 로딩하기
//제이쿼리 로딩구역
$(() => {
  /////////////////////////////////////////////

  /////////////////////////////////////////////

  // 메인 트랙 커버박스 클릭 이벤트 //
  $(".mtrackcoverinng").click(function () {
    $(this).animate({
      height: "700px",
      overflow: "hidden",
    });

    $(".mtrack", this)
      .css({ animation: "paused" })
      .hide(10, function () {
        $(this)
          .css({
            transform: " translate(-50%, -50%) rotateX(90deg) rotateY(0deg)",
            animation: "running",
          })
          .delay(100)
          .show(10, function () {
            $(this).css({
              transform:
                "translate(-50%, -50%) rotateX(0deg) rotateY(0deg) rotate(0)",
            }); // 등장!
          });
      }) // 사라진후 이어서!

      .parent()
      .siblings()
      .animate({ height: "0" }, 800)
      .find(".mtrack")
      .attr("style", "");
    // .css({
    //   transform: " translate(-50%, -50%) rotateX(0deg) rotateY(0deg)",

    // })

    // 메인 트랙
  }); // 메인 트랙 커버박스 클릭 이벤트 //

  let album = $(".album");

  // 제이쿼리 전용
  // each((순번,자신)=>{})

  album.each((i1, e1) => {
    $(e1)
      .find("span")
      .each((i2, e2) => {
        $(e2).css({
          background: `url(images/trackalbum/track${i1 - 1}-span${
            i2 + 1
          }.jpg)no-repeat center/100% 100%`,
        });
      }); ////// each ///////
  }); /////// each ///////

  let ttracks = $(".ttrack");

  ttracks.each(function (t1, r1) {
    $(r1).each((t2, r2) => {
      $(r2).css({
        animationDuration: `${20 + t1 / 3}s`,
      });
    });
  });
  ttracks.click(function () {
    $(this).each(function (t1, r1) {
      $(r1).each((t2, r2) => {
        $(r2).css({
          animationDuration: `${20 + t1 / 1}s`,
        });
      });
    });
  });

  // 상단 햄버거 버튼 클릭시 애니메이션
  $(".topbtn").click(function () {
    //버튼에 줄가있는거 x자 만들기
    $(this).toggleClass("on");

    // 박스 늘어남!
    $(".noise").toggleClass("on");
    $(".wrapp").toggleClass("on");
    $(".coralwrapp").toggleClass("on");
    $(".whitewrapp").toggleClass("on");
  }); // 상단 햄버거 버튼 클릭시 이벤트 //
  // console.log("순번:",a)

  // $(".mtrack").children().find("span:nth-child(1)").css({
  //   background:`url(../images/trackalbum/track${tr}-span${sp}.jpg)no-repeat center/100% 100%`
  // })

  $(".mostpopular").hover(
    function () {
      // over
      let myw = $(">div>span", this);
      myw.each((idx, ele) => {
        $(ele)
          .parent() // 부모div
          .css({
            width: $(ele).width() + "px",
            paddingRight: ".8vw",
          });
      });
    },
    function () {
      // out
      $($(">div", this))
      .css({ 
        width: "0" ,
        paddingRight: "0",
      });
    }
  );
}); //제이쿼리 로딩구역/////////////////////////
