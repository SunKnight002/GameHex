// 獲取HTML元素
let addToCartButton = document.querySelectorAll('.BTN_Style_ProductTo_BuyInSec');

// 為按鈕添加點擊事件監聽器
addToCartButton.forEach(function(button){
    button.addEventListener('click',function(){
        window.location.href ='GH_AddToCart.html';
    })
})