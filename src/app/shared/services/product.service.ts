import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public listProducts:Products[] = []
  public baseUrl: string = 'https://fakestoreapi.com';

  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<Products[]>{
    return this.httpClient.get<Products[]>(this.baseUrl+"/products")
  }
}
