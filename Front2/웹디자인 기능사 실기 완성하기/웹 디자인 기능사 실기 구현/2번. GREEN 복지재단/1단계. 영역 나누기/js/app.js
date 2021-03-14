let slideWidth=0;
let slideIndex=0;

$(document).ready(function(){
    init();
    menu();
    slide();
    popup();
});

function init()
{
    slideWidth=1200;
    slideIndex=0;
}

function menu()
{
    $(".gnb>li").hover(
        //mouseover시에 할 기능
        function(){
            $(".lnb").stop().slideDown(500);
            $(".left_bg").stop().slideDown(500);
            $(".right_bg").stop().slideDown(500);
        },
        //mouseout시에 할 기능
        function(){
            $(".lnb").stop().slideUp(500);
            $(".left_bg").stop().slideUp(500);
            $(".right_bg").stop().slideUp(500);
        }
    );
}

function slide()
{
    setInterval(slide_move,3000);
}

function slide_move()
{
    var newLeft= -slideIndex*slideWidth;
    //0,-1200, -2400, 0, -1200, -2400
    $("#slide_contents").animate(
        {left:newLeft},400,"swing"
    );

    if(slideIndex==2){
        slideIndex=0;
    } else {
        slideIndex++;
        //0,1,2
    }
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
