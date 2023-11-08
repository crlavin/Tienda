import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage {

  constructor(private router: Router, private firestore: AngularFirestore) { }
  obtenerHistorialDePedidos(): Observable<any[]> {
    // Obtener una colección de "pedidos" en Firestore
    return this.firestore.collection('pedidos').snapshotChanges();
  }
  home() {
    this.router.navigate(['/home']);

  }

}
