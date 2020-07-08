import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../product.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  dataSource: Product[];
  columnsToDisplay = ["name", "price", "id"];
  constructor(private router: Router, private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.listAllProducts().subscribe((res) => {
      console.log(res);
      this.dataSource = res;
      console.log(this.dataSource);
    });
  }

  deleteProduct(id): void {
    this.productService.delete(id).subscribe((res) => {
      this.productService.showMessage("deletado com sucesso");
      this.productService.listAllProducts().subscribe((res) => {
        this.dataSource = res;
      });
    });
  }
}
