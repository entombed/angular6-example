import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundingPipe'
})
export class RoundingPipePipe implements PipeTransform {

  transform(value: any, accuracy: number = 2, separator: string = "."): string {
    let roundingNumber: string;
    if (value && typeof value === "number") {
      let d = 1;
      for (let i = 0; i < accuracy; i++) {
        d = d * 10;
      }
      let z = (Math.round(value * d) / d).toString();
      if (z.indexOf(".") == -1) {
        z = `${z}.0`;
      };
      let numArray = z.split(".");
      let j = numArray[1].length;
      if (j < accuracy) {
        for (let i = j; i < accuracy; i++) {
          numArray[1] = `${numArray[1]}0`;
        }
      }
      roundingNumber = numArray.join(separator);
    } else {
      roundingNumber = null;
    }
    return roundingNumber;
  }

}
