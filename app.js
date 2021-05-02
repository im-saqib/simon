let ai = [];
let user = [];
let level=0;

start();
function events(){
    $('.btn').click(function(){
        let btnID = $(this).attr('id');
        user.push("#"+btnID);
        
        if(ai.length == user.length){
        comparison();
        }
            cases("#"+btnID);
        
        // console.log("user pressed " + user);
    })
}
function comparison(){
    let aiString = ai.toString();
    let userString = user.toString();
    // console.log("user pressed: " + user + " AI input: " + ai);
    if (aiString == userString){
        aiPush();
        $("h1").text("Level " + level);
        user=[];
        level++;
    }else{
        $("h1").text("Game Over, Press any key to Restart");
        gameOver();
        level = 0;
        start();
    }
}
function aiPush(){
    // let randomColor = rand();
    let id = rand();
    ai.push(id);
    setTimeout(() => {
        // console.log(id);
    cases(id);
    }, 500);
    
    // console.log("AI input " + ai)
}
function rand(){
        let colors = ["#green", "#red", "#yellow", "#blue"]
        let out = colors[(Math.floor(Math.random()*4))];
        // console.log("Random color: "+ out)
            return out;        
}
function cases(btnID){
    let audio;
    if(level==0){
        btnID = "game-over";
        gameOver();
    }
    switch(btnID){
        case "#green" :
            animate(btnID);
            audio = new Audio('/sounds/green.mp3');
            audio.play();
        break;
        case "#red":
            animate(btnID);
            audio = new Audio('/sounds/red.mp3');
            audio.play();
            break;
        case "#yellow":
            animate(btnID);
            audio = new Audio('/sounds/yellow.mp3');
            audio.play();
            break;
        case "#blue":
            animate(btnID);
            audio = new Audio('/sounds/blue.mp3');
            audio.play();
            break;
        case "game-over":
            audio = new Audio('/sounds/wrong.mp3');
            audio.play();
            break;
        default:
        console.log("Invalid Button" + btnID);
    }
}
function animate(id){
    // console.log("animate: " + id);
    $(id).addClass("pressed");
    setTimeout(() => {  
        $(id).removeClass("pressed");
    }, 100);
    
    // console.log("animate " + id);
}
function start(){
    level = 1;
    window.addEventListener('keypress',function(){
        aiPush();
        $("h1").text("Level " + level);
        events();
    },{once: true})
}
function gameOver(){
    $("body").addClass("game-over");
    setTimeout(() => {  
        $("body").removeClass("game-over");
    }, 100);
    // console.log("user pressed: " + user + " AI input: " + ai);
    user = [];
    ai = [];
}