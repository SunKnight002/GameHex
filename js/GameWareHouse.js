// 建立一個陣列來儲存所有的卡片資訊
let gameCard_L = [
    { img: "./img/GameCard_280x200Card_002.jpg", playTime: "127", playDay: "2024/01/06", title: "盧恩戰記"},
    { img: "./img/GameCard_280x200Card_002.jpg", playTime: "127", playDay: "2024/01/06", title: "盧恩戰記"},
    { img: "./img/GameCard_280x200Card_002.jpg", playTime: "127", playDay: "2024/01/06", title: "盧恩戰記"},
    { img: "./img/GameCard_280x200Card_002.jpg", playTime: "127", playDay: "2024/01/06", title: "盧恩戰記"},
    { img: "./img/GameCard_280x200Card_002.jpg", playTime: "127", playDay: "2024/01/06", title: "盧恩戰記"},
    { img: "./img/GameCard_280x200Card_002.jpg", playTime: "127", playDay: "2024/01/06", title: "盧恩戰記"},
    { img: "./img/GameCard_280x200Card_002.jpg", playTime: "127", playDay: "2024/01/06", title: "盧恩戰記"},
    { img: "./img/GameCard_280x200Card_002.jpg", playTime: "127", playDay: "2024/01/06", title: "盧恩戰記"},
    { img: "./img/GameCard_280x200Card_002.jpg", playTime: "127", playDay: "2024/01/06", title: "盧恩戰記"},
    { img: "./img/GameCard_280x200Card_002.jpg", playTime: "127", playDay: "2024/01/06", title: "盧恩戰記"},
    { img: "./img/GameCard_280x200Card_002.jpg", playTime: "127", playDay: "2024/01/06", title: "盧恩戰記"},
];

// 獲取要插入卡片的section
let gameCardList = document.querySelector(".GH_WH_GameChest_GameArea");


// 使用for迴圈來遍歷所有的卡片資訊
for (let i = 0; i < gameCard_L.length; i++) {
    // 建立一個新的div元素來代表卡片
    let card = document.createElement("div");
    card.className = "GameCard_Lunch";

// 建立卡片的內容
let content=`
    <!-- 小卡圖片部分 -->
    <div class="GameCard_Lunch_Img">
        <img src="${gameCard_L[i].img}" alt="">
        <p>累計遊玩 ${gameCard_L[i].playTime} 小時</p>
        <span>上次遊玩 ${gameCard_L[i].playDay} </span>
    </div>
    <!-- 小卡文字資訊與啟動按鈕 -->
    <div class="GameCard_Lunch_Info">
        <p class="GameCard_Lunch_Info_Title">${gameCard_L[i].title}</p>
        <!-- 啟動按鈕 -->
        <button id="BTN_ProductTo_Lunch_${i + 1}" class="BTN_Style_ProductTo_Lunch" onclick="location.href='#'">啟動遊戲</button>
    </div>
</div>
`;

    // 將內容添加到卡片中
    card.innerHTML = content;

    // 將卡片添加到卡片列表中
    gameCardList.appendChild(card);

}