$(function(){
    //验证码更换
    $(".code").html(getcode(6));
    $('.change').on("click",function(){
        $(".code").html(getcode(6));
    });
    $('.code').on("click",function(){
        $(".code").html(getcode(6));
    })
})