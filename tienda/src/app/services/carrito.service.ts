import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Producto } from '../producto';


@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(private firestore: AngularFirestore) { }
  agregarProducto(producto: Producto) {
    const productoData = Object.assign({}, producto); 
    this.firestore.collection('carrito').add(productoData);
  }

  ObtenerProducto() {
    // Esto te permitirá obtener todos los productos en el carrito.
    return this.firestore.collection('carrito').snapshotChanges();
  }

  eliminarProducto(idProducto: string) {
    // Lógica para eliminar un producto por su id
    this.firestore.doc('carrito/' + idProducto).delete();
  }
  
  vaciarCarrito() {
    // Consulta todos los documentos en la colección 'carrito' y elimínalos uno por uno.
    this.firestore.collection('carrito').get().subscribe(snapshot => {
      snapshot.forEach(doc => {
        this.firestore.doc('carrito/' + doc.id).delete();
      });
    });
  }
  
  aumentarCantidad(idProducto: string) {  
    // Recupera el producto por su id
    const productoRef = this.firestore.collection('carrito').doc(idProducto);
        
    productoRef.get().subscribe((doc) => {
      if (doc.exists) {
        const producto = doc.data() as Producto;
        // Aumenta la cantidad
        producto.cantidad += 1;
        producto.total = producto.precio * producto.cantidad;
        
        // Actualiza el producto en la base de datos
        productoRef.update(producto);
      }
    });
  }

  disminuirCantidad(idProducto: string) {
    // Recupera el producto por su id
    const productoRef = this.firestore.collection('carrito').doc(idProducto);

    productoRef.get().subscribe((doc) => {
      if (doc.exists) {
        const producto = doc.data() as Producto;
        // Disminuye la cantidad si es mayor que 1
        if (producto.cantidad > 1) {
          producto.cantidad -= 1;
          producto.total = producto.precio * producto.cantidad;
          

          // Actualiza el producto en la base de datos
          productoRef.update(producto);
        }
      }
    });
  }
   
}
  

