let list = [`002,-20%,350,myId`, `003,-23%,280,id2`, `004,10%,300,id3`, `005,10%,300,id3`,`006,10%,300,id3`,`007,10%,300,id3`, `008,10%,300,id3`,`009,10%,300,id3`,`010,10%,300,id3`, `011,10%,300,id3`,`012,10%,300,id3` ,`013,10%,300,id3`]

let game = ``
for (let i = 0; i < list.length; i++) {
    game += `
    <div class="recomeGame_Card">
        <!-- 小卡圖片 -->
        <div class="recomeGame_img">
            <img src="./img/${list[i].split(',')[0]}.png" alt="">
            <!-- 小卡圖片上的 折價標籤 -->
            <div class="discountPrice">
                <span>${list[i].split(',')[1]}</span>
                <p>NT$${list[i].split(',')[2]}</p>
            </div>
            <!-- 小卡圖片上的 願望清單 按鈕 -->
            <button id="${list[i].split(',')[3]}" class="HopeList_BTN"><img src="./img/love.png" alt=""></button>
            
            <!--  小卡文字資訊 -->
            <div class="recomeGame_info">
                <!-- 小卡遊戲名稱 以及 評價星星 -->
                <div class="recomeGame_info_title">
                    <p>GameTitle</p>
                    <ul>
                        <li><img src="./img/star.png" alt=""></li>
                        <li><img src="./img/star.png" alt=""></li>
                        <li><img src="./img/star.png" alt=""></li>
                        <li><img src="./img/star.png" alt=""></li>
                        <li><img src="./img/star.png" alt=""></li>
                    </ul>
                </div>

                <!-- 遊戲的類型Tag  -->
                <div class="gameTag_Bigbox">
                    <ul>
                        <li>獨立遊戲</li>
                        <li>動作</li>
                        <li>多人連線</li>
                        <li>類魂遊戲</li>
                        <li>角色扮演</li>
                        <li>搶先體驗</li>
                    </ul>
                    <!-- 小卡文字上的 加入購物車 按鈕 -->
                    <button id="AddToCart_0001" class="AddToCart_BTN">加入購物車</button>
                </div>
            </div>
        </div>
    </div>
`

}

// let bigBox = document.getElementById('BigBox')
let bigBox = document.querySelector('.test');
bigBox.innerHTML =game;