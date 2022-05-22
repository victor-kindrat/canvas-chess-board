let board = document.getElementById('main__chess-board'),
    ctx = board.getContext('2d'),
    rowIndex = 0,
    squareIndex = 0;
board.width = 500;
board.height = 500;
ctx.fillRect(0, 0, 500, 500);
ctx.clearRect(15, 15, 470, 470);
function drawAnChess() {
    ctx.fillRect(30 + (squareIndex * 58.75), 60 + (rowIndex * 58.75), 30, 5);
    ctx.fillRect(36 + (squareIndex * 58.75), 41 + (rowIndex * 58.75), 18, 20);
    ctx.fillRect(32.5 + (squareIndex * 58.75), 38 + (rowIndex * 58.75), 25, 5);
    ctx.fillRect(32.5 + (squareIndex * 58.75), 25 + (rowIndex * 58.75), 5, 10);
    ctx.fillRect(42.5 + (squareIndex * 58.75), 20 + (rowIndex * 58.75), 5, 15);
    ctx.fillRect(52.5 + (squareIndex * 58.75), 25 + (rowIndex * 58.75), 5, 10);

}
for (let i = 0; i<8; i++) {
    for (let j = 0; j<=8; j++) {
        if (j % 2 === 0) {
            ctx.fillStyle = '#855D3A';
            ctx.fillRect(15 + (squareIndex * 58.75), 15 + (rowIndex * 58.75), 58.75, 58.75);
        } else {
            ctx.fillStyle = '#EADDCA';
            ctx.fillRect(15 + (squareIndex * 58.75), 15 + (rowIndex * 58.75), 58.75, 58.75);
        }
        if (rowIndex <= 1) {
            ctx.fillStyle = '#ffffff';
            drawAnChess();
        } else if (rowIndex >= 6) {
            ctx.fillStyle = '#343434';
            drawAnChess();
        }
        squareIndex === 7 ? squareIndex = 0 : squareIndex++;
    }
    rowIndex++
}
