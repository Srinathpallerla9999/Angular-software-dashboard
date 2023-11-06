import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textManipulation'
})
export class TextManipulationPipe implements PipeTransform {

  transform(value: any): any {
    let data = value.split(" ")
    return data[0]
  }


}
