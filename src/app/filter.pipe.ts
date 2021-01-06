import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterString: string[], propName: string): any[] {

    const resultArray = [];
    if (value.length === 0 || propName === '') {
      return value;
    }


    for (const item of value) {
      if (filterString.includes(item[propName])) {
        //if the brands array include an item.brand, push it to the empty array
        resultArray.push(item);
      }
    }
    return resultArray;

    
  }

}

/////////////MISTAKE//////
// const shoes = value.map( item => { 
//   Object.values(item)
//   return item;
//   //shoes should now be an Array of Arrays with just the values from the products object
// });

// shoes.map( shoe => {
//   if (shoe.includes(filterString)) {
//     resultArray.push(shoe);
//   }
// })
/////////////MISTAKE//////


//const shoes = value.flatMap( item => { return Object.values(item)})
// if (filterString)