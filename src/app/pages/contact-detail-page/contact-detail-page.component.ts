import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss'],
})
export class ContactDetailPageComponent implements OnInit {
  id: any | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Leemos los parametros, suscribiendonos a los params
    this.route.params.subscribe((params: any) => {
      // Si params.id existe
      if (params.id) {
        // Guardamos esta info en nuestra variable local
        this.id = params.id;
      }
    });
  }

}
