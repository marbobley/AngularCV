
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'MultiplyByX',
})
/**
 * Pipe to transform a number
 */
export class MultiplyByXPipe implements PipeTransform {
  /**
   * Transform value with multiply.
   * Example :  10 | MultiplyByX:10 return 100 
   * Example :  5 | MultiplyByX:2 return 10 
   * Example : undefied | MultiplyByX:2 return 0
   * @param value : value to multiply
   * @param multiplicator : factor
   * @returns : result of the transform,  if value is undefined, return 0.
   */
  transform(value: number | undefined, multiplicator: number): number {
    if(value === undefined)
        return 0;
    return value*multiplicator;
  }
}