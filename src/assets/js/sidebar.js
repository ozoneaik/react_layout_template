import $ from "jquery";

$(".menu > ul > li").click(function (e){
    // remove active from already active
    $(this).sibling().removeClass('active')
    // add active to clicked
    $(this).toggleClass('active');
    // if has sub menu open it
    $(this).find("ul").slideToggle();
    // closer other sub menu if any open
    $(this).siblings().find("ul").slideUp();
    // remove active class of sub menu items
    $(this).siblings().find('ul').find('li').removeClass('active')
})

$(".menu-btn").click(function (){
    $('sidebar').toggleClass('active')
})

// $(document).on('click', '.menu > ul > li', function (e) {
//     // ... logic for handling clicks
//     // remove active from already active
//     $(this).sibling().removeClass('active')
//     // add active to clicked
//     $(this).toggleClass('active');
//     // if has sub menu open it
//     $(this).find("ul").slideToggle();
// });