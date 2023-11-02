$(".gnb li").hover(
    function(){
        $(".sub",this).stop().slideDown(600);
    },
    function(){
        $(".sub",this).stop().slideUp(300);
    }
);

// $(".gnb li").click(
//     function(){
//         $(".sub").stop().slideUp();
//         $(".sub",this).stop().slideToggle();
//     }
// );