import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from 'src/app/shared/servicess/auth.service';
import { User, UserProfile } from 'firebase/auth';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  userProfileImage: string = ''; // Inicializa con un valor vacío
  Nombre: string = '';
  Apellido: string = '';
  Edad: number = 0;
  Rut: string = '';
  Sexo: string = '';
  Direccion: string = '';
  Email: string = '';
  constructor(private navCtrl: NavController,private firestore: AngularFirestore, private authService: AuthService) {} // Constructor de la clase
  ngOnInit() {
    // **Usuario**
    // Realiza una consulta para obtener el documento específico
    this.firestore
      .collection('Usuario')
      .doc('UFQt4T2qcyOYfFyWZV8J') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Nombre = data.nombre; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

      this.firestore
      .collection('Usuario')
      .doc('UFQt4T2qcyOYfFyWZV8J') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Apellido = data.Apellido; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

      this.firestore
      .collection('Usuario')
      .doc('UFQt4T2qcyOYfFyWZV8J') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Edad = data.Edad; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

      this.firestore
      .collection('Usuario')
      .doc('UFQt4T2qcyOYfFyWZV8J') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Rut = data.Rut; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

      this.firestore
      .collection('Usuario')
      .doc('UFQt4T2qcyOYfFyWZV8J') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Sexo = data.Sexo; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
      
      this.firestore
      .collection('Usuario')
      .doc('UFQt4T2qcyOYfFyWZV8J') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Direccion = data.Dirección; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

      this.firestore
      .collection('Usuario')
      .doc('UFQt4T2qcyOYfFyWZV8J') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
        this.Email = data.email; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });

      this.firestore
      .collection('Usuario')
      .doc('UFQt4T2qcyOYfFyWZV8J') // Reemplaza 'ID_DEL_DOCUMENTO' con el ID del documento que deseas obtener
      .valueChanges()
      .subscribe((data: any) => {
        // Accede a la variable específica del documento y guárdala en la variable productoNombre
      data.img = this.userProfileImage; // Reemplaza 'nombre' con el nombre de la variable que deseas mostrar
      });
    }
  goToHome() {
    this.navCtrl.navigateBack('/home'); // Cambia '/home' por tu ruta real
  }

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
    });

    if (image) {
      this.userProfileImage = image.webPath!;
        
   }
    
    }
    
        //cerrar sesión
  logOut() {
    this.authService.logOut();
  }


}