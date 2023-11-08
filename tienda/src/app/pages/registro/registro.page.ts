import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/servicess/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  formularioR: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastController: ToastController, private authService: AuthService,
  ) {
    this.formularioR = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          this.containsLetter(),
          this.containsNumber(),
          this.containsSpecialCharacter(),
        ],
      ],
      confirmPassword: new FormControl('', [Validators.required]),
    });

    // Agregar validación personalizada para comparar contraseñas
    const confirmPasswordControl = this.formularioR.get('confirmPassword');
    if (confirmPasswordControl) { // Verificar si es null
      confirmPasswordControl.setValidators([
        Validators.required,
        this.passwordsMatch.bind(this),
      ]);
    }
  }
  signUp(email: string, password: string) {
    this.authService.signUpWithEmailAndPassword(email, password);
  }

  ngOnInit() { }

  // Funciones de validación personalizadas
  containsLetter() {
    return (control: AbstractControl) => {
      if (!/[A-Za-z]/.test(control.value)) {
        return { noLetter: true };
      }
      return null;
    };
  }

  containsNumber() {
    return (control: AbstractControl) => {
      if (!/\d/.test(control.value)) {
        return { noNumber: true };
      }
      return null;
    };
  }

  containsSpecialCharacter() {
    return (control: AbstractControl) => {
      if (!/[@$!%*#?&.-_]/.test(control.value)) {
        return { noSpecialCharacter: true };
      }
      return null;
    };
  }

  passwordsMatch(control: AbstractControl): { [key: string]: boolean } | null {
    const passwordControl = this.formularioR.get('password');
    if (passwordControl) { // Verificar si es null
      const password = passwordControl.value;
      const confirmPassword = control.value;

      if (password !== confirmPassword) {
        return { passwordsNotMatch: true };
      }
    }

    return null;
  }

  async mostrarToastExito() {
    const toast = await this.toastController.create({
      message: 'El registro se ha realizado correctamente.',
      duration: 2000,
      position: 'top',
      color: 'success',
    });
    toast.present();
  }

  submitForm() {
    if (this.formularioR.valid) {

    }
  }
  login() {
    this.router.navigate(['/login']);
  }
}
