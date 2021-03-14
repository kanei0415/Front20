
$(document).ready(function(){

    login_maintain();
    pc_check();
    safe_notice();
});


function login_maintain(){

    $(".login_check").click(function(){

        alert("로그인 상태 유지 클릭!");
    })

}

function pc_check(){
    
    $(".pc_check").click(function(){

        alert("IP보안 클릭!");
    })

}

function safe_notice(){
    
    $(".safe_notice>img").click(function(){

        alert("X버튼 클릭!");
    })

}