
$(document).ready(function(){

    login_maintain();
    pc_check();
    safe_notice();
    input_focus();
    select_lang();
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
        alert("변경!");
        text=$("select option:selected").val();
        alert(text);
    });
}