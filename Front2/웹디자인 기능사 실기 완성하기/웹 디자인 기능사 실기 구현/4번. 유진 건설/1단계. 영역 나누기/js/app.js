var slideIndex=0;

$(document).ready(function(){
    menu();
    init();
    slide();
    popup();
});

function menu()
{
    $(".gnb>li").hover(
    
    //mouseover됬을때 실행될 기능
    function()
    {
        $(".lnb").stop().slideDown(500);
        $(".left_bg").stop().slideDown(500);
        $(".right_bg").stop().slideDown(500);
    }
    ,
    //mouseout됬을때 실행될 기능
    function()
    {
        $(".lnb").stop().slideUp(500);
        $(".left_bg").stop().slideUp(500);
        $(".right_bg").stop().slideUp(500);
    }
    )
}

function init()
{
    slideIndex=0;
    
    for(var i=0; i<=2; i++)
    {
        $("#slide_contents>img").eq(i).hide();      
    }
    $("#slide_contents>img").eq(0).show();   
}


//setInterval 실행
function slide()
{
    setInterval(slide_fade,3000);
}

//setInterval이 3초마다 실행할 함수
function slide_fade()
{
    $("#slide_contents>img").eq(slideIndex).fadeOut();
    
    if(slideIndex==2)
    {
        $("#slide_contents>img").eq(0).fadeIn();
        slideIndex=0;
    }
    else
    {
        $("#slide_contents>img").eq(slideIndex+1).fadeIn();
        slideIndex++;
    }  
}

function popup()
{
    $(".notice_list>li").eq(0).click(function(){
        $("#popup").show();
    });
    
    
    $("#popup>#closeBtn").click(function(){
       $("#popup").hide(); 
    }); 
}


