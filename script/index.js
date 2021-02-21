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