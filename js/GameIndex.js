// 建立一個陣列來儲存所有的卡片資訊
let gameCards = [
    { img: "./img/GameCard_252140Card_002.jpg", discount: "-25%", price: "NT$350", title: "青春搖滾", tags: ["獨立遊戲", "動作", "多人連線", "類魂遊戲", "角色扮演", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_003.jpg", discount: "-25%", price: "NT$880", title: "獵龍之心", tags: ["動作遊戲", "砍殺", "單機", "血腥", "角色扮演", "類魂遊戲"] },
    { img: "./img/GameCard_252140Card_004.jpg", discount: "-15%", price: "NT$900", title: "暗黑世紀", tags: ["恐怖遊戲", "第一人稱", "動作", "角色扮演", "支援VR", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_005.jpg", discount: "-15%", price: "NT$400", title: "亂世紅塵", tags: ["經營模擬", "商業模擬", "多線劇情", "單機", "多重結局", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_006.jpg", discount: "-30%", price: "NT$340", title: "黑鐵勇者", tags: ["冒險遊戲", "動作", "多人連線", "類魂遊戲", "角色扮演", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_007.jpg", discount: "-60%", price: "NT$512", title: "天使戰記", tags: ["角色扮演", "支援VR", "多人連線", "寫實模擬", "多重結局", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_008.jpg", discount: "-35%", price: "NT$250", title: "失落之光", tags: ["動作遊戲", "類魂遊戲", "單人", "多重結局", "Roguelike", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_009.jpg", discount: "-60%", price: "NT$300", title: "生命之妙", tags: ["獨立遊戲", "感人劇情", "多重結局", "單機", "角色扮演", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_010.jpg", discount: "-50%", price: "NT$400", title: "黃昏酒館", tags: ["模擬經營", "感人劇情", "戀愛", "搞笑類型", "輕鬆詼諧", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_011.jpg", discount: "-80%", price: "NT$100", title: "槍與玫瑰", tags: ["射擊遊戲", "狙擊", "暗殺", "激烈槍戰", "第一人稱", "搶先體驗"] },
    { img: "./img/GameCard_252140Card_012.jpg", discount: "-20%", price: "NT$200", title: "虛擬路人主播", tags: ["獨立遊戲", "模擬", "虛擬主播", "經營養成", "策略管理", "搶先體驗"] },
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
            <img id="GameImg_${i + 1}" src="${gameCards[i].img}" alt="" class="Card_000">
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