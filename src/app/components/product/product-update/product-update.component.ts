import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../product.service";
import { Product } from "../product.model";

@Component({
  selector: "app-product-update",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    this.productService.readById(id).subscribe((res) => {
      this.product = res;
    });
  }
  updateProduct(product): void {
    this.productService.update(product).subscribe((res) => {
      this.productService.showMessage("Produto Atualizado com sucesso");
      this.router.navigate(["/products"]);
    });
  }
  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
