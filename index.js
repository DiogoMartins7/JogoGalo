// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const info = document.getElementById('info');


//var tabuleiro =' 1 | 2 | 3 <br>----------<br> 4 | 5 | 6 <br>----------<br> 7 | 8 | 9 <br>';
var tabuleiro =' 1 | 2 | 3 \n----------\n 4 | 5 | 6 \n----------\n 7 | 8 | 9';
var pos = 'test'
var jogador = 'X'

function start() {
  info.innerText = 'Jogador X: 1 Jogador O: 0'

  while (Number(pos) !== 0){
    //appDiv.innerHTML = tabuleiro;
    //console.log(tabuleiro)
    print();
    pos = prompt("Jogador "  + jogador);
    if (jogadaValida(pos)) {
      tabuleiro = tabuleiro.replace(pos, jogador);
      if (jogador === 'X')
        jogador = 'O'
      else
        jogador = 'X'
    }
  }
}

function jogadaValida(pos) {
  //tabuleiro.(pos)
  return true;
  return fasLe;
}

function finished() {
  
}
//
function print() {
  console.log(tabuleiro);
}


//start();