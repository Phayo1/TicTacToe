let circleArray = []
let crossArray = []
const squares = document.querySelectorAll('.square')
let activePlayer = 'circle'
const winCombos = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
]

squares.forEach(square => {
    square.addEventListener('click', function(e){
        if(activePlayer === 'circle'){
            if(!circleArray.includes(e.target.id) && e.target.id != ''){
                circleArray.push(parseInt(e.target.id))
            }
            activePlayer = 'cross'
            e.target.classList.add('circle')
        }
        else{
            if(!crossArray.includes(e.target.id) && e.target.id != ''){
                crossArray.push(parseInt(e.target.id))
            }
            activePlayer = 'circle'
            e.target.classList.add('cross')
        }
        winCheck()
    })
})

function winCheck() {
    let resultMessage = '';

    switch (true) {
        case winCombos.some(combo => combo.every(number => circleArray.includes(number))):
            resultMessage = 'Winner!';
            winnerImg = "circle-winner";
            break;
        case winCombos.some(combo => combo.every(number => crossArray.includes(number))):
            resultMessage = 'Winner!';
            winnerImg = "cross-winner";
            break;
        case circleArray.length + crossArray.length === 9:
            resultMessage = 'Draw!';
            winnerImg = "draw";
            break;
        default:
            break;
    }

    if (resultMessage) {
        addWinModal(resultMessage, winnerImg);
    }
}

function addWinModal(winner, winnerImg){
    document.querySelector('.modal-win .winner').classList.add(winnerImg)
    document.querySelector('.modal-win h3').innerText = winner
    document.querySelector('.modal-win').style.display = 'block';
}

function newGame(){
    circleArray = [];
    crossArray = [];

    squares.forEach(
        square => {
            square.classList.remove('circle');
            square.classList.remove('cross');
            document.querySelector('.modal-win .winner').classList.remove("draw")
            document.querySelector('.modal-win .winner').classList.remove("cross-winner")
            document.querySelector('.modal-win .winner').classList.remove("circle-winner")
        }
    )
    document.querySelector('.modal-win').style.display = 'none';
}