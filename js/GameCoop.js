// 偵測元素是否在視窗中
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// 添加動畫效果
function addAnimation() {
    const elements = document.querySelectorAll('.GameHex_Coop_Introduce_Slogan01, .GameHex_Coop_Introduce_Slogan02, .GameHex_Coop_Introduce_Slogan03');
    elements.forEach(el => {
        if (isElementInViewport(el)) {
            el.classList.add('animated_coop');
        }
    });
}

// 監聽捲動事件
window.addEventListener('scroll', addAnimation);

// 初始檢查
addAnimation();