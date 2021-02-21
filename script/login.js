$('.span-ewm').on('click',function(){
    $('.ewm').css('display','none')
    $('.phone').css('display','block')
})
$('.span-phone').on('click',function(){
    $('.phone').css('display','none')
    $('.ewm').css('display','block')
})
$('.phone').on('submit',function(){
    var name = $('#login-id').val()
    var pass = $('#login-code').val()
    if(name === '666666' && pass === '666666') {
        setCookie({
            key:'login',
            val:'loginSuccess',
            days:9999
        })
        setCookie({
            key:'user',
            val:$('#login-id').val(),
            days:9999
        })
        setCookie({
            key:'pass',
            val:$('#login-code').val(),
            days:9999
        })
        setCookie({
            key:'name',
            val:'什么什么枫',
            days:9999
        })
    }else {
        alert('账号或密码错误')
        return false
    }
})