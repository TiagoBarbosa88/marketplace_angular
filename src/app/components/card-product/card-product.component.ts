import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/shared/models/products';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit{
  listProducts: Products[] = []

  constructor(private productService: ProductService){}

  ngOnInit(): void {
      this.productService.getProducts().subscribe((product) => {
        this.listProducts = product;
        console.log(this.listProducts)
      })
  }
}
