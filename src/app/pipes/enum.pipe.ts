import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enum'
})
export class EnumPipe implements PipeTransform {

  transform(value: any): any {
    return Object.keys(value).filter(e => !isNaN(+e)).map(o => { return { index: +o, name: value[o] } });
  }

}
