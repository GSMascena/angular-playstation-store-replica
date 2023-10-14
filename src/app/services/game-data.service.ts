import { Injectable } from '@angular/core';
import {gameDatabase} from '../data/psnGameDatabase'

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor() { }

  getGameData () {
    return gameDatabase
  }
}
