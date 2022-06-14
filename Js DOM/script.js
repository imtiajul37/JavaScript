let base = document.querySelector('#base');
let on = document.querySelector('#on');
let off = document.querySelector('#off');

on.addEventListener('click',() =>{
    base.src='pic_bulbon.gif'
})
off.addEventListener('click', ()=>{
    base.src='pic_bulboff.gif'
})
// greetings
let greet = document.querySelector('#greet');
let result = document.querySelector('#show');

greet.addEventListener('click', ()=>{
    let namee = prompt('Enter Your name');
    while(namee == null || namee == ''){
        namee = prompt('Please Enter your name')
    }
    let time = new Date();
    if(time.getHours() >= 6 && time.getHours() < 12 ){
        result.innerHTML = 'Good morning ' + namee;
    }else if(time.getHours() > 12 && time.getHours() < 17){
        result.innerHTML = 'Good afternoon ' + namee;
    }else if (time.getHours() >= 17 && time.getHours() < 22){
        result.innerHTML = 'Good Evening ' + namee;
    }else{
        result.innerHTML = 'Good Night ' + namee
    }
})
// greetings end
// Love calculator

let love = document.querySelector('#love');
let lresult = document.querySelector('#lresult');
let comment = document.querySelector('#comment');

love.addEventListener('click', ()=>{
    let yourName = prompt('Enter Your name.');
    while(yourName == '' || yourName == null){
        yourName = prompt('Enter Your name.');
    }
    let partnarsName = prompt('Enter Your partnar\'s name.');
    while(partnarsName == '' || partnarsName == null){
        partnarsName = prompt('Enter Your partnar\'s name.');
    }
    let genarator = Math.ceil(Math.random()*100);
    lresult.innerHTML = `${yourName} and ${partnarsName} love each other ${genarator} percent!`;
    if(genarator < 33){
        comment.innerHTML = '(What will happen by forcing one!! Love does not come by forcing! Stay happy with that!)'
    }else{
        comment.innerHTML = ''
    }


})
// random position
let change = document.querySelector('pb');
pb.addEventListener('click', ()=>{
    let position = Math.ceil(Math.random()* 100)
let square = document.querySelector('#square').style.top = position + '%';
})
