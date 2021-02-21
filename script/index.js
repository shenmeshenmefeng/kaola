$(function(){
    var login = getCookie('login')
    var user = getCookie('name')
    if(login) {
        $('.login').css('display','none')
        $('.user').css('display','block')
        $('.exit').css('display','block')
        $('.user').text(user)
    }
})
$('.exit').on('click',function(){
    removeCookie('login')
    window.location.reload()
})
window.onscroll = function () {
    var scrollH = $(window).scrollTop()
    if (scrollH>= 115) {
        $('#header').css('position','fixed')
        $('#header').css('top','0')
        $('#header').css('z-index','999')
        $('#header').css('background','white')
        $('#header').css('box-shadow','0 -9px 9px 8px')
        $('#header').css('height','60px')
        $('.header>a').css('height','50px')
        $('.header>a').css('margin-top','5px')
        $('.header>a').css('background-size','130px 45px')
        $('.header>form').css('margin-top','10px')
        $('.header>span').css('display','none')
        $('#nav').css('margin-top','100px')
    } 
    if (scrollH<115) {
        $('#header').css('position','')
        $('#nav').css('margin-top','0')
        $('#header').css('box-shadow','0 0 0 0')
        $('#header').css('height','100px')
        $('.header>a').css('height','68px')
        $('.header>a').css('margin-top','20px')
        $('.header>form').css('margin-top','30px')
        $('.header>span').css('display','block')
        $('.header>a').css('background-size','100% 100%')

    }
    if (scrollH>=650) {
        $('.rightnav').css('position','fixed')
        $('.rightnav').css('top','73px')
    }
    if (scrollH<650) {
        $('.rightnav').css('position','absolute')
        $('.rightnav').css('top','690px')
    }
    if (scrollH>=650) {
        $('.leftnav').css('position','fixed')
        $('.leftnav').css('top','73px')
    }
    if (scrollH<650) {
        $('.leftnav').css('position','absolute')
        $('.leftnav').css('top','690px')
    }
}