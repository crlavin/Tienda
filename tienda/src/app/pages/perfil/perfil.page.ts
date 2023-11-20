import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/shared/servicess/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage {
  userProfileImage: string = ''; // Inicializa con un valor vacío
  loggedInUserEmail: string = "";
  name: String = "";
  constructor(private navCtrl: NavController,
    private authService: AuthService) {
    this.loggedInUserEmail = this.authService.getLoggedInUserEmail();
    if(this.loggedInUserEmail == "admin@gmail.com"){
      this.name = "admin";
    }
    else if(this.loggedInUserEmail == "v.rosendo@profesor.duoc.cl"){
      this.name = "victor";
    }
    else  if(this.loggedInUserEmail == "cristian.lavin02@gmail.com"){
      this.name = "cristian";
    }
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

}