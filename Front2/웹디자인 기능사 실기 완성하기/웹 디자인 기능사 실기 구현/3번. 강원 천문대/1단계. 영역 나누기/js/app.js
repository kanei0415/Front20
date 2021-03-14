let slideIndex=0;

$(document).ready(function(){
    menu();
    init();
    slide();
    tab();
})

function menu()
{
    let idx=0;

    $(".gnb>li").hover(

        //mouseover됬을때 실행할 기능
        function(){
            idx=$(this).index();
            //몇번째 li인지?
            //0,1,2,3
                                //find:지정한 하위요소 내부 탐색
            $(".gnb>li").eq(idx).find(".lnb").stop().slideDown(500);
            //.gnb>li중에서 idx번째 요소 내부의 .lnb를 찾아서
            //stop, slideDown
        }
        ,
        //mouseout됬을때 실행할 기능
        function(){
            $(".lnb").stop().slideUp(500);      
        }
    );  
}

function init()
{//초기셋팅
    //이미지 3개
    //0번째, 1번째, 2번째
    //0번째 빼고, 다 숨긴다.
    //0번째만 보여지게 해놓고
    //3초후...
    //0번째 사라지고... 1번째 나타나고 (fade방식으로)
    //1번째 사라지고... 2번째 나타나고
    //2번째 사라지고... 0번째 나타나고
    //0번째 사라지고... 1번째 나타나고
    //1번째 사라지고... 2번째 나타나고
    //2번째 사라지고... 0번째 나타나고
    //...
    for(let i=0; i<=2; i++)
    {
        $("#slide_contents>img").eq(i).hide();
    }
    $("#slide_contents>img").eq(0).show();
}

function slide()
{//setInterval이 들어갈 곳
    setInterval(slide_fade,3000);
}

function slide_fade()
{//3초 마다 실행될 함수

    $("#slide_contents>img").eq(slideIndex).fadeOut();
                             //0,1
    
    if(slideIndex==2)
    {
        $("#slide_contents>img").eq(0).fadeIn();
        slideIndex=0;
    }
    else //0,1
    {
        $("#slide_contents>img").eq(slideIndex+1).fadeIn();
        slideIndex++;
    }
}

function tab()
{
    $(".tab_btn>a").eq(0).click(function(){
        $(".tab_contents>div").eq(0).show();
        $(".tab_contents>div").eq(1).hide();

        if( $(".tab_btn>a").eq(0).hasClass("active")==true )
        {

        }
        else
        {
            $(".tab_btn>a").eq(0).addClass("active");
           
        }
        $(".tab_btn>a").eq(1).removeClass("active");
    });

    $(".tab_btn>a").eq(1).click(function(){
        $(".tab_contents>div").eq(1).show();
        $(".tab_contents>div").eq(0).hide();

        if( $(".tab_btn>a").eq(1).hasClass("active")==true )
        {
    
        }
        else
        {
            $(".tab_btn>a").eq(1).addClass("active");
        }
        $(".tab_btn>a").eq(0).removeClass("active");
    });
}