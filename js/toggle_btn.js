$(function(){
    $(".menu_toggle_btn").click(function(){
        $(".gmb").stop().slideToggle("fast")
    })


    $(".search_select_box span").hover(function(){
        $(".search_select_list").stop().slideDown();
        //$(this).next().stop().slideDown();
    },function(){
        $(".search_select_list").stop().slideUp();
         //$(this).next().stop().slideUp();
    })


})//jQ end