var gGame = null;

function gameStart() {
    gGame = new Game();
    gGame.update();
}

function Game() {
    var _this = this;
    this.walk = new Walking();
    this.walk2 = new Walking2();
    this.update = function () {
        if(f == 0) {
            _this.walk.draw();
            _this.walk.update();
        }else if(f == 3){
            _this.walk2.draw();
            _this.walk2.update();
            console.log(f);
        }
    };
    window.requestAnimationFrame(_this.update);
}