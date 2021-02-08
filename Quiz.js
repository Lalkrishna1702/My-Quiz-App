class Quiz{
    constructor(){}

getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on('value', (data)=>{
        gameState = data.val();
    })
}
updateState(count){
    database.ref('/').update({
        gameState:count
    })
}
async start(){
    if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once('value');
        if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
        }
    }
    question = new Question();
    question.display();
}
play(){
    question.hide();
    background("yellow");
    fill(0);
    textSize(30);
    text("Result of the Quiz",340, 50);
    text("----------------------------",320, 65);
    Contestant.getContestantInfo();
    if(allContestant !== undefined){
      var display_Answers = 230;
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correct are highlighted in green color!",130,230);

      for(var plr in allContestant){
          console.log(plr)
        var correctAns = "2";
        if (correctAns === allContestant[plr].Answer)
          fill("Green")
        else
          fill("red");

        display_Answers+=30;
        textSize(20);
        text(allContestant[plr].Name + ": " + allContestant[plr].Answer, 250,display_Answers)
      }
    }
  }
}