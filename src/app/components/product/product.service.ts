import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  baseUrl = "http://localhost:3000/products";
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  delete(id: string): Observable<Product> {
    return this.http.delete<Product>(`${this.baseUrl}/${id}`);
  }

  readById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

  update(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`;
    return this.http.put<Product>(url, product);
  }

  listAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  showMessage(msg: string): void {
    this.snackBar.open(msg, "undo", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
    });
  }
}
