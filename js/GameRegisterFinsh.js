// ------------------------------------------------------------------- 給跳轉網頁用

// 獲取HTML元素
let refreshTime10s = document.querySelector('.RegisterMain_Fin_Bot span');

// 設定初始時間
let timeRefresh = 10;

// 更新HTML元素的文字內容
function updateTimeText10s() {
    refreshTime10s.textContent = '將於' + timeRefresh + '秒跳轉到首頁';
}

updateTimeText10s();

// 設定計時器
let timer10s;

function startTimerForRefresh() {
    timer = setInterval(function() {
        // 每秒減少時間
        timeRefresh--;

        // 更新HTML元素的文字內容
        updateTimeText10s();

        // 檢查時間是否已經到達0
        if(timeRefresh <= 0) {
            // 停止計時器
            clearInterval(timer10s);
        
            // 跳轉到新的頁面
            window.location.href = "GH_LandingPage.html";
        }

    }, 1000); // 每1000毫秒（1秒）執行一次
}

startTimerForRefresh();