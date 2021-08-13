// An arcade game player wants to climb to the top of the leaderboard and track their ranking. 
// The game uses Dense Ranking, so its leaderboard works like this:

// The player with the highest score is ranked number  on the leaderboard.
// Players who have equal scores receive the same ranking number, and the next player(s) receive 
// the immediately following ranking number.
// Example



// The ranked players will have ranks , , , and , respectively. If the player's scores are ,  and , their rankings after each game are ,  and . Return .

// Function Description

// Complete the climbingLeaderboard function in the editor below.

// climbingLeaderboard has the following parameter(s):

// int ranked[n]: the leaderboard scores
// int player[m]: the player's scores
// Returns

// int[m]: the player's rank after each new score
// Input Format

// The first line contains an integer , the number of players on the leaderboard.
// The next line contains  space-separated integers , the leaderboard scores in decreasing order.
// The next line contains an integer, , the number games the player plays.




function climbingLeaderboard(scores, alice) {

    console.log(scores, alice);

    let positions = [];
    let distScore = [...new Set(scores)];
    let aliceIndex = 0;
    let i = distScore.length - 1;
    alice.forEach(element => {

        while (i >= 0) {
            if (element >= distScore[i]) {
                i--;
            } else {
                positions.push(i + 2);
                break;
            }
        }
        if (i < 0) positions.push(1);

    });

    return positions;
}