import {getDiceRollArray , getDicePlaceholderHtml , getPercentage} from "/utils.js"


function Character(data){
    Object.assign(this,data)

    this.maxHealth = this.health

    this.diceArray = getDicePlaceholderHtml(this.diceCount)
    
    // this.getDiceHtml = function(){
    //      this.currentDiceScore = getDiceRollArray(this.diceCount)
    //      this.diceAray = this.currentDiceScore.map(function(num){
    //         return `<div class="dice">${num}</div>`
    //     }).join("")
    // }
    this.getDiceHtml = function() {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(num =>
             `<div class="dice">${num}</div>`
        ).join('')
    } 
    
    this.takeDamage = function(attackScoreArray){ 
        console.log(`${this.name} ${attackScoreArray}`)
        const totalAttackScore = attackScoreArray.reduce((total,score) => 
             total + score
        )
        this.health -= totalAttackScore
        if(this.health <= 0){
            this.dead = true
            this.health = 0
            
        }

    }
    this.getHealthBarHtml = function () {
        const percent = getPercentage(this.health, this.maxHealth)
    
        return `<div class="health-bar-outer">
                <div class="health-bar-inner ${percent < 26 ? "danger" : "" } " 
                style="width: ${ percent }%;">
                </div>
            </div>`
    }
    

    this.getCharacterHtml = function(){
        const { name, avtar, health, diceCount,diceArray } = this;
        const healthBar = this.getHealthBarHtml()
        return ` <div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avtar}">
            <div class="health">health: <b> ${health} </b></div>
            ${healthBar}
            <div class="dice-container">
                ${diceArray}
            </div>
        </div>`

    }

    
   
    
}



export  default Character