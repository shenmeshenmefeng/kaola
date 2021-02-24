$(function (){
  if (localStorage.getItem('goods')) {
    // // 获取购物车数据
    // var goodsArr = JSON.parse( localStorage.getItem('goods') );
    // console.log(goodsArr);
    // // 获取所有数据
    // console.log(data);
    //         for(var i = 0; i < len; i++) {
    //           if (data.data[i].id === goodsArr.id) {
    //             domStr += `
    //             <li>
    //               <input type="checkbox">
    //               <img src="${data.data[i].imgurl}" alt="">
    //               <h3>${data.data[i].title}</h3>
    //               <p>${data.data[i].price}</p>
    //               <span>${obj.num}</span>
    //               <em data-id="${data.data[i].id}">删除</em>
    //             </li>
    //             `;
    //           }
    //       };
    //     $('.list').html(domStr);

    // 删除商品
    $('.list').on('click','li em',function (){
      // 当前点击的商品id
      var id = $(this).attr('data-id');
      $.each(goodsArr,function (index,item){
        if (item.id === id) {
          goodsArr.splice(index,1);
          return false;
        }
      });
      // 删除dom结构
      $(this).parent().remove();
      // 更新本地存储的数据
      localStorage.setItem('goods',JSON.stringify(goodsArr));
      if (goodsArr.length <= 0) {
        localStorage.removeItem('goods');
        var newLi =`<li>购物车暂无数据！<a href='./goodslist.html'>逛逛吧</a></li>`;
        $('.list').html(newLi);
      }
    });

  } else {
    var newLi = `<li>购物车暂无数据！<a href='./goodslist.html'>逛逛吧</a></li>`;
    $('.list').html(newLi);
  }
});


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

