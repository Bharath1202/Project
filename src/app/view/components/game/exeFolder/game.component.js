"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GameComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var GameComponent = /** @class */ (function () {
    function GameComponent(gameService) {
        this.gameService = gameService;
        this.name = 0;
        this.timeInSecs = 1 * 20;
        this.periodTable = [];
        this.numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = rxjs_1.interval(1000);
        data.subscribe(function (r) {
            _this.name += 1;
            _this.tick();
        });
        var s = rxjs_1.interval(120000);
        s.subscribe(function (res) {
            _this.getGameData();
        });
    };
    GameComponent.prototype.getGameData = function () {
        var _this = this;
        this.gameService.gameData().subscribe(function (res) {
            console.log(res);
            _this.periodTable = res === null || res === void 0 ? void 0 : res.res;
        }, function (error) {
            console.log(error);
        });
    };
    GameComponent.prototype.startTimer = function (secs) {
        this.timeInSecs = parseInt(secs);
    };
    GameComponent.prototype.tick = function () {
        this.timeInSecs = parseInt(this.timeInSecs);
        var secs = this.timeInSecs;
        if (secs > 0) {
            this.timeInSecs--;
        }
        else {
            this.startTimer(1 * 20);
        }
        var hours = Math.floor(secs / 3600);
        secs %= 3600;
        var mins = Math.floor(secs / 60);
        secs %= 60;
        var time = ((hours < 10) ? "0" : "") + hours + ":" + ((mins < 10) ? "0" : "") + mins + ":" + ((secs < 10) ? "0" : "") + secs;
        document.getElementById("countdown").innerHTML = time;
    };
    __decorate([
        core_1.ViewChild('cd', { static: false })
    ], GameComponent.prototype, "someInput");
    GameComponent = __decorate([
        core_1.Component({
            selector: 'app-game',
            templateUrl: './game.component.html',
            styleUrls: ['./game.component.scss']
        })
    ], GameComponent);
    return GameComponent;
}());
exports.GameComponent = GameComponent;
