import { Injectable } from '@angular/core';
import { BitArray } from '../Types/BitArray';
@Injectable({
  providedIn: 'root'
})
export class ComwayService {

    initRandom(boardWidth: number, boardHeight: number, resolution: number) : BitArray[]
    {
        const numOfRows = boardHeight / resolution;
        const numOfCols = boardWidth / resolution;
  
        const oneOrZero = () => (Math.random() > 0.5 ? 1 : 0);
        const board: BitArray[] = new Array(numOfRows)
          .fill(0)
          .map(() => new Array(numOfCols).fill(0).map(oneOrZero));
  
      return board;
    }
     

  init2sur1(boardWidth: number, boardHeight: number, resolution: number) : BitArray[]
  {
    return this.init1sur2(boardWidth,boardHeight,resolution).reverse();
  }

  init1sur2(boardWidth: number, boardHeight: number, resolution: number) : BitArray[]
  {
      const numOfRows = boardHeight / resolution;
      const numOfCols = boardWidth / resolution;

      let flag = false; 

      const oneOrZero = () => {
        flag = !flag;
        if(flag)
        {
          return 1;
        }
        else
        {
          return 0;
        }
      };
      const board: BitArray[] = new Array(numOfRows)
        .fill(0)
        .map(() => new Array(numOfCols).fill(0).map(oneOrZero));

    return board;
  }

  
  public createNextGeneration(board: BitArray[]) : BitArray[]{
    const nextGeneration: BitArray[] = board.map((innerArr) => [...innerArr]);

    board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const rowAbove = board[rowIndex - 1] || [];
        const rowBelow = board[rowIndex + 1] || [];
        const fieldBefore = board[rowIndex][colIndex - 1];
        const fieldAfter = board[rowIndex][colIndex + 1];

        const countOfLivingNeighbors = [
          rowAbove[colIndex - 1],
          rowAbove[colIndex],
          rowAbove[colIndex + 1],
          rowBelow[colIndex - 1],
          rowBelow[colIndex],
          rowBelow[colIndex + 1],
          fieldBefore,
          fieldAfter,
        ].reduce((pv, cv) => {
          if(cv != null)
            return pv + cv; 
          else 
            return pv;
          }
        , 0);

        const becomeLivingCellInAnyCase = countOfLivingNeighbors === 3;
         const keepAlive = cell && countOfLivingNeighbors === 2;

        const newCellValue = becomeLivingCellInAnyCase || keepAlive ? 1 : 0;

        nextGeneration[rowIndex][colIndex] = newCellValue;
      });
    });

    return nextGeneration;
  }
}