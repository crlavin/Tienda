import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.page.html',
  styleUrls: ['./eliminar-usuario.page.scss'],
})
export class EliminarUsuarioPage {

  userId: string = '';

  constructor(
    private afAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { }

  async eliminarUsuario() {
    try {
      const email = this.userId + '@example.com'; // Ajusta esto según tu lógica
      const password = 'password'; // Ajusta esto según tu lógica
      const credential = await this.afAuth.signInWithEmailAndPassword(email, password);

      // Obtiene el usuario autenticado
      const user = credential.user;

      if (user) {
        await user.delete();

        // Si también deseas eliminar datos del usuario en Firestore, puedes hacerlo aquí.
        // Por ejemplo, si has almacenado información del usuario en Firestore bajo su UID:
        // await this.firestore.collection('users').doc(user.uid).delete();

        console.log('Usuario eliminado con ID:', this.userId);

        // Limpia el campo de entrada después de eliminar el usuario.
        this.userId = '';
      } else {
        console.log('No se pudo obtener el usuario actual.');
      }
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  }
}
