            
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

        var id_val='';
        var pw_val='';
        var stay='';
        var login_text='';
        var easier_sign='';
        var mode='';

        if(text=="한국어")
        {
            id_val='아이디';
            pw_val='비밀번호';
            stay='로그인 상태 유지';
            login_text='로그인';
            easier_sign='더욱 간편한 로그인';
            mode="korea";
            $(".pc_check").show();
            $(".button_area").show();
        }
        else if(text=="English")
        {
            id_val='Username';
            pw_val='Password';
            stay='Stay Signed in';
            login_text='Sign in';
            easier_sign='Easier sign in';
            mode="english";

            $(".pc_check").hide();
            $(".button_area").hide();
        }
        else if(text=="中文(简体)")
        {
            id_val='帐号';
            pw_val='密码';
            stay='维持登录状态';
            login_text='登录';
            easier_sign='Easier sign in';
            mode="china1";

            $(".pc_check").hide();
            $(".button_area").hide();
        }
        else if(text=="中文(台灣)")
        {
            id_val='帳號';
            pw_val='密碼';
            stay='登入';
            login_text='維持登入狀態';
            easier_sign='Easier sign in';
            mode="china2";

            $(".pc_check").hide();
            $(".button_area").hide();
        }

        $("#id").attr("placeholder",id_val);
        $("#pw").attr("placeholder",pw_val);
        $(".login_check>label").text(stay);
        $("#login").val(login_text);
        $(".more_easy>h1").text(easier_sign).css(
            {"font-weight":"bold",
             "font-size":"20px"}
        );
        tab(mode);
        id_pass_sign_change(mode);
        footer_upper_hide(mode);
    });
}

function tab(mode)
{
    if(mode=='korea')
    {
        $(".other_country").hide();
        $(".whale_wrap").show();
        $(".more_easy").css("height","138px");
        $(".safe_notice").css("left","-100px");
        $(".safe_notice>span").text("PC방 등 공용 PC라면 안전하게 사용해 보세요.");
        
    }
    else
    {
        $(".other_country").show();
        $(".whale_wrap").hide();
        $(".more_easy").css("height","68px");
        $(".safe_notice").css("left","20px");
        $(".safe_notice>span").text("If this PC is used by multiple people, try it");
    }
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

function id_pass_sign_change(mode)
{
    var fist_li_1=".info>ul>li:first-child>span:first-child";
    var fist_li_2=".info>ul>li:first-child>a>span";
    var fist_li_3=".info>ul>li:first-child>span:nth-child(3)";
    
    var second_li=".info>ul>li:nth-child(2)>a>span:first-child";
    var third_li=".info>ul>li:nth-child(3)>a>span:first-child";

    var ul_li_a=".info>ul>li>a";

    if(mode=='korea')
    {
        $(fist_li_1).text("");
        $(fist_li_2).text("아이디찾기");
        $(fist_li_3).text("");
        $(fist_li_3).addClass("bar");
        $(second_li).text("비밀번호 찾기");
        $(third_li).text("회원가입");
        $(ul_li_a).css("text-decoration","none");
    }
    else
    {
        $(fist_li_1).text("Forgot your ");
        $(fist_li_2).text("Username");
        $(fist_li_3).removeClass("bar");
        $(fist_li_3).text(" or");
        $(second_li).text("Password");
        $(third_li).text("Sign up");
        $(ul_li_a).css("text-decoration","underline");
        $(".info>ul").css("width","350px");
    }
}

function footer_upper_hide(mode)
{
    if(mode=='korea')
    {
        $("footer>ul").show();
        $("footer").css("top","630px");
    }
    else
    {
        $("footer>ul").hide();
        $("footer").css("top","600px");
    }
}