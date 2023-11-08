import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: 'agregar-producto.page.html',
  styleUrls: ['agregar-producto.page.scss'],
})
export class AgregarProductoPage {
  nombreProducto!: string;
  precioProducto!: number;
  codigoProducto!: string;
  imagenProducto!: string;
  descProducto!: string;
  stockProducto!: number;

  productos: any[] = []; // Aquí puedes almacenar los productos agregados

  agregarProducto() {
    // Valida que los campos no estén vacíos
    if (this.nombreProducto && this.precioProducto && this.codigoProducto && this.imagenProducto && this.descProducto && this.stockProducto) {
      const producto = {


      };

      // Agrega el producto a la lista de productos
      this.productos.push(producto);

      // Limpia los campos del formulario
      this.nombreProducto = '';
      this.precioProducto = 0;
      this.codigoProducto = '';
      this.imagenProducto = '';
      this.descProducto = "";
      this.stockProducto = 0;
    } else {
      // Muestra un mensaje de error si algún campo está vacío
      alert('Por favor, completa todos los campos.');
    }
  }
}
