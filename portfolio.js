const img01 = 'url("img/red.jpg")';
const img02 = 'url("img/orange.jpg")';
const img03 = 'url("img/yellow.jpg")';
const img04 = 'url("img/lightgreen.jpg")';
const img05 = 'url("img/lightblue.jpg")';
const img06 = 'url("img/blue.jpg")';


function nextimg() {
    let header = document.getElementById('top');
    let nowimg = header.style.backgroundImage;
    console.log(nowimg);

    if (nowimg == img01) { // 1枚目
        header.style.backgroundImage = img02;
      } else if (nowimg == img02) { // 2枚目
        header.style.backgroundImage = img03;
      } else if (nowimg == img03) { // 3枚目
        header.style.backgroundImage = img04;
      } else if (nowimg == img04) { // 4枚目
        header.style.backgroundImage = img05;
      } else if (nowimg == img05) { // 5枚目
        header.style.backgroundImage = img06;
      } else { //6枚目
        header.style.backgroundImage = img01;
      }
}

function previmg() {
    let header = document.getElementById('top');
    let nowimg = header.style.backgroundImage;
    console.log(nowimg);

    if (nowimg == img01) { // 1枚目
        header.style.backgroundImage = img06;
      } else if (nowimg == img06) { // 2枚目
        header.style.backgroundImage = img05;
      } else if (nowimg == img05) { // 3枚目
        header.style.backgroundImage = img04;
      } else if (nowimg == img04) { // 4枚目
        header.style.backgroundImage = img03;
      } else if (nowimg == img03) { // 5枚目
        header.style.backgroundImage = img02;
      } else { //6枚目
        header.style.backgroundImage = img01;
      }
}

document.getElementById('top').style.backgroundImage = img01;
document.getElementById('sc-to-left').addEventListener('click', previmg);
document.getElementById('sc-to-right').addEventListener('click', nextimg);

setInterval(nextimg, 4000);
