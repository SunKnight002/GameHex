// 獲取HTML元素
let timeElement = document.querySelector('.RegisterMain_Bot p');
let resendButton = document.querySelector('.Resend_BTN');

// 設定初始時間
let timeLeft = 30;

// 更新HTML元素的文字內容
function updateTimeText() {
    timeElement.textContent = '請於' + timeLeft + '秒內輸入';
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

            // 顯示警告訊息
            alert('請重新寄送驗證信');
        }
    }, 1000); // 每1000毫秒（1秒）執行一次
}

// 啟動計時器
startTimer();

// 為再次發送按鈕添加點擊事件監聽器
resendButton.addEventListener('click', function() {
    // 重置時間
    timeLeft = 30;

    // 更新HTML元素的文字內容
    updateTimeText();

    // 清除舊的計時器
    clearInterval(timer);

    // 啟動新的計時器
    startTimer();
    alert('已經重新寄送驗證碼，請於30秒內輸入');
});

