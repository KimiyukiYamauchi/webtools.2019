'use strict'
{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const result = ['大吉', '中吉', '中吉', '凶', '凶', '凶', '凶', '凶', '凶', '凶', '凶',];
    // const n = Math.floor(Math.random() * 3);
    btn.textContent = result[Math.floor(Math.random() * result.length)];
    // btn.textContent = n;{
      
      // const n = Math.random();

      // if (n < 0.05) {
      //   btn.textContent = '大吉'; // 5%
      // } else if (n < 0.2) {
      //   btn.textContent = '中吉'; // 15%
      // } else {
      //   btn.textContent = '凶'; // 80%
      // }
    // switch (n) {
    //   case 0:
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '中吉';
    //     break;
    //   case 2:
    //     btn.textContent = '凶';
    //     break;
    // }
  });

}