import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/servicess/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  userProfileImage: string = ''; // Inicializa con un valor vacío
  loggedInUserEmail: string = "";
  loggedInUserName: string = '';
  newPassword: string = '';
  constructor(private navCtrl: NavController,
    private authService: AuthService,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private alertController: AlertController) {
    this.loggedInUserEmail = this.authService.getLoggedInUserEmail();
    this.getUserNameFromDatabase();
  }
  ngOnInit() {
  }
  goToHome() {
    this.navCtrl.navigateBack('/home');
  }

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Prompt,
    });

    if (image) {
      localStorage.setItem('tempUserProfileImage', image.webPath!);
      this.userProfileImage = image.webPath!;

    }

  }
  getUserNameFromDatabase() {
    console.log('Correo electrónico a buscar:', this.loggedInUserEmail);
  
    this.firestore.collection('Usuario').ref.where('correo', '==', this.loggedInUserEmail)
      .get()
      .then(querySnapshot => {
        if (!querySnapshot.empty) {
          const usuarioEncontrado:any = querySnapshot.docs[0].data();
          this.loggedInUserName = usuarioEncontrado.nombre;
        } else {
          console.error(`No se encontró ningún usuario con el correo electrónico ${this.loggedInUserEmail}`);
          // Puedes asignar un valor predeterminado o mostrar un mensaje de error
        }
      })
      .catch(error => {
        console.error('Error al obtener datos de Firebase:', error);
      });
  }
  
  async changePassword(newPassword: string) {
    try {
      const user = await this.afAuth.currentUser;
  
      if (user) {
        await user.updatePassword(newPassword);
        this.presentSuccessAlert();  // Llamamos a la función que muestra el alerta
      } else {
        console.error('No hay usuario autenticado');
      }
    } catch (error) {
      console.error('Error al cambiar la contraseña:', error);
    }
  }
  
  // Función para mostrar un alerta de éxito
  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Contraseña actualizada con éxito',
      buttons: ['OK']
    });
    alert.present();
  }
}
