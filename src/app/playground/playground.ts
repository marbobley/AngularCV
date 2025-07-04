import { Component } from '@angular/core';
import { ComwayGame } from "../comway-game/comway-game";
import { Dice } from "../dice/dice";

@Component({
  selector: 'app-playground',
  imports: [ComwayGame, Dice],
  templateUrl: './playground.html',
  styleUrl: './playground.css'
})
export class Playground {

}
