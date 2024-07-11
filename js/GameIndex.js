// 建立一個陣列來儲存所有的卡片資訊
let gameCards = [
    { img: "./img/GameCard_252140Card_001.jpg", discount: "-25%", price: "NT$350", title: "盧恩戰記", tags: ["獨立遊戲", "動作", "多人連線", "類魂遊戲", "角色扮演", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_001.jpg", discount: "-25%", price: "NT$880", title: "動物牛仔", tags: ["派對遊戲", "動作", "多人連線", "可愛", "角色扮演", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_001.jpg", discount: "-15%", price: "NT$900", title: "洛雷的陰影", tags: ["恐怖遊戲", "第一人稱", "多人連線", "解謎遊戲", "支援VR", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_005.jpg", discount: "-15%", price: "NT$400", title: "疾速飆風", tags: ["競速遊戲", "第一人稱", "多人連線", "單人劇情", "經營模擬", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_004.jpg", discount: "-30%", price: "NT$340", title: "黑鐵勇者", tags: ["冒險遊戲", "動作", "多人連線", "類魂遊戲", "角色扮演", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_001.jpg", discount: "-60%", price: "NT$512", title: "特戰雷霆", tags: ["射擊遊戲", "支援VR", "多人連線", "寫實模擬", "第一人稱", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_001.jpg", discount: "-35%", price: "NT$250", title: "遊戲創作物語", tags: ["養成遊戲", "商業模擬", "單人", "單人劇情", "角色扮演", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_001.jpg", discount: "-60%", price: "NT$300", title: "冷冽莊園", tags: ["獨立遊戲", "策略模擬", "領地養成", "單機劇情", "角色扮演", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_003.jpg", discount: "-50%", price: "NT$400", title: "獵龍之心", tags: ["獨立遊戲", "砍殺", "多人連線", "搞笑類型", "角色扮演", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_002.jpg", discount: "-80%", price: "NT$100", title: "節奏趴搭碰", tags: ["音樂遊戲", "動作", "多人連線", "類魂遊戲", "角色扮演", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_001.jpg", discount: "-20%", price: "NT$200", title: "虛擬路人主播", tags: ["獨立遊戲", "模擬", "虛擬主播", "經營養成", "策略管理", "搶先體驗"] }
];

// 獲取要插入卡片的div
let gameCardList = document.querySelector(".GH_I_ShopArea_GameArea_GameCardList");

// 使用for迴圈來遍歷所有的卡片資訊
for (let i = 0; i < gameCards.length; i++) {
    // 建立一個新的div元素來代表卡片
    let card = document.createElement("div");
    card.className = "recomeGame_Card";
    // 建立卡片的內容
    let content = `
        <div class="recomeGame_img">
            <img id="GameImg_${i + 1}" src="${gameCards[i].img}" alt="">
            <div class="discountPrice">
                <span>${gameCards[i].discount}</span>
                <p>${gameCards[i].price}</p>
            </div>
            <button id="HopeList_${i + 1}" class="HopeList_BTN"><img src="./img/love.png" alt=""></button>
            <div class="recomeGame_info">
                <div class="recomeGame_info_title">
                    <p>${gameCards[i].title}</p>
                    <ul>
                        <li><img src="./img/star.png" alt=""></li>
                        <li><img src="./img/star.png" alt=""></li>
                        <li><img src="./img/star.png" alt=""></li>
                        <li><img src="./img/star.png" alt=""></li>
                        <li><img src="./img/star.png" alt=""></li>
                    </ul>
                </div>
                <div class="gameTag_Bigbox">
                    <ul>
                        ${gameCards[i].tags.map(tag => `<li>${tag}</li>`).join('')}
                    </ul>
                    <button id="AddToCart_${i + 1}" class="AddToCart_BTN">加入購物車</button>
                </div>
            </div>
        </div>
        `;

    // 將內容添加到卡片中
    card.innerHTML = content;

    // 將卡片添加到卡片列表中
    gameCardList.appendChild(card);

    // 為按鈕添加點擊事件監聽器
    document.getElementById(`AddToCart_${i + 1}`).addEventListener('click', function() {
        window.location.href = 'GH_AddToCart.html';
    })

    // 為圖片添加點擊事件監聽器
    document.getElementById(`GameImg_${i + 1}`).addEventListener('click', function() {
        window.location.href = 'GH_ShopWorkInnerPage.html';
    });
}