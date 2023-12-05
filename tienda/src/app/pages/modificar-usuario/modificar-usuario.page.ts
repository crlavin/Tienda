import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.page.html',
  styleUrls: ['./modificar-usuario.page.scss'],
})
export class ModificarUsuarioPage {

  userApellido: string = '';
  direccion: string = '';
  edad: number = 0;
  id: string = '';
  rut: string = '';
  sexo: string = '';
  contrasena: string = '';
  email: string = '';
  nombre: string = '';

  constructor(private firestore: AngularFirestore) {}

  modificarUsuario() {
    const userId = this.id; // Obtener el ID del usuario desde el input
    const updatedData = {
      apellido: this.userApellido,
      direccion: this.direccion,
      edad: this.edad,
      rut: this.rut,
      sexo: this.sexo,
      contrasena: this.contrasena,
      email: this.email,
      nombre: this.nombre,
    };

    this.updateUser(userId, updatedData);
  }

  private updateUser(userId: string, updatedData: any) {
    const userRef = this.firestore.collection('usuarios').doc(userId);

    // Utiliza el método 'update' para modificar el usuario existente
    return userRef.update(updatedData)
      .then(() => {
        console.log('Usuario actualizado con éxito');
      })
      .catch(error => {
        console.error('Error al actualizar el usuario: ', error);
      });
  }
}