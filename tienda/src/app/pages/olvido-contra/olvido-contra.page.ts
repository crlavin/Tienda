import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-olvido-contra',
  templateUrl: './olvido-contra.page.html',
  styleUrls: ['./olvido-contra.page.scss'],
})
export class OlvidoContraPage {
  formulario: FormGroup;
  constructor(private router: Router, private alertController: AlertController, private formBuilder: FormBuilder, private auth: AngularFireAuth) {
    this.formulario = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]]
    });
  }
  
  
  successMessage: string = '';
  errorMessage: string = '';

  async resetPassword(email: string) {
    if (email) {
      try {
        await this.auth.sendPasswordResetEmail(email);
        this.successMessage = 'Se ha enviado un correo de recuperación de contraseña. Revise su bandeja de entrada.';
        this.errorMessage = ''; // Reinicia el mensaje de error si hubo uno previamente.
      } catch (error) {
        console.error('Error al enviar el correo de recuperación de contraseña:', error);
        this.errorMessage = 'Ocurrió un error al enviar el correo de recuperación de contraseña. Asegúrese de que la dirección de correo electrónico sea válida.';
        this.successMessage = ''; // Reinicia el mensaje de éxito si hubo uno previamente.
      }
    } else {
      this.errorMessage = 'Por favor, ingrese una dirección de correo electrónico válida.';
    }
  }
  

  submitForm() {
    // Tu función para manejar el envío del formulario
  }

  login() {
    this.router.navigate(['/login']);
  }

  async mostrarMensaje() {
    const alert = await this.alertController.create({
      header: 'Contraseña Restablecida',
      message: 'Su contraseña se ha restablecido exitosamente.',
      buttons: ['OK']
    });

    await alert.present();
  }

}

