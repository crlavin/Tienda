import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.page.html',
  styleUrls: ['./eliminar-producto.page.scss'],
})
export class EliminarProductoPage {

  productId: string = '';

  constructor(private firestore: AngularFirestore) { }

  async eliminarProducto() {
    try {
      const productRef = this.firestore.collection('Producto').doc(this.productId);

      // Obtiene la instantánea del documento y espera a que se resuelva la promesa.
      const productSnapshot = await productRef.get().toPromise();

      if (productSnapshot && productSnapshot.exists) {
        await productRef.delete();
        console.log('Producto eliminado con ID:', this.productId);

        // Limpia el campo de entrada después de eliminar el producto.
        this.productId = '';
      } else {
        console.log('No se encontró ningún producto con el ID proporcionado.');
      }
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  }
}
