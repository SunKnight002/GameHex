// 建立一個陣列來儲存所有的卡片資訊
let gameCards = [
    { img: "./img/BC_0002.png", discount: "-25%", price: "NT$350", title: "GameTitle1", tags: ["獨立遊戲", "動作", "多人連線", "類魂遊戲", "角色扮演", "搶先體驗"] },
    { img: "./img/BC_0002.png", discount: "-25%", price: "NT$400", title: "GameTitle1", tags: ["獨立遊戲", "動作", "多人連線", "類魂遊戲", "角色扮演", "搶先體驗"] },
    { img: "./img/BC_0002.png", discount: "-15%", price: "NT$400", title: "GameTitle1", tags: ["獨立遊戲", "動作", "多人連線", "類魂遊戲", "角色扮演", "搶先體驗"] },
    { img: "./img/BC_0002.png", discount: "-15%", price: "NT$400", title: "GameTitle1", tags: ["獨立遊戲", "動作", "多人連線", "類魂遊戲", "角色扮演", "搶先體驗"] },
    { img: "./img/BC_0002.png", discount: "-30%", price: "NT$400", title: "GameTitle1", tags: ["獨立遊戲", "動作", "多人連線", "類魂遊戲", "角色扮演", "搶先體驗"] },
    { img: "./img/BC_0003.png", discount: "-60%", price: "NT$400", title: "GameTitle1", tags: ["獨立遊戲", "動作", "多人連線", "類魂遊戲", "角色扮演", "搶先體驗"] },
    { img: "./img/BC_0003.png", discount: "-60%", price: "NT$400", title: "GameTitle1", tags: ["獨立遊戲", "動作", "多人連線", "類魂遊戲", "角色扮演", "搶先體驗"] },
    { img: "./img/BC_0003.png", discount: "-60%", price: "NT$400", title: "GameTitle1", tags: ["獨立遊戲", "動作", "多人連線", "類魂遊戲", "角色扮演", "搶先體驗"] },
    { img: "./img/BC_0003.png", discount: "-60%", price: "NT$400", title: "GameTitle1", tags: ["獨立遊戲", "動作", "多人連線", "類魂遊戲", "角色扮演", "搶先體驗"] },
    { img: "./img/BC_0003.png", discount: "-60%", price: "NT$400", title: "GameTitle1", tags: ["獨立遊戲", "動作", "多人連線", "類魂遊戲", "角色扮演", "搶先體驗"] },
    { img: "./img/BC_0003.png", discount: "-60%", price: "NT$400", title: "GameTitle1", tags: ["獨立遊戲", "動作", "多人連線", "類魂遊戲", "角色扮演", "搶先體驗"] }
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
            <img src="${gameCards[i].img}" alt="">
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
}