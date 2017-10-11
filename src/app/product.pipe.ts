import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product-list/product';

@Pipe({
  name: 'productFilter'
})
export class ProductPipe implements PipeTransform {

  transform(value: IProduct[], filterBy: string): IProduct[] {
    filterBy = filterBy ? filterBy.toLowerCase() : '';
    if(!value) return value;
    return value.filter((product: IProduct) => product.productName.toLowerCase()
                            .indexOf(filterBy) !== -1
                      )
  }

}
