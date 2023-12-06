'use strict';

// tab
const tabLink = document.querySelectorAll('.tab-link-underline');
const tabContItem = document.querySelectorAll('.tab-cont-item');
for (let i = 0; i < tabLink.length; i++) {
    //default
    tabLink[0].classList.add("active");
    tabContItem[0].classList.add("active");
    // 클릭했을때
  tabLink[i].addEventListener('click', function (e) {
    // a default 해제
    e.preventDefault();

    // 원래 타겟에서 href값 가져옴
    let orgTarget = e.target.getAttribute('href');
    // tab할 타켓은 href에서 #뺀 값
    let tabTarget = orgTarget.replace('#', '');

    for (let x = 0; x < tabContItem.length; x++) {
      tabContItem[x].classList.remove("active");
    }
    document.getElementById(tabTarget).classList.add("active");

    //tablink add active
    for (let y = 0; y < tabLink.length; y++) {
      tabLink[y].classList.remove('active');
      e.target.classList.add('active');
    }
  });
}