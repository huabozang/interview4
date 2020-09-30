var cvs = document.getElementById("cvs");
var ctx = cvs.getContext('2d');
var gGame = null;
var img = new Image();
var envelope = new Image();
var signpost = new Image();
var _key = new Image();
var _knapsack = new Image();
var _door = new Image();
var _bear = new Image();
var _mirror = new Image();
var _key2 = new Image();
var knapsack = [0,0,0,0,0,0,0,0,0,0];
var f = 0;
img.src = 'img/136-Bartender01.png';
envelope.src = 'img/获得奇怪的信件.png';
signpost.src = 'img/路标.png';
_key.src = 'img/钥匙png.png';
_knapsack.src = 'img/背包栏.png';
_door.src = 'img/上锁的门.png';
_bear.src = 'img/玩具熊.png';
_mirror.src = 'img/镜子.png';
_key2.src = 'img/小屋钥匙.png';
var _background = ["img/数组地图1.png","img/Map003.png","img/Map016.png","img/Map001.png"];
cvs.style.backgroundImage = 'url(' + _background[f] + ')';
function gameStart() {
    gGame = new Game();
    gGame.update();
}
function Walking() {
    var _this = this;
    this.xFrame = 0;
    this.yFrame = 0;
    this.x = 918;
    this.y = 810;
    this.draw = function () {
        ctx.clearRect(0,0,cvs.width,cvs.height);
        ctx.beginPath();
        ctx.drawImage(img,_this.xFrame * img.width/4,_this.yFrame * img.height/4,img.width/4,img.height/4,_this.x,_this.y,img.width/4,img.height/4);
    }
    this.update = function () {
        document.onkeydown = function (e) {
            if(f == 0){  //当场景为森林时
                switch (e.keyCode){
                    case 37:
                        if(Math.floor(_this.x/54)==0){
                            //_this.yFrame = 1;
                            //_this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }else if(Map1[Math.floor(_this.y/54)][Math.floor(_this.x/54)-1] == 2){
                           // _this.yFrame = 1;
                            //_this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }else if (Map1[Math.floor(_this.y/54)][Math.floor(_this.x/54)-1] == 5){
                            //_this.yFrame = 1;
                            //_this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            ctx.drawImage(signpost,0,0,signpost.width,signpost.height,40,260,signpost.width,signpost.height);
                            return;
                        }else if(Map1[Math.floor(_this.y/54)][Math.floor(_this.x/54)-1] == 8){
                            //_this.yFrame = 1;
                            _this.x = 540;
                            _this.y = 756;
                            //_this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            f = 3;
                            cvs.style.backgroundImage = 'url(' + _background[f] + ')';
                            break;
                        }
                        _this.yFrame = 1;
                        _this.x -= 54;
                        _this.draw();
                        _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                        break;
                    case 38:
                        if(Math.floor(_this.y/54)==0){
                            _this.yFrame = 3;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }else if(Map1[Math.floor(_this.y/54)-1][Math.floor(_this.x/54)] == 2){
                            _this.yFrame = 3;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }else if (Map1[Math.floor(_this.y/54)-1][Math.floor(_this.x/54)] == 5){
                            _this.yFrame = 3;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            ctx.drawImage(signpost,0,0,signpost.width,signpost.height,40,260,signpost.width,signpost.height);
                            return;
                        }else if (Map1[Math.floor(_this.y/54)-1][Math.floor(_this.x/54)] == 4){
                            knapsack[0] = 1;
                            console.log(knapsack);
                            _this.yFrame = 3;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            ctx.drawImage(_key,0,0,_key.width,_key.height,40,260,_key.width,_key.height);
                            return;
                        }else if(Map1[Math.floor(_this.y/54)-1][Math.floor(_this.x/54)] == 66){
                            _this.yFrame = 3;
                            _this.x = 540;
                            _this.y = 756;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            f = 1;
                            cvs.style.backgroundImage = 'url(' + _background[f] + ')';
                            break;
                        }else if(Map1[Math.floor(_this.y/54)-1][Math.floor(_this.x/54)] == 8){
                            _this.yFrame = 3;
                            _this.x = 540;
                            _this.y = 756;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            f = 3;
                            cvs.style.backgroundImage = 'url(' + _background[f] + ')';
                            break;
                        }
                        _this.yFrame = 3;
                        _this.y -= 54;
                        _this.draw();
                        _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                        break;
                    case 39:
                        if(Math.floor(_this.x/54)==19){
                            _this.yFrame = 2;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }else if(Map1[Math.floor(_this.y/54)][Math.floor(_this.x/54)+1] == 2){
                            _this.yFrame = 2;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }
                        _this.yFrame = 2;
                        _this.x += 54;
                        _this.draw();
                        _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                        break;
                    case 40:
                        if(Math.floor(_this.y/54)==15){
                            _this.yFrame = 0;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }else if(Map1[Math.floor(_this.y/54)+1][Math.floor(_this.x/54)] == 2){
                            _this.yFrame = 0;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }else if (Map1[Math.floor(_this.y/54)+1][Math.floor(_this.x/54)] == 7){
                            knapsack[1] = 1;
                            console.log(knapsack);
                            _this.yFrame = 0;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            ctx.drawImage(envelope,0,0,envelope.width,envelope.height,40,260,envelope.width,envelope.height);
                            return;
                        }
                        _this.yFrame = 0;
                        _this.y += 54;
                        _this.draw();
                        _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                        break;
                }
            }else if(f == 3){  //当场景为地洞时
                    switch (e.keyCode){
                        case 37:
                            if(Math.floor(_this.x/54)==0){
                                _this.yFrame = 1;
                                _this.draw();
                                _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                                return;
                            }else if(Map2[Math.floor(_this.y/54)][Math.floor(_this.x/54)-1] == 2){
                                _this.yFrame = 1;
                                _this.draw();
                                _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                                return;
                            }
                            _this.yFrame = 1;
                            _this.x -= 54;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            break;
                        case 38:
                            if(Math.floor(_this.y/54)==0){
                                _this.yFrame = 3;
                                _this.draw();
                                _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                                return;
                            }else if(Map2[Math.floor(_this.y/54)-1][Math.floor(_this.x/54)] == 2){
                                _this.yFrame = 3;
                                _this.draw();
                                _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                                return;
                            }
                            _this.yFrame = 3;
                            _this.y -= 54;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            break;
                        case 39:
                            if(Math.floor(_this.x/54)==19){
                                _this.yFrame = 2;
                                _this.draw();
                                _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                                return;
                            }else if(Map2[Math.floor(_this.y/54)][Math.floor(_this.x/54)+1] == 2){
                                _this.yFrame = 2;
                                _this.draw();
                                _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                                return;
                            }
                            _this.yFrame = 2;
                            _this.x += 54;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            break;
                        case 40:
                            if(Math.floor(_this.y/54)==15){
                                _this.yFrame = 0;
                                _this.draw();
                                _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                                return;
                            }else if(Map2[Math.floor(_this.y/54)+1][Math.floor(_this.x/54)] == 2){
                                _this.yFrame = 0;
                                _this.draw();
                                _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                                return;
                            } else if(Map2[Math.floor(_this.y/54)+1][Math.floor(_this.x/54)] == 18){
                                _this.yFrame = 0;
                                _this.x = 810;
                                _this.y = 54;
                                _this.draw();
                                _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                                f = 0;
                                cvs.style.backgroundImage = 'url(' + _background[f] + ')';
                                return;
                            }else if(Map2[Math.floor(_this.y/54)+1][Math.floor(_this.x/54)] == 6){
                                if(knapsack[0] == 1){
                                    _this.yFrame = 0;
                                    _this.x = 216;
                                    _this.y = 270;
                                    _this.draw();
                                    _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                                    f = 2;
                                    cvs.style.backgroundImage = 'url(' + _background[f] + ')';
                                    return;
                                }else{
                                    _this.yFrame = 0;
                                    _this.draw();
                                    _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                                    ctx.drawImage(_door,0,0,_door.width,_door.height,40,260,_door.width,_door.height);
                                    return;
                                }
                            }
                            _this.yFrame = 0;
                            _this.y += 54;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            break;
                    }
            }else if(f == 1){  //当场景为城堡一层时
                switch (e.keyCode){
                    case 37:
                        if(Math.floor(_this.x/54)==0){
                            _this.yFrame = 1;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }else if(Map3[Math.floor(_this.y/54)][Math.floor(_this.x/54)-1] == 2){
                            _this.yFrame = 1;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }
                        _this.yFrame = 1;
                        _this.x -= 54;
                        _this.draw();
                        _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                        break;
                    case 38:
                        if(Math.floor(_this.y/54)==0){
                            _this.yFrame = 3;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }else if(Map3[Math.floor(_this.y/54)-1][Math.floor(_this.x/54)] == 2){
                            _this.yFrame = 3;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }else if(Map3[Math.floor(_this.y/54)-1][Math.floor(_this.x/54)] == 12){
                            if(knapsack[3] == 1){
                                _this.yFrame = 3;
                                _this.x = 432;
                                _this.y = 756;
                                _this.draw();
                                _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                                f = 2;
                                cvs.style.backgroundImage = 'url(' + _background[f] + ')';
                                break;
                            }else{
                                _this.yFrame = 3;
                                _this.draw();
                                _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                                ctx.drawImage(_door,0,0,_door.width,_door.height,40,260,_door.width,_door.height);
                                return;
                            }
                        }
                        _this.yFrame = 3;
                        _this.y -= 54;
                        _this.draw();
                        _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                        break;
                    case 39:
                        if(Math.floor(_this.x/54)==19){
                            _this.yFrame = 2;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }else if(Map3[Math.floor(_this.y/54)][Math.floor(_this.x/54)+1] == 2){
                            _this.yFrame = 2;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }
                        _this.yFrame = 2;
                        _this.x += 54;
                        _this.draw();
                        _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                        break;
                    case 40:
                        if(Math.floor(_this.y/54)==15){
                            _this.yFrame = 0;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }else if(Map3[Math.floor(_this.y/54)+1][Math.floor(_this.x/54)] == 2){
                            _this.yFrame = 0;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }else if(Map3[Math.floor(_this.y/54)+1][Math.floor(_this.x/54)] == 19){
                            _this.yFrame = 0;
                            _this.x = 378;
                            _this.y = 162;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            f = 0;
                            cvs.style.backgroundImage = 'url(' + _background[f] + ')';
                            return;
                        }
                        _this.yFrame = 0;
                        _this.y += 54;
                        _this.draw();
                        _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                        break;
                }
            }else if(f == 2){  //当场景为废弃房屋时
                switch (e.keyCode){
                    case 37:
                        if(Map4[Math.floor(_this.y/54)][Math.floor(_this.x/54)-1] == 2){
                            _this.yFrame = 1;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }
                        _this.yFrame = 1;
                        _this.x -= 54;
                        _this.draw();
                        _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                        break;
                    case 38:
                        if(Map4[Math.floor(_this.y/54)-1][Math.floor(_this.x/54)] == 2){
                            _this.yFrame = 3;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }else if(Map4[Math.floor(_this.y/54)-1][Math.floor(_this.x/54)] == 15){
                            _this.yFrame = 3;
                            _this.x = 108;
                            _this.y = 702;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            f = 3;
                            cvs.style.backgroundImage = 'url(' + _background[f] + ')';
                            break;
                        }else if(Map4[Math.floor(_this.y/54)-1][Math.floor(_this.x/54)] == 20){
                            _this.yFrame = 3;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            ctx.drawImage(_mirror,0,0,_mirror.width,_mirror.height,40,260,_mirror.width,_mirror.height);
                            return;
                        }else if(Map4[Math.floor(_this.y/54)-1][Math.floor(_this.x/54)] == 21){
                            knapsack[3] = 1;
                            console.log(knapsack);
                            _this.yFrame = 3;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            ctx.drawImage(_key2,0,0,_key2.width,_key2.height,40,260,_key2.width,_key2.height);
                            return;
                        }
                        _this.yFrame = 3;
                        _this.y -= 54;
                        _this.draw();
                        _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                        break;
                    case 39:
                        if(Map4[Math.floor(_this.y/54)][Math.floor(_this.x/54)+1] == 2){
                            _this.yFrame = 2;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }else if(Map4[Math.floor(_this.y/54)][Math.floor(_this.x/54)+1] == 17){
                            knapsack[2] = 1;
                            console.log(knapsack);
                            _this.yFrame = 2;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            ctx.drawImage(_bear,0,0,_bear.width,_bear.height,40,260,_bear.width,_bear.height);
                            return;
                        }
                        _this.yFrame = 2;
                        _this.x += 54;
                        _this.draw();
                        _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                        break;
                    case 40:
                        if(Map4[Math.floor(_this.y/54)+1][Math.floor(_this.x/54)] == 2){
                            _this.yFrame = 0;
                            _this.draw();
                            _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                            return;
                        }else if(Map4[Math.floor(_this.y/54)+1][Math.floor(_this.x/54)] == 16){
                            if(knapsack[3] == 1){
                                _this.yFrame = 0;
                                _this.x = 918;
                                _this.y = 162;
                                _this.draw();
                                _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                                f = 1;
                                cvs.style.backgroundImage = 'url(' + _background[f] + ')';
                                return;
                            }else{
                                _this.yFrame = 0;
                                _this.draw();
                                _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                                ctx.drawImage(_door,0,0,_door.width,_door.height,40,260,_door.width,_door.height);
                                return;
                            }
                        }
                        _this.yFrame = 0;
                        _this.y += 54;
                        _this.draw();
                        _this.xFrame = ++_this.xFrame >= 4 ? 0  : _this.xFrame;
                        break;
                }
            }
        }
        console.log(_this.x,_this.y);
        var timer = setTimeout(_this.update,1000);
    }
}
function Game() {
    var _this = this;
    this.walk = new Walking();
    this.update = function () {
        _this.walk.draw();
        _this.walk.update();
    };
    window.requestAnimationFrame(_this.update);
};