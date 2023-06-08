import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

// Implementa la funcion CanActivate, que requiere por defecto de un RouteSnapshot (es decir, la ruta en la que estamos) y un estado, que puede ser un observable o una promesa booleanos o un booleano en general.
export const authGuard: CanActivateFn = (route, state) => {
  
  // Como este es un componente funcional, usamos inject para inyectar el servicio Router tal como si lo hicieramos a traves de un constructor
  const router = inject(Router);

  // Implementamos una condicion que debe cumplirse
  //...

  // Simulamos la verificacion de un token guardado en sessionStorage

  let token = sessionStorage.getItem('token');

  // La funcion debe retornar un booleano que indica si se carga la ruta (true) o no (false)
  if (token) {
    return true;
  } else {
    router.navigate(['login']);
    return false;
  }
};
