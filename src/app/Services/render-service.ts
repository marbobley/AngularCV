import { Injectable } from '@angular/core';
import { BitArray } from '../Types/BitArray';
@Injectable({
  providedIn: 'root',
})
export class RenderService {
  private localBitArray: BitArray[] = [];

  render(
    gameBoard: BitArray[],
    ctx: CanvasRenderingContext2D | null,
    resolution: number
  ) {
    const c = ctx;
    const res = resolution;
    gameBoard.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (c) {
          c?.beginPath();
          c?.rect(colIndex * res, rowIndex * res, res, res);
          c.fillStyle = cell ? 'black' : 'white';
          c?.fill();
          //c?.stroke();
        }
      });
    });
  }

  animate(
    gameBoard: BitArray[],
    ctx: CanvasRenderingContext2D | null,
    nextGen: (nextGen: BitArray[]) => BitArray[],
    resolution: number
  ) {
    requestAnimationFrame(() =>
      this.animate(gameBoard, ctx, nextGen, resolution)
    );
    this.render(gameBoard, ctx, resolution);
    gameBoard = nextGen(gameBoard);
    this.localBitArray = gameBoard;
  }

  animateWithInterval(
    gameBoard: BitArray[],
    ctx: CanvasRenderingContext2D | null,
    nextGen: (nextGen: BitArray[]) => BitArray[],
    resolution: number
  ): number {
    return setInterval(() => {
      this.render(gameBoard, ctx, resolution);
      gameBoard = nextGen(gameBoard);
      this.localBitArray = gameBoard;
    }, 10);
  }

  get LocalBitArray() {
    return this.localBitArray;
  }
}
