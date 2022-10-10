import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'soloInicial'
})
export class SoloInicialPipe implements PipeTransform {

  transform(value: string): string {
    
    return value.replace(value, value[0]).toLocaleUpperCase().concat('.');
  }

}
