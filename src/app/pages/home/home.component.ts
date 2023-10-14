import { Component, OnInit } from '@angular/core';
import { GameDataService } from 'src/app/services/game-data.service';
import { game } from '../../data/game'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  protected gameDataSet : game[] = []

  constructor(private gameData : GameDataService) {
    this.gameDataSet = gameData.getGameData()
   }

  ngOnInit(): void {
  }

}
