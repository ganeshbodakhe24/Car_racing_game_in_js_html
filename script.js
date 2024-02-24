
let blue_car = document.getElementById("blue_car");
let red_car = document.getElementById("red_car");
let game_score_card_outer = document.getElementById("game_score_card_outer");
let score=document.getElementById("score");
let lose_audio=document.getElementById("lose_audio");
let click_audio=document.getElementById("click_audio");
let count=0;
//blue car 


blue_car.addEventListener("animationiteration", function () {
    var random = ((Math.floor(Math.random() * 3)) * 200)
    blue_car.style.left = random + "px";
    count=count+10;;
})
//red car movement
window.addEventListener("keydown", function (e) {
    if (event.keyCode === 13) {
        e.preventDefault(); // Prevent default behavior of the enter key
        location.reload();
      }
    if (e.keyCode == 39) {
        var raceCarLeft = parseInt(window.getComputedStyle(red_car).getPropertyValue("left"));
        console.log(raceCarLeft)
        if (raceCarLeft < 400) {
            red_car.style.left = (raceCarLeft + 200) + "px";
           
        }
        click_audio.play();
    }

    if (e.keyCode == 37) {
        var raceCarLeft = parseInt(window.getComputedStyle(red_car).getPropertyValue("left"));
        console.log(raceCarLeft);
        if (raceCarLeft > 0) {
            red_car.style.left = (raceCarLeft - 200) + "px";
           
        }
        click_audio.play();
    }
})

function gameOver() {
    var blue_car_left_val = parseInt(window.getComputedStyle(blue_car).getPropertyValue("left"));
   
    //blue car  height
    var blue_car_height = parseInt(window.getComputedStyle(blue_car).getPropertyValue("top"));
    // console.log(blue_car_height)
   
    //red car left value
    var red_car_left_val = parseInt(window.getComputedStyle(red_car).getPropertyValue("left"));
   
   
   
    if((blue_car_left_val==red_car_left_val )&& (blue_car_height>=370 && blue_car_height<=640)){
        game_score_card_outer.style.display='flex';
        score.innerHTML=count;
        clearInterval(gamestart);
        lose_audio.play();
    }
}
let gamestart=setInterval(() => {
    gameOver();
}, 200);