
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'MultiplyByX',
})
export class MultiplyByXPipe implements PipeTransform {
  transform(value: number | undefined, multiplicator: number): number {
    if(value === undefined)
        return 0;
    return value*multiplicator;
  }
}