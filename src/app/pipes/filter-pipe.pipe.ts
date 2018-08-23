import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  /**
   *
   *
   * @param {any[]} data - массив объектов
   * @param {string} strFilter - строка которую ищем
   * @param {string} field - ключ объекта хранящее значение
   * @param {boolean} caseSensitive - чувствительность к ргистру
   * @returns {*} - массив найденых значений
   * @memberof FilterPipePipe
   */
  transform(data: any[], strFilter: string, field: string, caseSensitive: boolean): any {
    if (data.length === 0 || strFilter === "") {
      return data;
    } else {
      return data.filter(item => {
        if (caseSensitive) {
          // поиск с учетом регистра
          return item[field].indexOf(strFilter) !== -1;
        } else {
          // поиск без учета регистра
          return item[field].toLowerCase().indexOf(strFilter.toLowerCase()) !== -1;
        }
      })
    }
  }

}
