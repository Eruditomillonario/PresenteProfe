import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.page.html',
  styleUrls: ['./secciones.page.scss'],
})
export class SeccionesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  seccion1(){
    this.router.navigate(['seccion1']);
  }

  seccion2(){
    this.router.navigate(['seccion2']);
  }

  seccion3(){
    this.router.navigate(['seccion3']);
  }
}
