import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage {

  constructor(private router: Router) { }

  home() {
    this.router.navigate(['/home']);
  }
  eliminaruser() {
    this.router.navigate(['/eliminar-usuario']);
  }
  agregaruser() {
    this.router.navigate(['/agregar-usuario']);
  }
  agregarproducto() {
    this.router.navigate(['/agregar-producto']);
  }
  eliminarproducto() {
    this.router.navigate(['/eliminar-producto']);
  }
  modificarproducto() {
    this.router.navigate(['/modificar-producto']);
  }
  modificarusuario() {
    this.router.navigate(['/modificar-usuario']);
  }
}
