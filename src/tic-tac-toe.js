class TicTacToe {
    constructor() {
        this._curSymb = 'x';
        this._winner = null;
        this._count = 0;
        this._isDraw = false;
        this._col = 3;
        this._row = 3;
        this._field = new Array(this._row);
        for (var i = 0; i < this._row; i++) {
            this._field[i] = new Array(this._col);
            for (var j = 0; j < this._col; j++) {
                this._field[i][j] = null;
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this._curSymb;
    }

    changeSymbol() {
        if (this._curSymb == 'x') {
            this._curSymb = 'o';
        }
        else {
            this._curSymb = 'x';
        }
    }

    nextTurn(rowIndex, columnIndex) {
        if (this._field[rowIndex][columnIndex] == null) {
            this._field[rowIndex][columnIndex] = this._curSymb;
            this._count++;
            
            // check column
            for (var i = 0; i < this._col; i++) {
                if (this._field[rowIndex][i] != this._curSymb)
                    break;
                if (i == this._col - 1) {
                    this._winner = this._curSymb;
                    this.changeSymbol();
                    return;
                } 
            }
            
            // check row
            for (var i = 0; i < this._row; i++) {
                if (this._field[i][columnIndex] != this._curSymb)
                    break; 
                if (i == this._row - 1) {
                    this._winner = this._curSymb;
                    this.changeSymbol();
                    return;
                }
            }

            //check diagonals
            if (rowIndex == columnIndex) {
                for (var i = 0; i < this._row; i++) {
                    if (this._field[i][i] != this._curSymb)
                        break;
                    if (i == this._row -1) {
                        this._winner = this._curSymb;
                        this.changeSymbol();
                        return;
                    }
                }
            }

            if (rowIndex + columnIndex == this._row - 1) {
                for (var i = 0; i < this._row; i++) {
                    if (this._field[i][(this._row - 1) -i] != this._curSymb)
                        break;
                    if (i == this._row -1) {
                        this._winner = this._curSymb;
                        this.changeSymbol();
                        return;
                    }
                }
            }

            if (this._count == (this._row * this._col)) {
                this._isDraw = true;
                
            }
            
            this.changeSymbol();
            return false;
        }
        return true;
    }

    isFinished() {
        if (this._winner != null || this._isDraw == true) {
            return true;
        }
        else
            return false;
    }

    getWinner() {
        return this._winner;
    }

    noMoreTurns() {
        if (this._count == this._row * this._col)
            return true;
        return false;
    }

    isDraw() {
        return this._isDraw;
    }

    getFieldValue(rowIndex, colIndex) {
        return this._field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
