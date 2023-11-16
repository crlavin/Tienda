import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.page.html',
  styleUrls: ['./eliminar-producto.page.scss'],
})
export class EliminarProductoPage {
  idProducto: string="";
  constructor(private firestore: AngularFirestore) { }

  eliminarProducto(idProducto: string) {
    // Lógica para eliminar un producto por su id
    this.firestore.doc('Producto/' + idProducto).delete();
  }
}
