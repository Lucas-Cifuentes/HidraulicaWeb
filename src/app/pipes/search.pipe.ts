import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultProductos = [];
    for (let producto of value) {
      if (producto.Codigo.indexOf(arg.toUpperCase()) > -1) {
        resultProductos.push(producto);
      }
    }
    return resultProductos;
  }
}
