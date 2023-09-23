const chessboard = document.getElementById('chessboard');
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const block = document.createElement('div');
                if ((row + col) % 2 === 0) {
                    block.classList.add('white');
                } else {
                    block.classList.add('black');
                }
                chessboard.appendChild(block);
            }
        }
const count = 8;
const size = 5;
let x = 0;
let y = 0;
troop = document.getElementById("troop");
function move(dir){
    switch(dir){
        case "up": console.log("hello")
        case "down":
        case "left": 
        case "right":
    }
}