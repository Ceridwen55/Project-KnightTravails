//Define how knight moves

const knightMoves = (start,end) =>
{
    //This is how the knight moves
    const moves = 
    [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ];


    // Using BFS to track how the knight moves
    const queue = [[start,[start]]];
    const beenThere = new Set();
    beenThere.add(start.toString());




};