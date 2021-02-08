class Question{
    constructor(){
        this.inputName = createInput("Enter: Your Name Here");
        this.inputAns = createInput("Enter Correct Option No.");
        this.Button = createButton("Submit");
    }
    hide(){
        this.inputName.hide();
        this.inputAns.hide();
        this.Button.hide();
        title.hide();
    }
    display(){
        title = createElement('h2')
        title.html("My Quiz Game");
        title.position(350,0);

        var question = createElement('h3');
        question.html("Question:- What starts and ends with letter 'E', but has only one letter?");
        question.position(150,80);

        var option1 = createElement('h3');
        option1.html("1: Everyone ");
        option1.position(150,100);

        var option2 = createElement('h3');
        option2.html("2: Envelope ");
        option2.position(150,120);

        var option3 = createElement('h3');
        option3.html("2: Estimate ");
        option3.position(150,140);

        var option4 = createElement('h3');
        option4.html("2: Example ");
        option4.position(150,160);
        
        this.inputName.position(150,230);
        this.inputAns.position(350,230);
        this.Button.position(width/2-120,300);

        this.Button.mousePressed(()=>{
            this.inputName.hide();
            this.inputAns.hide();
            this.Button.hide();
            contestant.name = this.inputName.value();
            contestant.answer = this.inputAns.value();
            contestantCount += 1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })
    }
}