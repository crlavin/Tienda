import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-modificar-producto',
  templateUrl: './modificar-producto.page.html',
  styleUrls: ['./modificar-producto.page.scss'],
})
export class ModificarProductoPage {

  nombreProducto: string = '';
  precioProducto: number = 0;
  codigoProducto: string = '';
  imagenProducto: string = '';
  descProducto: string = '';
  stockProducto: number = 0;
  tipoProducto: string = '';

  constructor(private firestore: AngularFirestore) {}

  modificarProducto() {
    const productId = this.codigoProducto; // Obtener el ID del producto desde el input
    const updatedData = {
      nombre: this.nombreProducto,
      precio: this.precioProducto,
      imagen_url: this.imagenProducto,
      descripcion: this.descProducto,
      stock: this.stockProducto,
      tipo: this.tipoProducto,
    };

    this.updateProduct(productId, updatedData);
  }

  private updateProduct(productId: string, updatedData: any) {
    const productRef = this.firestore.collection('Producto').doc(productId);

    // Utiliza el método 'update' para modificar el producto existente
    return productRef.update(updatedData)
      .then(() => {
        console.log('Producto actualizado con éxito');
      })
      .catch(error => {
        console.error('Error al actualizar el producto: ', error);
      });
  }
}