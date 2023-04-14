// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
const info = document.getElementById('info');
const btnPlay = document.getElementById('btnPlay');

btnPlay.addEventListener('click', play);

var tabuleiro =
  ' 1 | 2 | 3 <br>----------<br> 4 | 5 | 6 <br>----------<br> 7 | 8 | 9 <br><br>';
var jogador = 'X';

appDiv.innerHTML = tabuleiro;

function play() {
  info.innerText = 'Jogador X: 1\nJogador O: 0\n\n';

  pos = prompt('Jogador ' + jogador);

  if (isMoveValid()) {
    tabuleiro = tabuleiro.replace(pos, jogador);
    if (jogador === 'X') jogador = 'O';
    else jogador = 'X';
    appDiv.innerHTML = tabuleiro;
  }
}

// Validar se a posiçãao é valida
function isMoveValid() {
  return true;
}
