
$(document).ready(function(){

    login_maintain();
    pc_check();
    safe_notice();
    input_focus();
    select_lang();
    random_img_load();
});


function login_maintain(){

    var toggle="off";

    $(".login_check").click(function(){
        
        if(toggle=="off")
        {
            toggle="on";

            $(".login_check>span").removeClass("login_on");
            $(".login_check>span").addClass("login_off");
            
        }
        else if(toggle=="on")
        {
            toggle="off";

            $(".login_check>span").removeClass("login_off");
            $(".login_check>span").addClass("login_on");
        }
    })

}

function pc_check(){
    
    var toggle="off";

    $(".pc_check").click(function(){
        
        if(toggle=="off")
        {
            toggle="on";

            $(".pc_check>span").removeClass("ip_on");
            $(".pc_check>span").addClass("ip_off");
            
        }
        else if(toggle=="on")
        {
            toggle="off";

            $(".pc_check>span").removeClass("ip_off");
            $(".pc_check>span").addClass("ip_on");
        }
    })

}

function safe_notice(){
    
    $(".safe_notice>img").click(function(){
        
        $(".safe_notice").hide();
        $(".tri").hide();

    })

}

function input_focus()
{
    $("#id").focus(function(){
        $(".id_area").css("border","1px solid #03C75A");
    });
    $("#id").blur(function(){
        $(".id_area").css("border","none");
    });

    $("#pw").focus(function(){
        $(".pw_area").css("border","1px solid #03C75A");
    });
    $("#pw").blur(function(){
        $(".pw_area").css("border","none");
    });
}

function select_lang()
{
    var text="";
    $("select").on("change",function(){
        //alert("변경!");
        text=$("select option:selected").val();
        //alert(text);

        if(text=="한국어")
        {
            $("#id").attr("placeholder","아이디");
            $("#pw").attr("placeholder","비밀번호");
            $(".login_check>label").text("로그인 상태 유지");
            $("#login").val("로그인");

            $(".pc_check").show();
        }
        else if(text=="English")
        {
            $("#id").attr("placeholder","Username");
            $("#pw").attr("placeholder","Password");
            $(".login_check>label").text("Stay Signed in");
            $("#login").val("Sign in");

            $(".pc_check").hide();
        }
        else if(text=="中文(简体)")
        {
            $("#id").attr("placeholder","帐号");
            $("#pw").attr("placeholder","密码");
            $(".login_check>label").text("维持登录状态");
            $("#login").val("登录");

            $(".pc_check").hide();
        }
        else if(text=="中文(台灣)")
        {
            $("#id").attr("placeholder","帳號");
            $("#pw").attr("placeholder","密碼");
            $(".login_check>label").text("登入");
            $("#login").val("維持登入狀態");

            $(".pc_check").hide();
        }

    });
}

function random_img_load()
{
    var choice= Math.ceil(Math.random()*3);

    if(choice==1)
    {
        $(".whale_wrap>img").attr("src","./images/whale.png");
    }
    else if(choice==2)
    {
        $(".whale_wrap>img").attr("src","./images/security_login.png");
    }
    else if(choice==3)
    {
        $(".whale_wrap>img").attr("src","./images/pay_point.png");
    }
}