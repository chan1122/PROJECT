// 음원사이트 메인 페이지 자바스크립트
// 로딩하기
// 변수!!
let album = $(".album");
let AUDIO = $(".AUDIO");
let track = $(".track");
//제이쿼리 로딩구역
$(() => {
  // 메인 트랙 커버박스 클릭 이벤트 //
  $(".mtrackcoverinng").click(function () {
    $(this).animate({
      height: "700px",
      overflow: "hidden",
    });
    $(".mtrack", this)
      .css({ animationPlayState: "paused" })
      .hide(10, function () {
        $(this)
          .css({
            transform: " translate(-50%, -50%) rotateX(90deg) rotateY(0deg)",
            // animation: "running",
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
      .css({ height: "0" }, 800)
      .find(".mtrack")
      .css({
        transform: "translate(-50%, -50%) rotateX(90deg) rotateY(0deg)",
      }).toggle;

    $(".track").each((idx, ele) => {
      $(ele).find(".AUDIO").get(0).pause();
    });

    let iam = $(this).find(".AUDIO").get(0);

    iam.currentTime = 0;

    iam.play();

    // $(this).find("AUDIO").addClass("on");

    // if ($(this).find("AUDIO").hasClass("on")) {
    //   // 시작 // 내가 찍은것에 클래스on이 있다면
    //   // 실행해라
    //   $(this).find("AUDIO").get(0).play();
    // }
    // // 멈춰
    // $(this).siblings().find("AUDIO").removeClass("on");
    // $(this).siblings().find("AUDIO").get(0).pause();

    // 스테이지 맞추기
    $("html,body").animate(
      {
        scrollTop: $(this).offset().top + "px",
      },
      600
    );
  }); // 메인 트랙 커버박스 클릭 이벤트 //

  // 제이쿼리 전용
  // each((순번,자신)=>{})

  // DB연동용 순번 배열 (앨범 이미지 배열임)
  let albnum = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
  ];

  album.each((i1, e1) => {
    // 변수 셋팅

    let sns = $(".track").eq(i1).find("a");

    // 인스타그램 아이콘
    sns.eq(0).attr("href", GAG["PMJ" + albnum[i1]]["SNS주소"][0]);
    // 유튜브 아이콘
    sns.eq(1).attr("href", GAG["PMJ" + albnum[i1]]["SNS주소"][1]);
    // 트위터 아이콘
    sns.eq(2).attr("href", GAG["PMJ" + albnum[i1]]["SNS주소"][3]);
    // 페이스북 아이콘
    sns.eq(3).attr("href", GAG["PMJ" + albnum[i1]]["SNS주소"][4]);

    $(".track")
      .eq(i1)
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

  // track each
  $(track.get().reverse()).each(function (ti, te) {
    $(this).css({ zIndex: ti });
  });

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

    $(".hamul").toggleClass("on");
  }); // 상단 햄버거 버튼 클릭시 이벤트 //
  // console.log("순번:",a)

  // $(".mtrack").children().find("span:nth-child(1)").css({
  //   background:`url(../images/trackalbum/track${tr}-span${sp}.jpg)no-repeat center/100% 100%`
  // })

  // 상단 첫번쨰 MPP호버시 늘어나는 애니
  $(".mostpopular").hover(
    function () {
      // over
      let myw = $(">div>span", this);
      myw.each((idx, ele) => {
        $(ele)
          .parent() // 부모div
          .css({
            width: $(ele).width() + "px",
            paddingRight: ".9vw",
          });
      });
    },
    function () {
      // out
      $($(">div", this)).css({
        width: "0",
        paddingRight: "0",
      });
    }
  );
  /* ******************************* */
  // 상단 GNB A요소 호버시 슬라이드 다운효과
  $(".ssm").css({
    width: "99.6vw",
    background: "#000",
    left: "0",
  });
  $(".gnb > ul > li").hover(
    function () {
      //오버시
      $(this).children("ul").stop().slideDown();

      $(".gnb >ul>li>a").css({
        color: "black",
        transition: ".5s",
        fontweight: "bold",
      });
      $(".nav").css({ background: "#fff", transition: ".2s" });
    },
    function () {
      //아웃시
      $(this).children("ul").stop().slideUp();
      $(".gnb >ul>li>a").css({
        color: "#fff",
        transition: ".5s",
        fontweight: "bold",
      });
      $(".nav").css({ background: "#000", transition: ".2s" });
    }
  );

  // 햄버거 버튼 마우스 오버 아웃 시
  $(".hamul li").hover(
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

  let lpnum = 0;
  // 음소거 버튼 클릭시 뮤트시키기
  $(".mutedbtn").click(function () {
    const tca = $(this).children("a");
    // 레프트값 증가 변수
    if (lpnum === -1) {
      lpnum ++;
      setTimeout(() => {
        
        tca.css({ left: "0%" }).parent(".mutedbtn").delay(1000).animate(
          {
            backgroundColor: "gray",
          },
          100
        );
      });
      $(".muteoff").css({opacity:"1"});
      $(".muteon").css({opacity:"0"})
      return;
    }
    if (lpnum === 0) {
      $(".muteoff").css({opacity:"0"});
      $(".muteon").css({opacity:"1"})
      tca.css({ left: "67%" }).parent(".mutedbtn").delay(1000).animate(
        {
          backgroundColor: "white",
        },
        100
      );
      lpnum--;
      return;
    } // else

    // console.log(lpnum);
  }); // 음소거 버튼 클릭시 뮤트시키기
  // 함수구역 음소거 버튼 %증가 하게 만들기




}); //제이쿼리 로딩구역/////////////////////////

// 배열 객체 들!@!
let GAG = {
  PMJ1: {
    // 1 . 주호 내가 아니라도
    노래: `내가아니라도-주호`,
    SNS주소: [
      `https://www.instagram.com/livejuho/`,
      `https://www.youtube.com/channel/UCIwgZjfWN6-DO0Bi6NIkyjQ`,
    ],
  },
  PMJ2: {
    // 2 . 모놀로그-버즈
    노래: `모놀로그-버즈`,
    SNS주소: [``, ``],
  },
  PMJ3: {
    //  . 3.좋니-윤종신
    노래: `좋니-윤종신`,
    SNS주소: [``, ``],
  },
  PMJ4: {
    //  . 4.어디에도-MCTHEMAX
    노래: `어디에도-MCTHEMAX`,
    SNS주소: [``, ``],
  },
  PMJ5: {
    //  . 5.사랑은늘도망가-임영웅
    노래: `사랑은늘도망가-임영웅`,
    SNS주소: [``, ``],
  },
  PMJ6: {
    //  . 6.해요-안녕
    노래: `해요-안녕`,
    SNS주소: [``, ``],
  },
  PMJ7: {
    //  . 7.소주한잔-임창정
    노래: `소주한잔-임창정`,
    SNS주소: [``, ``],
  },
  PMJ8: {
    //  . 8.응급실-izi
    노래: `응급실-izi`,
    SNS주소: [``, ``],
  },
  PMJ9: {
    //  . 9.취중고백-멜로망스
    노래: `취중고백-멜로망스`,
    SNS주소: [``, ``],
  },
  PMJ10: {
    //  . 10.TEARS-소찬휘
    노래: `TEARS-소찬휘`,
    SNS주소: [``, ``],
  },
  PMJ11: {
    //  . 11.가시-버즈
    노래: `가시-버즈`,
    SNS주소: [``, ``],
  },
  PMJ12: {
    //  . 12.호랑수월가-탑현
    노래: `호랑수월가-탑현`,
    SNS주소: [``, ``],
  },
  PMJ13: {
    //  . 13.첫눈처럼너에게 가겟다-에일리
    노래: `첫눈처럼너에게 가겟다-에일리`,
    SNS주소: [``, ``],
  },
  PMJ14: {
    //  . 14.포장마차-황인욱
    노래: `포장마차-황인욱`,
    SNS주소: [``, ``],
  },
  PMJ15: {
    //  . 15.이미슬픈사랑-YADA
    노래: `이미슬픈사랑-YADA`,
    SNS주소: [``, ``],
  },
  PMJ16: {
    //  . 16.너의 모든 순간 - 성시경
    노래: `너의 모든 순간 - 성시경`,
    SNS주소: [``, ``],
  },
  PMJ17: {
    //  . 17.After LIKE-아이브
    노래: `After LIKE-아이브`,
    SNS주소: [``, ``],
  },
  PMJ18: {
    //  . 18.loveDive-ive
    노래: `loveDive-ive`,
    SNS주소: [``, ``],
  },
  PMJ19: {
    //  . 19.삭제-이승기
    노래: `삭제-이승기`,
    SNS주소: [``, ``],
  },
  PMJ20: {
    //  . 20.모든날모든순간-폴킴
    노래: `모든날모든순간-폴킴`,
    SNS주소: [``, ``],
  },
  PMJ21: {
    //  . 21.스물다섯스물여섯
    노래: `스물다섯스물여섯`,
    SNS주소: [``, ``],
  },
  PMJ22: {
    //  . 22.체념-빅마마
    노래: `체념-빅마마`,
    SNS주소: [``, ``],
  },
  PMJ23: {
    //  . 23.가을타나봐-바이브
    노래: `가을타나봐-바이브`,
    SNS주소: [``, ``],
  },
  PMJ24: {
    //  . 24.안동역에서-진성
    노래: `안동역에서-진성`,
    SNS주소: [``, ``],
  },
  PMJ25: {
    //  . 25.marryme-마크툽
    노래: `marryme-마크툽`,
    SNS주소: [``, ``],
  },
  PMJ26: {
    //  . 26.술한잔해요-지아
    노래: `술한잔해요-지아`,
    SNS주소: [``, ``],
  },
  PMJ27: {
    //  . 27.보릿고개-진성
    노래: `보릿고개-진성`,
    SNS주소: [``, ``],
  },
  PMJ28: {
    //  . 28.그라데이션-10cm
    노래: `그라데이션-10cm`,
    SNS주소: [``, ``],
  },
  PMJ29: {
    //  . 29.가질수없는너--뱅크
    노래: `가질수없는너--뱅크`,
    SNS주소: [``, ``],
  },
  PMJ30: {
    //  . 30.HYPE BOY-뉴진스
    노래: `HYPE BOY-뉴진스`,
    SNS주소: [``, ``],
  },
  PMJ31: {
    //  . 31.바보에게바보가
    노래: `바보에게바보가`,
    SNS주소: [``, ``],
  },
  PMJ32: {
    //  . 32.신호등-이무진
    노래: `신호등-이무진`,
    SNS주소: [``, ``],
  },
  PMJ33: {
    //  . 33.같은베게-테이
    노래: `같은베게-테이`,
    SNS주소: [``, ``],
  },
  PMJ34: {
    //  . 34.초혼-장윤정
    노래: `초혼-장윤정`,
    SNS주소: [``, ``],
  },
  PMJ35: {
    //  . 35.비와당신-이무진
    노래: `비와당신-이무진`,
    SNS주소: [``, ``],
  },
  PMJ36: {
    //  . 36.모래시계-안재욱
    노래: `모래시계-안재욱`,
    SNS주소: [``, ``],
  },
  PMJ37: {
    //  . 37.추억은 만남보다 이별에 남아 -정동훈
    노래: `추억은 만남보다 이별에 남아 -정동훈`,
    SNS주소: [``, ``],
  },
  PMJ38: {
    //  . 38.너의번호를 누르고-안녕
    노래: `너의번호를 누르고-안녕`,
    SNS주소: [``, ``],
  },
  PMJ39: {
    //  . 39.다시 사랑한다면-니글니글 버터플라이
    노래: `다시 사랑한다면-니글니글 버터플라이`,
    SNS주소: [``, ``],
  },
  PMJ40: {
    //  . 40.노라조 - 형 (兄)
    노래: `노라조 - 형 (兄)`,
    SNS주소: [``, ``],
  },
  PMJ41: {
    //  . 41.애인있어요 이은미
    노래: `애인있어요 이은미`,
    SNS주소: [``, ``],
  },
  PMJ42: {
    //  . 42.나에게로의 초대-이상한 나라의 앨리스
    노래: `나에게로의 초대-이상한 나라의 앨리스`,
    SNS주소: [``, ``],
  },
  PMJ43: {
    //  . 43.꿈속에너-H코드
    노래: `꿈속에너-H코드`,
    SNS주소: [``, ``],
  },
  PMJ44: {
    //  . 44.사랑인가봐-멜로망스
    노래: `사랑인가봐-멜로망스`,
    SNS주소: [``, ``],
  },
  PMJ45: {
    //  . 45.천년의사랑-박완규
    노래: `천년의사랑-박완규`,
    SNS주소: [``, ``],
  },
  PMJ46: {
    //  .46.스토커-10cm
    노래: `스토커-10cm`,
    SNS주소: [``, ``],
  },
  PMJ47: {
    //  . 47.어쩌다마주친그대-송골매
    노래: `어쩌다마주친그대-송골매`,
    SNS주소: [``, ``],
  },
  PMJ48: {
    //  . 48.인연-이선희
    노래: `인연-이선희`,
    SNS주소: [``, ``],
  },
  PMJ49: {
    //  . 49.가을안부-먼데이키즈
    노래: `가을안부-먼데이키즈`,
    SNS주소: [``, ``],
  },
  PMJ50: {
    //  . 50.미운사랑 - 진미령
    노래: `미운사랑 - 진미령`,
    SNS주소: [``, ``],
  },
};

console.log(GAG);
