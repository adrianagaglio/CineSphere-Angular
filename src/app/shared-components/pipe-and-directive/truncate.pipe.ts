import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, arg: number = 30): string {
    if (value.length <= arg) {
      return value;
    }
    return value.slice(0, arg) + '...';
  }
}
