import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.page.html',
  styleUrls: ['./eliminar-usuario.page.scss'],
})
export class EliminarUsuarioPage {

  idUsuario: string="";

  constructor(
    
    private firestore: AngularFirestore
  ) { }
  eliminarUsuario(idUsuario: string) {
    // Lógica para eliminar un producto por su id
    this.firestore.doc('Usuario/' + idUsuario).delete();
  }
  
}
