import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { Producto } from 'src/app/producto';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage {
  itemsInCart: Producto[] = [];
  constructor(private router: Router, private cartService: CarritoService) { }

  ngOnInit() {
    this.loadItemsInCart();
  }
  loadItemsInCart() {
    this.cartService.ObtenerProducto().subscribe((data: any) => {
      this.itemsInCart = data.map((e: any) => {
        const producto = e.payload.doc.data() as Producto;
        producto.id = e.payload.doc.id;
        return producto;
      });


    });
  }
  vaciarCarrito() {
    // Llama al servicio para eliminar todos los productos del carrito
    this.cartService.vaciarCarrito();
    // Luego, actualiza la lista de productos en el carrito
    this.loadItemsInCart();
  }
  calcularTotal(): number {
    let total = 0;
    for (const item of this.itemsInCart) {
      total += item.precio * item.cantidad;
    }
    return total;
  }
  
  home() {
    this.router.navigate(['/home']);

  }

}
