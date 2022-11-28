// 링크 이동 js
$(()=>{

        // 변수선언
        let abtn = $(".abtn");

        /* 모든 a요소 기본 이동 막기  */
        abtn.click(function (e) {
            e.preventDefault();

            // a요소 버튼 클릭시 
            let atxt = $(this).text().trim();




            console.log("안뇽",atxt);
            alert("현제 공사중 입니다. / 게시판(일밤,회원) /앨범상세(서브페이지)  /안내문구,페이지소개 / 를 이용 가능하십니다! 이용에 불편을 드려 죄송합니다.")


            let url;

            /* 
                앨범 소개 = at
                앨범 상세 = ad
                인기 = pp
                게시판 = bd
                 // 자유 = mbd
                 // 회원 = ubd
                언어 = lang
            */
            switch(atxt){
                case "앨범소개": url= "at"; break;
                case "앨범 상세": url= "ad"; break;
                case "인기": url= "pp"; break;
                case "PMJ": url= "pmj"; break;
                case "BMJ": url= "bmj"; break;
                case "MMJ": url= "mmj"; break;
                case "게시판": url= "bd"; break;
                case "자유 게시판": url= "mbd"; break;
                case "회원전용 게시판": url= "ubd"; break;
                case "LANGUAGE": url= "lang"; break;
                case "EngliSh": url= "lang"; break;
                case "中國語": url= "lang"; break;
                case "日本語": url= "lang"; break;
                case "앨범소개♡": url= "at"; break;
                case "앨범 상세": url= "ad"; break;
                case "CHART♡": url= ""; break;
                case "PMJ(노래방인기!)": url= "pmj"; break;
                case "BMJ(빌보드!)": url= "bmj"; break;
                case "MMJ(일반 음원차트!)": url= "mmj"; break;
                case "게시판♡": url= ""; break;
                case "회원전용": url= ""; break;
                case "일반게시판": url= ""; break;
                case "기타세부사항♡": url= ""; break;
                case "안내문구": url= ""; break;
                case "페이지 소개글": url= ""; break;
            }

        });
    
})
