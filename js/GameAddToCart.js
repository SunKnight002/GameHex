window.onload = function() {
    let addTip = document.querySelector('.GameHex_Product_Add_Tips');
    setTimeout(function() {
        addTip.style.opacity = "1";
    }); // 這裡的 2000 是延遲的毫秒數，你可以根據需要調整
}






// 獲取HTML元素
let timeElement = document.querySelector('.GameHex_Product_Add_Tips span');

// 設定初始時間
let timeLeft = 6;

// 更新HTML元素的文字內容
function updateTimeText() {
    timeElement.textContent = timeLeft + '秒後關閉此視窗';
}

updateTimeText();

// 設定計時器
let timer;

function startTimer() {
    timer = setInterval(function() {
        // 每秒減少時間
        timeLeft--;

        // 更新HTML元素的文字內容
        updateTimeText();

        // 檢查時間是否已經到達0
        if(timeLeft <= 0) {
            // 停止計時器
            clearInterval(timer);

            // 跳轉到新的頁面
            window.location.href = "index.html";
        }
    }, 1000); // 每1000毫秒（1秒）執行一次
}

startTimer();


