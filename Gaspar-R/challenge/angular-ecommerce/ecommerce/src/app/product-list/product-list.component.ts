import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;  //products es una propiedad de componente que apunta al array products importado

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('U will be notified when the product goes on  sale');
  }
}
