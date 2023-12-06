'use strict';

// tab
const tabLinkItem = document.querySelectorAll('.tab-link-underline');
const tabContItem = document.querySelectorAll('.tab-cont-item');
for (let i = 0; i < tabLinkItem.length; i++) {
    //default

    //clicked
    tabLinkItem[i].addEventListener('click', function (e) {
        e.preventDefault();
        
    // 원래 타겟에서 href값 가져옴
    let orgTarget = e.target.getAttribute('href');
    // tab할 타켓은 href에서 #뺀 값
    let tabTarget = orgTarget.replace('#', '');
    for (let x = 0; x < tabContItem.length; x++) {
      tabContItem[x].classList.remove("active");
      document.getElementById(tabTarget).classList.add("active");
    }
    //tabLinkItem add active
    for (let y = 0; y < tabLinkItem.length; y++) {
        tabLinkItem[y].classList.remove('active');
      e.target.classList.add('active');
    }

  });
}