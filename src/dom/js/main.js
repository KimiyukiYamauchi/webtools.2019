'use strict';
/*
console.log(1 + 2); // 3
console.log(1 - 2); // -1
console.log(2 * 3); // 6
console.log(1 / 3); // 0.33333...
console.log(10 % 3); // 1
var num = -10;
console.log(-num);   // 10
var num = 10 + 5 * 4; 
console.log(num); // 30
num = (10 + 5) * 4; 
console.log(num); // 60
var num = 7;
num++; // num += 1, num = num + 1
console.log(num);
num--; // num -= 1, num = num - 1
console.log(num);
var num;
num = 0x55 & 0x0F;
console.log(num);
num;
num = 0x55  | 0x0F;
console.log(num);
num;
num = 0x55  ^ 0x0F;
console.log(num);
var num;
num = 0x15 << 2; // 00010101(21) -> 01010100
console.log(num); // 0x54 -> 84
num = num >> 1;
console.log(num); // 42
var num = 16;
num += 4; // 20
console.log(num);
num *= 3; // 60
console.log(num);

var old = 10;

if (old >= 20){
    console.log('20歳以上です');
}else{
    console.log('20歳未満です');
}
var pref1 = ['東京都', '大阪府', '北海道'];
//var pref2 = pref1;
var pref2 = ['東京都', '大阪府', '北海道'];

console.log(pref1 === pref2); // 同じオブジェクト
console.log(pref1 == pref2); // 値が等しい

var val1 = '10';
var val2 = 10;

console.log(val1 === val2); // false
console.log(val1 == val2); // true
var num = 10;
var b;

b = num > 5 && num <= 20; // true
console.log(b);
num = 30;
b = num > 5 && num <= 20; // false
console.log(b);
b = num > 5 || num <= 20; // true
console.log(b);
b = !b; // false
console.log(b);
var num;
var sign;

num = 20;
sign = num >= 0 ? '正' : '負';
console.log(sign);

num = -20;
sign = num >= 0 ? '正' : '負';
console.log(sign);
var val = 1;
console.log(typeof val);
val = 'abc';
console.log(typeof val);
val = true;
console.log(typeof val);
var str;
str = '目覚まし' + '時計';

console.log(str);
var sum = 0;
var count = 0;

for (; count < 2;){
    sum += 2;
    count++;
}
console.log(sum, count);
for (var sum = 0, count = 0; count < 2; count += 1) {
    sum += 2;
    console.log(sum, count);
}
var obj = {name:'Yamada', old:24};

for(var pname in obj){
    console.log(obj[pname]);
}
var num = 1;

for (var i = 0; i < 10; i++){
    num *= 2;

    console.log(num);

    if (num >= 100){
        break;
    }
}

for (var i = 0; i < 10; i++){
    if (i % 2 == 1){
        continue;
    }

    console.log(i);
}
loop: for (var i = 0; i < 5; i++){
    for (var j = 0; j < 3; j++){
        console.log('i=' + i, 'j=' + j);
        if ( j == 1) {
            break loop;
        }
    }
}

function change(){
    document.getElementById('sample').innerHTML = '変更されました';
}
function change(){
    var node = document.getElementsByTagName('p');
    //    node[0].innerHTML = 'node[0]';
    //    node[1].innerHTML = 'node[1]';
    //    node[2].innerHTML = 'node[2]';
    //    node[3].innerHTML = 'node[3]';
    for (var i = 0; i < node.length; i++) {
        node[i].innerHTML = 'node[' + i + ']';
        console.log(i);
    }
}
*/

function change(){
    var node = document.getElementsByTagName('body');
    node[0].childNodes[0].childNodes[0].childNodes[0].innerHTML = '変更しました';
}
