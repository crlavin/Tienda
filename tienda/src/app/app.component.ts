import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/servicess/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  showSplash = true;
  private openSubcategories: { [category: string]: boolean } = {};
  loggedInUserEmail: string = ""
  flag: boolean = false;
  nombreProducto: string = "";
  resultados: any[] = [];
  constructor(private router: Router,
    private authService: AuthService,
    ) {
    setTimeout(() => {
      this.showSplash = false;
    }, 3000); // Establece el tiempo que deseas que se muestre el splash screen (en milisegundos)
    this.loggedInUserEmail = this.authService.getLoggedInUserEmail();
  }
  login() {
    this.router.navigate(['/login']);
    this.flag = true;
  }

  redirectTo(category: string) {
    // Aquí redirige a la página correspondiente según la categoría seleccionada
    // Por ejemplo:
    if (category === 'Inicio') {
      this.router.navigateByUrl('/home'); // Ruta relativa a la página de inicio
    } else if (category === 'Plantas') {
      this.router.navigateByUrl('/plantas'); // Ruta relativa a la página de plantas
    } else if (category === 'Maceteros') {
      this.router.navigateByUrl('/maceteros'); // Ruta relativa a la página de maceteros
    } else if (category === 'Admin') {
      this.router.navigateByUrl('/admin'); // Ruta relativa a la página de maceteros
    }
    // Agrega más redirecciones según tus necesidades
  }

  toggleSubcategory(category: string) {
    // Abre o cierra la subcategoría
    this.openSubcategories[category] = !this.openSubcategories[category];
  }

  isSubcategoryOpen(category: string): boolean {
    // Verifica si la subcategoría está abierta o cerrada
    return this.openSubcategories[category] || false;
  }
  logOut() {
    this.authService.logOut();
    this.flag = false;
  }

  
}