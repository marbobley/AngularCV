import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { BitArray } from '../Types/BitArray';
import { ComwayService } from '../Services/comway-service';
import { RenderService } from '../Services/render-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-comway-game',
  imports: [FormsModule],
  templateUrl: './comway-game.html',
  styleUrl: './comway-game.css',
})
export class ComwayGame {
  canvas = viewChild<ElementRef<HTMLCanvasElement>>('gameboard');
  private ctx: CanvasRenderingContext2D | null = null;
  gameBoard: BitArray[] = [];
  private readonly comwayService = inject(ComwayService);
  private readonly renderService = inject(RenderService);

  private intervalId = 0;

  resolution = 5;
  boardWidth = 400;
  boardHeight = 400;

  reset() {
    this.gameBoard = this.comwayService.initRandom(
      this.boardWidth,
      this.boardHeight,
      this.resolution
    );
    this.renderService.render(this.gameBoard, this.ctx, this.resolution);
  }

  init() {
    const can = this.canvas();
    if (can) {
      can.nativeElement.width = this.boardWidth;
      can.nativeElement.height = this.boardHeight;

      this.ctx = can.nativeElement.getContext('2d');
      this.reset();
    }
  }

  playAnimateInterval() {
    if (this.intervalId === 0) {
      this.intervalId = this.renderService.animateWithInterval(
        this.gameBoard,
        this.ctx,
        this.comwayService.createNextGeneration,
        this.resolution
      );
    }
  }

  stopAnimateInterval() {
    clearInterval(this.intervalId);
    this.intervalId = 0;
    this.gameBoard = this.renderService.LocalBitArray;
  }

  onApply() {
    this.stopAnimateInterval();
    this.init();
    console.log(this.boardWidth);
  }
}
