import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { NotFoundError } from 'rxjs';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    // Declara la redirección al ingresar a la ruta raíz del proyecto. Si se ingresa a 'midominio.com/', se redireccionará a 'midominio.com/home'
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'home',
    component: HomePageComponent,
    // Declaración de subrutas (rutas hijas)
    children: [
      {
        // Indica el path anidado y el componente que debe renderizarse. En este caso 'home/hijo', y se renderiza el mismo componente (solo para no hacer mas lío al respecto).
        // Aquí tambien podemos declarar un path vacio (path: '') para indicar que debe renderizarse en el path padre, y luego definir los hijos.
        path: 'hijo',
        component: HomePageComponent,
      },
    ],
  },
  {
    path: 'contacts',
    component: ContactsPageComponent,
    // La ruta tiene un guard que verifica si esa ruta se puede mostrar o no
    canActivate: [authGuard],
  },
  {
    // :id indica que el contenido que viene luego de los ':' es información variable que se va a utilizar en el componente a renderizar.
    path: 'contacts/:id',
    component: ContactDetailPageComponent,
    // La ruta tiene un guard que verifica si esa ruta se puede mostrar o no
    canActivate: [authGuard],
  },
  {
    // Los '**' indican que si no se ha encontrado el componente a renderizar en la ruta, entonces debe renderizarse el componente indicado aqui
    path: '**',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
