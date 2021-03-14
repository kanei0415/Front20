
let slideHeight=0;
let slideIndex=0;

$(document).ready(function(){

    init();
    menu();
    slide();
    tab();
    popup();
});

//슬라이드 관련 정보 초기화
function init()
{
    slideHeight=300;
    slideIndex=0;
}

//드랍다운 메뉴 관련
function menu()
{
    $(".gnb>li").hover(

        //mouseover시에 할 기능
        function(){
            $(".lnb").stop().slideDown(500);
        }
        ,
        //mouseout시에 할 기능
        function(){
            $(".lnb").stop().slideUp(500);
        }
    );
}

//슬라이드 실행
function slide()
{
    setInterval(slide_move,3000);
}

//setInterval에 장착시킬 함수
function slide_move()
{
    var newTop= -slideIndex*slideHeight;
    //0,-300,-600,0,-300,-600
    $("#slide_contents").animate(
        {top:newTop},400,"swing"
    );

    if(slideIndex==2){
        slideIndex=0;
    } else {
        slideIndex++;
        //0,1,2
    }
}

function tab(){

    $(".tab_btn>a").eq(0).click(function(){
    //탭버튼의 한단계 하위 앵커 태그 중 0번째를 클릭하면
        $(".tab_contents>div").eq(0).show();
        //탭컨텐츠의 한단계 하위 div중 0번째를 보여준다.
        $(".tab_contents>div").eq(1).hide();
        //탭컨텐츠의 한단계 하위 div중 1번째를 숨긴다.
    });
    //탭버튼의 한단계 하위 앵커 태그 중 1번째를 클릭하면
    $(".tab_btn>a").eq(1).click(function(){
        $(".tab_contents>div").eq(0).hide();
        //탭컨텐츠의 한단계 하위 div중 0번째를 숨긴다.
        $(".tab_contents>div").eq(1).show();
        //탭컨텐츠의 한단계 하위 div중 0번째를 보여준다.
    });
}

function popup()
{
    //공지사항 0번째 리스트 클릭하면
    $(".notice_list>li").eq(0).click(function(){
        $("#popup").show();//팝업창 전체 보여준다.
    });

    //팝업창 하위 클로즈 버튼 클릭하면
    $("#popup>#closeBtn").click(function(){
        $("#popup").hide();//팝업창 전체 숨긴다.
    });
}