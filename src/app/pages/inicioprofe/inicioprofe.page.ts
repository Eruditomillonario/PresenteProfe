import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicioprofe',
  templateUrl: './inicioprofe.page.html',
  styleUrls: ['./inicioprofe.page.scss'],
})
export class InicioprofePage implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  secciones(){
    this.router.navigate(['secciones']);
  } 

  restablecerpass(){
    this.router.navigate(['restablecerpass']);
  } 
}
