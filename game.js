module.exports = class Game {
    constructor() {
        this.player1Point = 0;
        this.player2Point = 0;
    }

    isPlayer1Winner() {
        if ((this.player1Point >= 4) && ((this.player1Point - this.player2Point) >= 2)) {
            return true;
        } else {
            return false;
        }
    }

    isPlayer2Winner() {
        if ((this.player2Point >= 4) && ((this.player2Point - this.player1Point) >= 2)) {
            return true;
        } else {
            return false;
        }
    }

    isPlayer1Advantage() {
        if ((this.player1Point >= 3) && ((this.player1Point - this.player2Point) == 1)) {
            return true;
        } else {
            return false;
        }
    }

    isPlayer2Advantage() {
        if ((this.player2Point >= 3) && ((this.player2Point - this.player1Point) == 1)) {
            return true;
        } else {
            return false;
        }
    }

    newSet() {
        this.player1Point = 0;
        this.player2Point = 0;
    }

    showPoints() {
        // console.log(this.player1Point + " - " + this.player2Point);
        return this.player1Point + " - " + this.player2Point;
    }

    player1GetAPoint() {
        this.player1Point++;
    }

    player2GetAPoint() {
        this.player2Point++;
    }

    showScores() {
        if (this.isPlayer1Winner()) {
            // console.log("player 1 wins");
            return "player 1 wins";
        } else if (this.isPlayer2Winner()) {
            // console.log("player 2 wins");
            return "player 2 wins";
        } else if ((this.player1Point > 2) && (this.player2Point > 2)) {
            if (this.player1Point == this.player2Point) {
                // console.log("deduce");
                return "deduce";
            } else {
                if (this.isPlayer1Advantage()) {
                    // console.log("advantage player 1");
                    return "advantage player 1";
                } else if (this.isPlayer2Advantage()) {
                    // console.log("advantage player 2");
                    return "advantage player 2";
                }
            }
        } else {
            // console.log(this.showScore(this.player1Point) + " - " + this.showScore(this.player2Point));
            return this.showScore(this.player1Point) + " - " + this.showScore(this.player2Point);
        }
    }

    showScore(score) {
        switch (score) {
            case 3:
                return "forty";
            case 2:
                return "thirty";
            case 1:
                return "fifteen";
            case 0:
                return "love";
        }
    }
}