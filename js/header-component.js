// header-component.js
class HeaderComponent extends HTMLElement {
    constructor() {
      super();
      const template = document.createElement('template');
       template.innerHTML = `    
       <header>
      <nav class="navbar">
        <a class="header_Logo" href="index.html" target="_self"><img src="./img/logo.png" alt="GameHex Logo"></a>
        <ul class="nav-menu">
            <a class="nav-link" href="GH_LandingPage.html" target="_self"><li class="nav-item">主打新作</li></a>
            <a class="nav-link" href="index.html" target="_self"><li class="nav-item">產品銷售</li></a>
            <a class="nav-link" href="GH_ProductCheckout.html" target="_self"><li class="nav-item">購物推車</li></a>
            <a class="nav-link" href="GH_WareHouse.html" target="_self"><li class="nav-item">遊戲倉庫</li></a>
            <a class="nav-link" href="GH_CompanyCoop.html" target="_self"><li class="nav-item">企業合作</li></a>
            <a class="nav-link" href="GH_MyAccount.html" target="_self"><li class="nav-item">願望清單</li></a>
            <a class="nav-link" href="GH_LoginPage.html" target="_self"><li class="nav-item">登入/註冊</li></a>
        </ul>
      </nav>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </header>`;

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.appendChild(template.content.cloneNode(true));
    }
  }
  
  customElements.define('header-component', HeaderComponent);