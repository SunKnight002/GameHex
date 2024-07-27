// 獲取所有縮圖元素
let thumbnails = document.querySelectorAll('.GH_WIP_OverRall_Info_Img_Thumbnail img');

// 獲取顯示大圖的元素
let displayImg = document.querySelector('.GH_WIP_OverRall_Info_Img_Video img');

// 為每個縮圖元素添加點擊事件
thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        // 將大圖的src設置為被點擊的縮圖的src
        displayImg.src = thumbnail.src;
    });
});

thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        // 將大圖的src設置為被點擊的縮圖的src
        displayImg.src = thumbnail.src;
    });
});