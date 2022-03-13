import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeWhiteSpace'
})
export class RemoveWhiteSpacePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/\s/g, '');
  }

}
