import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicioalumno',
  templateUrl: './inicioalumno.page.html',
  styleUrls: ['./inicioalumno.page.scss'],
})
export class InicioalumnoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  escaner(){
    this.router.navigate(['escaner']);
  } 

  asignaturas(){
    this.router.navigate(['asignaturas']);
  } 

  restablecerpass(){
    this.router.navigate(['restablecerpass']);
  } 
} 

