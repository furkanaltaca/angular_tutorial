import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { AlertifyService } from '../services/alertify.service';
import { ProductService } from '../services/product.service';

declare let alertify: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService],
})
export class ProductComponent implements OnInit {
  constructor(
    private alertifyService: AlertifyService,
    private productService: ProductService
  ) {}

  title = 'Product List';
  filterText = '';
  products: Product[];

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToCart(product: Product) {
    this.alertifyService.success(product.name + ' added to cart.');
  }
}

// {
//   id: 1,
//   name: 'Laptop',
//   price: 3000,
//   categoryId: 1,
//   description: 'Dell Latitude',
//   imageUrl:
//     'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
// },
// {
//   id: 2,
//   name: 'Mouse',
//   price: 200,
//   categoryId: 1,
//   description: 'Asus',
//   imageUrl:
//     'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=747&q=80',
// },
// {
//   id: 3,
//   name: 'Keyboard',
//   price: 400,
//   categoryId: 1,
//   description: 'Rampage',
//   imageUrl:
//     'https://images.unsplash.com/photo-1572916118970-fb5c8a1cb3d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
// },
// {
//   id: 4,
//   name: 'Drone',
//   price: 100,
//   categoryId: 2,
//   description: 'DJI',
//   imageUrl:
//     'https://images.unsplash.com/photo-1564518384646-b72509b610b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
// },
// {
//   id: 5,
//   name: 'Monitor',
//   price: 1000,
//   categoryId: 1,
//   description: 'Casper',
//   imageUrl:
//     'https://images.unsplash.com/photo-1551645120-d70bfe84c826?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
// },
// {
//   id: 6,
//   name: 'iPhone',
//   price: 4000,
//   categoryId: 2,
//   description: 'Apple',
//   imageUrl:
//     'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
// },
// {
//   id: 7,
//   name: 'MacBook',
//   price: 9000,
//   categoryId: 1,
//   description: 'Apple',
//   imageUrl:
//     'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
// },
