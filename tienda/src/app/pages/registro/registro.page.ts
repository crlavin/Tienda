import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/shared/servicess/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';


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
    private authService: AuthService,
    private firestore: AngularFirestore
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
    this.authService.signUpWithEmailAndPassword(email, password)
      .then((userCredential: any) => {
        // Verificar si userCredential no es null ni undefined
        if (userCredential && userCredential.user) {
          // El usuario se ha registrado exitosamente
          const user = userCredential.user;
  
          // Obtener datos del formulario
          const nombreControl = this.formularioR.get('nombre');
          const correoControl = this.formularioR.get('correo');
  
          // Verificar si los controles del formulario no son nulos
          if (nombreControl && correoControl) {
            const nombre = nombreControl.value;
            const correo = correoControl.value;
  
            // Crear un objeto con los datos del usuario
            const userData = {
              nombre: nombre,
              correo: correo,
              // Otros campos si es necesario
            };
  
            // Guardar datos del usuario en la colección "Usuario" de Firebase
            this.firestore.collection('Usuario').doc(user.uid).set(userData)
              .then(() => {
                console.log('Datos del usuario guardados en Firebase.');
              })
              .catch((error) => {
                console.error('Error al guardar datos del usuario en Firebase:', error);
              });
          } else {
            console.error('Alguno de los controles del formulario es nulo.');
          }
        } else {
          console.error('La credencial del usuario es nula o no tiene la propiedad "user".');
        }
      })
      .catch((error) => {
        // Handle errors
        console.error('Error al registrar el usuario:', error);
      });
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

  
  submitForm() {
    if (this.formularioR.valid) {

    }
  }
  login() {
    this.router.navigate(['/login']);
  }
}
