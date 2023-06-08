import { Component } from '@angular/core';
import { IContacto } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent {
  listaContactos: IContacto[] = [
    {
      id: 0,
      nombre: 'Martin',
      apellidos: 'San Jose',
      email: 'martin@imaginagroup.com',
    },
    {
      id: 1,
      nombre: 'Andrés',
      apellidos: 'García',
      email: 'andres@imaginagroup.com',
    },
    {
      id: 2,
      nombre: 'Ana',
      apellidos: 'Hernandez',
      email: 'ana@imaginagroup.com',
    },
  ];

  constructor() {}
}
