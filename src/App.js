import logo from './logo.svg';
import './App.css';

const Computerchoicedisplay = document.getElementById('Computerchoicedisplay');
const userchoicedisplay = document.getElementById('userchoicedisplay');
const resultdisplay = document.getElementById('resultdisplay');
const possibleChoice = document.querySelectorAll('button');
let userchoice
let computerchoice
let result
function App() {
  possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
    userchoice=e.target.id
    userchoicedisplay.innerHTML = userchoice;
    generatecomputerchoice();
    getresult();
  }));
  
}

function generatecomputerchoice() {
  const randomnumber = Math.floor(Math.random()*3)+1;
  if(randomnumber ==1)
  {
    computerchoice = 'rock';
  }
  if(randomnumber == 2)
  {
    computerchoice = 'scissors';

  }
  if(randomnumber == 3)
  {
    computerchoice = 'paper';
  }
    Computerchoicedisplay.innerHTML= computerchoice;
}


function getresult()
{
  if(computerchoice === userchoice)
  {
    result = 'its a draw'
  }
  if(computerchoice == 'rock'  &&  userchoice =='paper')
  {
    result = 'you win!'
  }
  if(computerchoice == 'paper'  &&  userchoice =='scissor')
  {
    result = 'you win!'
  }
  if(computerchoice == 'rock'  &&  userchoice =='scissor')
  {
    result = 'you lost!'
  }
  
  resultdisplay.innerHTML=result;
}
export default App;
