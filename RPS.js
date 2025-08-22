let score=JSON.parse(localStorage.getItem('score'))  ||
   { 
   wins:0,
   losses:0,
   ties:0
   };

updateScoreElement();


function pickComputerMove(playerMove){
   const randomNumb=Math.random();
   let compMove='';
   if(randomNumb<1/3){
   compMove='Rock';
   }
   else if(randomNumb<2/3){
   compMove='Paper';
   }
   else{
   compMove='Scissors';
   }

   let result='';

   if(compMove===playerMove){
   result='Tie'; 
   score.ties++; 
   }
   else if((compMove==='Paper' && playerMove==='Scissors') || (compMove==='Rock' && playerMove==='Paper') || (compMove==='Scissors' && playerMove==='Rock')){
   result='You Win';
   score.wins++;
   }
   else{
   result='You Lose';
   score.losses++;
   }

   localStorage.setItem('score',JSON.stringify(score));

   updateScoreElement();

   document.querySelector('.js-result').innerHTML=result;

   document.querySelector('.js-moves').innerHTML=`You
   <img src="../images/${playerMove}-emoji.png" alt="Rock" class="move-icon">
   <img src="../images/${compMove}-emoji.png" alt="Scissors" class="move-icon">
   Computer`;
}
function updateScoreElement(){
   document.querySelector('.js-score').innerHTML=`Wins: ${score.wins} , Losses: ${score.losses} , Ties: ${score.ties}`;
}