import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval, timer } from 'rxjs';
import { GameService } from '../../service/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {
  @ViewChild('cd', { static: false }) someInput: GameComponent;
  public name = 0;
  public timeInSecs: any = 1 * 20;
  public ticker;
  public numberList = [0,1,2,3,4,5,6,7,8,9]
  constructor(private gameService:GameService) {
  }

  ngOnInit(): void {

    let data = interval(1000);
    data.subscribe(r => {
      this.name += 1;
    this.getGameData();

      this.tick();
    })
  }
  getGameData(){
    this.gameService.gameData().subscribe(res=>{
      console.log(res);
    },(error)=>{
      console.log(error);
    })
  }
  startTimer(secs) {
    this.timeInSecs = parseInt(secs);
  }

  tick() {
    this.timeInSecs = parseInt(this.timeInSecs);
    var secs = this.timeInSecs
    if (secs > 0){
      this.timeInSecs--;
    }
    else {
      this.startTimer(1*20)
    }
    var hours = Math.floor(secs / 3600);
    secs %= 3600;
    var mins = Math.floor(secs / 60);
    secs %= 60;
    var pretty = ((hours < 10) ? "0" : "") + hours + ":" + ((mins < 10) ? "0" : "") + mins + ":" + ((secs < 10) ? "0" : "") + secs;
    document.getElementById("countdown").innerHTML = pretty;
  }

}
