import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/services/carrito.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage {
  pedidos: Observable<any[]> = new Observable<any[]>();
  constructor(private router: Router,
    private cartService: CarritoService,
    private firestore: AngularFirestore) { }

  ngOnInit() {
    this.pedidos = this.firestore.collection('Pedido').valueChanges();
  }

  eliminarPedido() {
    // Llama al servicio para eliminar todos los productos del carrito
    this.cartService.eliminarPedido();
    // Luego, actualiza la lista de productos en el carrito

  }
  calcularTotal(cantidad: number, precio: number): number {
    return cantidad * precio;
  }

  home() {
    this.router.navigate(['/home']);

  }

}