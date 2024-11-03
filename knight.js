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

    // Loop the queue to process each position
    while (queue.length > 0)
    {
        const [current,path] = queue.shift();
        const [x,y] = current;

        if (x === end[0] && y === end[1])
        {
            console.log(`You made it in ${path.length-1} moves, here is the breakdown :`)
            path.forEach((step)) => console.log(step);
            return path
        }

        //EXplore and put limits based on 8 x 8 board limitation

        for (const [dx,dy] of moves )
        {
            const [newX,newY] = [x + dx, y + dy];
            if (newX >= 0 && newX < 8 && newY >=0 && newY < 8)
            {

            }
        }
    }


};