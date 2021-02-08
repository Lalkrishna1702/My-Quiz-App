class Contestant{
    constructor(){
        this.index = 0;
        this.name = null;
        this.answer = 0;
    }
getCount(){
    var getPlayerCountRef = database.ref('contestantCount');
    getPlayerCountRef.on('value', (data)=>{
        contestantCount = data.val();
    })
}
updateCount(count){
    database.ref('/').update({
        contestantCount:count
    })
}
update(){
    var contestantIndex = "Contestants/Contestant" + this.index;
    database.ref(contestantIndex).set({
        Name:this.name,
        Answer:this.answer
    })
}
static getContestantInfo(){
    var contestantInfoRef = database.ref('Contestants');
    contestantInfoRef.on('value', (data)=>{
        allContestant = data.val();
    })
}
}