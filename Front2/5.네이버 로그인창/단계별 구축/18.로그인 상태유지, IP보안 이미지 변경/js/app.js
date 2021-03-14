
$(document).ready(function(){

    login_maintain();
    pc_check();
    safe_notice();
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

        alert("X버튼 클릭!");
    })

}