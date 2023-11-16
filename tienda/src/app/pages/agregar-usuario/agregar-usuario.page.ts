import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: 'agregar-usuario.page.html',
  styleUrls: ['agregar-usuario.page.scss'],
})
export class AgregarUsuarioPage {
  nombre: string = "";
  correo: string = "";
  contrasena: string = "";

  constructor(
    private firebaseAuthenticationService
: AngularFireAuth,
    private afDB: AngularFireDatabase
  ) {}

  async agregarUsuario() {
    try {
      const userCredential = await this.firebaseAuthenticationService
.createUserWithEmailAndPassword(this.correo, this.contrasena);
      const user = userCredential.user;

      // Ahora puedes guardar otros datos del usuario en Firebase Realtime Database o Firestore
      if (user) {
        this.afDB.list('Usuario').push({
          nombre: this.nombre,
          correo: this.correo,
          uid: user.uid
        });
      }

      console.log('Usuario registrado con éxito.');
    } catch (error) {
      console.error('Error al registrar el usuario:', error);
    }
  }
}
